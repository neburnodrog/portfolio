export const getColor = (
  a: number = 0,
  b: number = 255,
  alphaA: number = 0,
  alphaB: number = 1,
  withAlpha: boolean = true,
) => {
  const red = Math.floor(Math.random() * (b - a)) + a;
  const green = Math.floor(Math.random() * (b - a)) + a;
  const blue = Math.floor(Math.random() * (b - a)) + a;
  const alpha = Math.random() * (alphaB - alphaA) + alphaA;

  return `rgb${withAlpha ? 'a' : ''}(${red},${green},${blue}${
    withAlpha ? ',' + alpha : ''
  })`;
};

export const getInverseColor = (color: string, withAlpha: boolean = true) => {
  const [red, green, blue, alpha] = color
    .split('(')[1]
    .split(')')[0]
    .split(',')
    .map(Number);

  return `rgb${withAlpha ? 'a' : ''}(
    ${255 - red}, 
    ${255 - green}, 
    ${255 - blue}
    ${withAlpha ? ',' + String(1 - alpha) : ''})`;
};

export const getRidOfAlpha = (color: string) => {
  let newColorArr = color.split(',');

  if (newColorArr.length === 4) {
    const newColor = newColorArr.slice(0, 3).join(',') + ',1)';
    return newColor;
  }

  return color;
};
