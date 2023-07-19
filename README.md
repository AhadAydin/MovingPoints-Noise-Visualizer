# MovingPoints Noise Generator

This is a 2D Noise Generator implemented using p5.js, a JavaScript library for creative coding and visualization. The generator creates an array of points in space and moves them freely within the canvas. Each point's position is updated in every frame, and for each point, the distance to all other points is calculated. The resulting distances are then used to generate a visual representation of noise.

## Live Demo

You can try out the Tic-Tac-Toe game by visiting the [live demo](https://editor.p5js.org/Ahad_BDB/full/nNhE1UXna).

## How It Works

- The generator creates a specified number of points randomly positioned within the canvas.
- Each point moves freely within the canvas, bouncing off the edges.
- In each frame, the distance between each point and all other points is calculated.
- The distances are processed and mapped to values between 0 and 255 to generate a visual representation of the noise.
- The visual representation is displayed on the canvas as points, with the intensity of each point's color corresponding to the calculated noise value.
- Additionally, a second canvas displays a graph representing the noise values in a 3D-like format.

## Usage

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in your web browser.
3. The 2D Noise Generator will start automatically, and you will see the points moving and the visual representation of the noise being updated.
4. Customize the parameters such as `pointCount`, `res`, `pixelCount`, and `maxDist` in the code to experiment with different noise patterns and visual effects.
5. Feel free to modify the code and adapt the generator according to your preferences.

## Files and Directory Structure

- `index.html`: The main HTML file that includes the necessary scripts and sets up the canvas.
- `sketch.js`: The p5.js sketch file that contains the logic and rendering functions for the 2D Noise Generator.
- `movingPoints.js`: A separate JavaScript file that defines the `MovingPoint` class used to represent and update the moving points.
- `style.css`: The CSS file that defines the styling for the generator.
- `README.md`: This file, providing information about the generator and its implementation.

## License

This project is licensed under the [MIT License](LICENSE).

