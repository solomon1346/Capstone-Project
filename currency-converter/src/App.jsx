import { useState, useEffect } from "react";
import AmountInput from "./components/AmountInput";
import CurrencySelector from "./components/CurrencySelector";
import ConversionResult from "./components/ConversionResult";
import ExchangeRateInfo from "./components/ExchangeRateInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [rates, setRates] = useState({});
  const [result, setResult] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const currencies = [
    "USD",
    "EUR",
    "GBP",
    "JPY",
    "CAD",
    "AUD",
    "CHF",
    "CNY",
    "GHS"
  ];

  // Fetch exchange rates when fromCurrency changes
  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/510acefc700b67d3cb548651/latest/${fromCurrency}`
        );

        const data = await response.json();

        if (data.result !== "success") {
          throw new Error("API error");
        }

        setRates(data.conversion_rates);
      } catch (err) {
        setError("Failed to fetch exchange rates. Check internet connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [fromCurrency]);

  const handleConvert = () => {
    if (!amount || amount <= 0) {
      setError("Enter a valid amount.");
      return;
    }

    if (!rates[toCurrency]) {
      setError("Currency not supported.");
      return;
    }

    const rate = rates[toCurrency];
    const converted = (amount * rate).toFixed(2);

    setExchangeRate(rate);
    setResult(converted);
    setError("");
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          Currency Converter
        </h1>

        <AmountInput amount={amount} setAmount={setAmount} />

        <CurrencySelector
          label="From"
          value={fromCurrency}
          setValue={setFromCurrency}
          currencies={currencies}
        />

        <div className="flex justify-center my-3">
          <button
            onClick={handleSwap}
            className="text-sm text-blue-600 hover:underline"
          >
            Swap
          </button>
        </div>

        <CurrencySelector
          label="To"
          value={toCurrency}
          setValue={setToCurrency}
          currencies={currencies}
        />

        <button
          onClick={handleConvert}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition mt-4"
        >
          Convert
        </button>

        {loading && (
          <p className="text-center text-gray-500 mt-4">
            Fetching latest rates...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500 mt-4">
            {error}
          </p>
        )}

        {result && !loading && (
          <div className="mt-6 text-center">
            <ConversionResult result={result} />
            <ExchangeRateInfo
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              exchangeRate={exchangeRate}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;