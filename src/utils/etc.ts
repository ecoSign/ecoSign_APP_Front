export const commaNum = (num: any) => {
  if (isNaN(parseInt(num))) {
    return num;
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
