export const formatPercent = (value: number, digits: number = 0) => {
  return Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "percent",
    minimumFractionDigits: digits,
  }).format(value / 100);
};
