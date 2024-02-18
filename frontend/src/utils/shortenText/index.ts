export const shortenText = (text: string, maxLength = 20) => {
  if (text.length > maxLength && maxLength >= 0) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};
