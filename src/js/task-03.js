const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createLiWithImgTagWithAttributes = (url, alt) => { 
  const liEl = document.createElement('li');
  liEl.classList.add('gallery__item');
  const imgEl = document.createElement('img');
  imgEl.classList.add('gallery__img')
  imgEl.src = url;
  imgEl.alt = alt;
  liEl.append(imgEl);

  return liEl.outerHTML;
};

const allImginStr = images.reduce(
  (str, { url, alt }) => str + createLiWithImgTagWithAttributes(url, alt),
  ""
);

document.querySelector(".gallery").insertAdjacentHTML('afterbegin', allImginStr);

