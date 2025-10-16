const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront) {
    arr.unshift(value);
  } else {
    arr.push(value);
  }

};

const reverseString = (str) => {
  return str.split('').reverse().join('');

};

const newArrayFullOf = (value, numOfValue) => {
  return Array(numOfValue).fill(value);

};

const insertIntoMiddle = (arr, value) => {
  const middleIndex = Math.floor(arr.length / 2);
  arr.splice(middleIndex, 0, value);

};

const deleteFromMiddle = (arr) => {
  const middleIndex = Math.floor(arr.length / 2);
  arr.splice(middleIndex, 1);

};

const isRightIndex = (arr, value, index) => {
  return arr[index] === value;

};

const roundAllNumsDown = (arr) => {
  return arr.map(num => Math.floor(num));

};

const getAllYCoordinates = (arrOfCoords) => {
  return arrOfCoords.map(coord => coord[1]);

};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
