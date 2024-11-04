# Three.js Neon Cube Interactive

This project is an interactive 3D website using Three.js, featuring a neon wireframe cube that responds to mouse movements. It offers a futuristic, visually engaging experience with smooth animations and interactive effects.

## 🎯 This Is Box
- Neon-colored wireframe cube with vibrant colors
- Cube rotation follows mouse movement
- 3D rendering with Three.js for a smooth and responsive experience

## 🛠️ Library, Framework And Language Used
- [Three.js](https://threejs.org/) - JavaScript library for 3D graphics
- HTML5 & CSS3 - Basic structure and styling for the webpage

## 📂 Project Structure
```
.
├── index.html        # Main HTML file
├── style.css         # Basic styling
├── script.js         # Main script with Three.js
```

- Open `index.html` in your browser to view the project locally.

   > **Tip**: Use a local server extension like Live Server (for VSCode) to run the project on localhost with live reloading.

## 💻 Customization
- **Neon Color**: Change the `color` value in `script.js` under `MeshBasicMaterial` to adjust the color.
- **Rotation Sensitivity**: Modify the values in `animate()` for `cube.rotation.x` and `cube.rotation.y` to adjust the rotation speed.
- **Cube Size**: Change the `size` parameter in `BoxGeometry` to adjust the cube's dimensions.

## 🤝 Contributing
Contributions are welcome! Feel free to fork this repository and make a pull request for any enhancements or fixes.

1. Fork the repo
2. Create a new branch (`git checkout -b new-feature`)
3. Commit your changes (`git commit -m 'Add a new feature'`)
4. Push to the branch (`git push origin new-feature`)
5. Open a Pull Request
