import {getRandomNumber} from './util.js';


function getRandomArrayElement (elements) {
  return elements[getRandomNumber(0, elements.length - 1)];
}

function getRandomArrayElements (arr){
  return arr.slice(0, getRandomNumber(1, arr.length));
}

function getrandomUniqueValue (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomNumber (min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ' + ${min} + ' до ' + ${max}`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber (min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const randomUniqueIdPhoto = getrandomUniqueValue(1, 26);
const randomUniqueUrlPhoto = getrandomUniqueValue(1, 26);
const randomUniqueIdPhotoComment = getrandomUniqueValue (110, 150);

function getAvatarPhoto () {
  return `img/avatar-${getRandomNumber (1, 6)}.svg`;
}


const descriptions = ['Классная фотография', 'Хорошая фотография', 'Отличная фотография'];

const massages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const names = ['Анастасия', 'Константин', 'Владислав', 'Маргарита', 'Дмитрий'];

function createPost () {
  return {
    id: randomUniqueIdPhoto (),
    url: `photos/${randomUniqueUrlPhoto ()}.jpg`,
    description: getRandomArrayElement (descriptions),
    likes: getRandomNumber (15, 200),
    comments: [
      {id: randomUniqueIdPhotoComment ()},
      {avatar: getAvatarPhoto ()},
      {message: getRandomArrayElements (massages)},
      {name: getRandomArrayElement (names)},
    ]
  };
}

const createPosts = Array.from({length: 26}, createPost);

export {createPosts};
