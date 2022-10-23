export const commaNum = (num) => {
  if (isNaN(parseInt(num))) {
    return num;
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
