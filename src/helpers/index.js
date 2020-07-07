export const convertJSONtoArray = (data) => Object.keys(data).map((key) => data[key]);

export const toFixedNoRounding = (number, decimals = 2) => {
  const d = 10 ** decimals;
  return number % 1 === 0 ? Math.trunc(number) : (number * d) / d.toFixed(decimals);
};
