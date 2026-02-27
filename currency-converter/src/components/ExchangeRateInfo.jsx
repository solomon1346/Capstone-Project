function ExchangeRateInfo({ fromCurrency, toCurrency, exchangeRate }) {
  if (!exchangeRate) return null;

  return (
    <p className="text-sm text-gray-500 mt-2">
      1 {fromCurrency} = {exchangeRate} {toCurrency}
    </p>
  );
}

export default ExchangeRateInfo;