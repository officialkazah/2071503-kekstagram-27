import {createPosts} from './data.js';
import {createBigPhoto, createComments, disabledNewComment, cancelScrolling} from './big-picture.js';

const pictures = document.querySelector('.pictures');
const picture = document.querySelector('#picture').content.querySelector('.picture');
const similarListFragment = document.createDocumentFragment();


createPosts.forEach((post) => {
  const pictureClone = picture.cloneNode(true);
  const pictureImg = pictureClone.querySelector('.picture__img');
  const pictureLikes = pictureClone.querySelector('.picture__likes');
  const pictureComments = pictureClone.querySelector('.picture__comments');
  const pictureDescription = post.description;

  const commentAvatar = post.comments[1].avatar;
  const commentName = post.comments[3].name;
  const commentMassage = post.comments[2].message;
  const commentsCount = post.comments[2].message.length;


  pictureImg.src = post.url;
  pictureLikes.textContent = post.likes;
  pictureComments.textContent = commentsCount;

  for (let i = 0; i < commentsCount; i++) {
    createComments (commentAvatar, commentName, commentMassage);
  }

  similarListFragment.appendChild(pictureClone);
  createBigPhoto (pictureClone, pictureImg, pictureLikes, pictureComments, pictureDescription);

  disabledNewComment (pictureImg);
  cancelScrolling (pictureImg);
});

pictures.appendChild(similarListFragment);
