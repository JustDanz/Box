// Inisialisasi scene, kamera, dan renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

// Mengatur ukuran renderer dan menambahkannya ke DOM
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Membuat kubus geometry dengan hanya garis-garis tepi menggunakan EdgesGeometry
const size = 1; // Ukuran sisi kubus
const geometry = new THREE.BoxGeometry(size, size, size); // Kubus dengan ukuran sisi simetris
const edges = new THREE.EdgesGeometry(geometry); // Hanya menampilkan garis-garis tepi
const material = new THREE.LineBasicMaterial({
    color: 0x00ffff // Warna neon cyan
});
const cube = new THREE.LineSegments(edges, material); // Menggunakan LineSegments untuk tampilan garis

scene.add(cube);

// Posisi awal kamera
camera.position.z = 6; // Posisikan kamera sedikit lebih jauh agar lebih simetris

// Variabel untuk menyimpan posisi kursor
let mouseX = 0;
let mouseY = 0;

// Event listener untuk menangkap pergerakan mouse
document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Animasi
function animate() {
    requestAnimationFrame(animate);

    // Menjaga kubus lebih stabil dengan perubahan rotasi kecil berdasarkan posisi mouse
    cube.rotation.x += (mouseY * Math.PI * 0.5 - cube.rotation.x) * 0.1;
    cube.rotation.y += (mouseX * Math.PI * 0.5 - cube.rotation.y) * 0.1;

    // Render scene
    renderer.render(scene, camera);
}
animate();

// Menyesuaikan ukuran canvas saat jendela diubah
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
