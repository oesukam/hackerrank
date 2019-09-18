// Complete the calculateArea function below.
// It returns a Promise which on success, returns area of the shape, and on failure returns [-1].
const calculateArea = (shape, values) => {
  return new Promise((resolve, reject) => {
    let area;
    switch (shape) {
      case 'square':
        area = values[0] * values[0];
        resolve(Math.round(area * 100) / 100);
        break;
      case 'rectangle':
        area = values[0] * values[1];
        resolve(Math.round(area * 100) / 100);
        break;
      case 'circle':
        area = 3.14 * (values[0] * values[0]);
        resolve(Math.round(area * 100) / 100);
        break;
      case 'triangle':
        area = 0.5 * values[0] * values[1];
        resolve(Math.round(area * 100) / 100);
        break;
      default:
        reject(-1);
        break;
    }
  });
};

// Complete the generateArea function below.
// It returns a Promise which on success, returns an array of areas of all the shapes and on failure, returns [-1].
const getAreas = (shapes, values_arr) => {
  const promises = [];
  shapes.forEach((shape, index) => {
    promises.push(calculateArea(shape, values_arr[index]));
  });

  return new Promise((resolve, reject) => {
    Promise.all(promises)
      .then(shapesArea => {
        resolve(shapesArea);
      })
      .catch(err => {
        reject([-1]);
      });
  });
};

module.exports.calculateArea = calculateArea;
module.exports.getAreas = getAreas;
