function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const bgColor = '#' + r.toString(16) + g.toString(16) + b.toString(16);

  return bgColor;
}

export default randomColor;
