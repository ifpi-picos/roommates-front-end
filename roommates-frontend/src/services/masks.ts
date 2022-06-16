export const formatToMoney = (value: number) => {
  const valueConvertedToString = value.toFixed(2).replace('.', ',');

  return `R$ ${valueConvertedToString}`
}
