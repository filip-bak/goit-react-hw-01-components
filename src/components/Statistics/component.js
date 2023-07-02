const colorPalette = ['#ff4463', '#c226ff', '#15cff0', '#1bb6b6', '#1db61d'];
changePalette(colorPalette);

export function setColor(index) {
  if (index >= colorPalette.length) {
    const getRandomColor = () => {
      const randomHexNumber = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
      return '#' + randomHexNumber;
    };
    colorPalette.push(getRandomColor());
  }
  return colorPalette[index];
}

function changePalette(array) {
  const changedArray = array.sort(() => Math.random() - 0.5);

  return changedArray;
}
