const getRandom = () => {
  const min = 0;
  const max = 255;

  const randomColor = Math.ceil(Math.random() * (max - min) + min);

  return randomColor;
};

const getRandomColor = () => {
  return `rgb(${getRandom()},${getRandom()},${getRandom()})`;
};

export default getRandomColor;
