const colorPalette = ['#ff4463', '#c226ff', '#15cff0', '#1bb6b6', '#1db61d'];
changePalette(colorPalette);

export function setColor(index) {
  return colorPalette[index];
}

function changePalette(array) {
  const changedArray = array.sort(() => Math.random() - 0.5);

  return changedArray;
}
