const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img-pic');
const likesCount = bigPicture.querySelector ('.likes-count');

const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const commentsCount = socialCommentCount.querySelector('.comments-count');
const socialCaption = document.querySelector('.social__caption');
const socialComments = bigPicture.querySelector('.social__comments');

const closeBigPictureButton = bigPicture.querySelector('.big-picture__cancel');

// Открытие фотографии в масштабе
function createBigPhoto (pictureImg, pictureSrc, pictureLikes, pictureComments, pictureDescription) {
  pictureImg.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    bigPictureImg.src = pictureSrc.src;
    likesCount.textContent = pictureLikes.textContent;
    commentsCount.textContent = pictureComments.textContent;
    socialCaption.textContent = pictureDescription;
  });
}

// Генерация комментариев
function createComments (avatar, name, comment) {
  socialComments.innerHTML = '';

  const text = (
    `<li class="social__comment">
        <img
            class="social__picture"
            src="${avatar}"
            alt=${name}
            width="35" height="35">
        <p class="social__text">${comment}</p>
    </li>`
  );

  socialComments.insertAdjacentHTML('beforeend', text);
}

// Блокировка добавления комента и счетчика коментов
function disabledNewComment (pisctureMin) {
  pisctureMin.addEventListener('click', () => {
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
  });
}

// отмена прокрутки изображений при открытии фото большего формата
function cancelScrolling (pisctureMin) {
  pisctureMin.addEventListener('click', () => {
    document.body.classList.add('modal-open');
  });
}

// Закрытие окна по
function closeModalWindow () {
  closeBigPictureButton.addEventListener('click',() => {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });
}
closeModalWindow ();

export {createBigPhoto, createComments, disabledNewComment, cancelScrolling};
