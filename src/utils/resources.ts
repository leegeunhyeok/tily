export const imagePreloader = (src: string) => new Promise((resolve, reject) => {
  const image = new Image();
  image.src = src;
  image.onerror = reject;
  image.onended = resolve;
});
