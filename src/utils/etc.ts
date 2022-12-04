export const commaNum = (num: string | number) => {
  if (isNaN(parseInt(<string>num))) {
    return num;
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
