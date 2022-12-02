function getRandomNumber (min, max) {
  if (min < 0 || max < 0) {
    throw new Error('Number is not positive!');
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function checkCommentLength (line, maxLenght) {
  return (line.length <= maxLenght);
}


export {getRandomNumber, checkCommentLength};
