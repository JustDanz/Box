// Inisialisasi scene, kamera, dan renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

// Mengatur ukuran renderer dan menambahkannya ke DOM
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Membuat kubus simetris dengan ukuran yang sama di setiap sisi
const size = 1; // ukuran sisi kubus
const geometry = new THREE.BoxGeometry(size, size, size); // Panjang, lebar, dan tinggi sama
const material = new THREE.MeshBasicMaterial({
    color: 0x00ffff,       // Warna neon (cyan terang)
    wireframe: true        // Mengaktifkan wireframe untuk hanya menampilkan garis
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Posisi awal kamera
camera.position.z = 5;

// Variabel untuk menyimpan posisi kursor
let mouseX = 0;
let mouseY = 0;

// Event listener untuk menangkap pergerakan mouse
document.addEventListener('mousemove', (event) => {
    // Menghitung nilai mouseX dan mouseY relatif terhadap ukuran layar
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Animasi
function animate() {
    requestAnimationFrame(animate);

    // Membuat rotasi kubus mengikuti posisi mouse
    cube.rotation.x += (mouseY * Math.PI - cube.rotation.x) * 0.05;
    cube.rotation.y += (mouseX * Math.PI - cube.rotation.y) * 0.05;

    // Render scene
    renderer.render(scene, camera);
}
animate();

// Menyesuaikan ukuran canvas saat jendela diubah
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight; // Pastikan rasio kamera diperbarui
    camera.updateProjectionMatrix();
});
