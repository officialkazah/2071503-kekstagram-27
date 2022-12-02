import {getRandomNumber} from './util.js';


function getRandomArrayElement (elements) {
  return elements[getRandomNumber(0, elements.length - 1)];
}

function getRandomArrayElements (arr){
  return arr.slice(0, getRandomNumber(1, arr.length));
}

function getrandomUniqueValue (arr, countNumbermin, countNumbermax) {
  let nextValue;
  while (arr.length < 25) {
    nextValue = getRandomNumber (countNumbermin, countNumbermax);
    if (!arr.includes(nextValue)) {
      arr.push(nextValue);
      return nextValue;
    }
  }
}

const randomUniqueIdPhotos = [];
const randomUniqueUrlPhotos = [];
const randomUniqueIdPhotoComments = [];

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

function createData () {
  return {
    id: getrandomUniqueValue (randomUniqueIdPhotos, 1, 25),
    url: `photos/${getrandomUniqueValue (randomUniqueUrlPhotos, 1, 25)}.jpg`,
    description: getRandomArrayElement(descriptions),
    likes: getRandomNumber(15, 200),
    comments: [
      {id: getrandomUniqueValue (randomUniqueIdPhotoComments, 110, 150)},
      {avatar: getAvatarPhoto ()},
      {message: getRandomArrayElements (massages)},
      {name: getRandomArrayElement (names)},
    ]
  };
}

const createDatas = Array.from({length: 25}, createData);

export {createDatas};
