const ALL_CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function generateShape(x, y) {
    return {
      objectType: getRandomShape(),
      position: {x, y},
      label: generateRandomString(5, 10)
    }
}

function getRandomShape() {
  const shapes = ['circle', 'square', 'diamond'];
  const randomIndex = Math.floor(Math.random() * shapes.length);
  return shapes[randomIndex];
}

function generateRandomString(minLength, maxLength) {
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * ALL_CHARACTERS.length);
    randomString += ALL_CHARACTERS[randomIndex];
  }
  return randomString;
}

module.exports.generateShape = generateShape;
