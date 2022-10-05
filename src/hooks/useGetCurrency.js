const useGetCurrency = (amount) => {
  const currency = new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
  }).format(amount);

  return currency;
};

export default useGetCurrency;
