import { useState } from "react";
import AmountInput from "./components/AmountInput";
import CurrencySelector from "./components/CurrencySelector";
import ConversionResult from "./components/ConversionResult";

function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState(null);

  // Temporary static currencies for now
  const currencies = [
    "USD",
    "EUR",
    "GBP",
    "JPY",
    "CAD",
    "AUD",
    "GHS"
  ];

  const handleConvert = () => {
    // Placeholder logic (real API comes next week)
    if (!amount) {
      setResult(null);
      return;
    }

    // Fake temporary conversion for structure testing
    const fakeRate = 1.2;
    const converted = (amount * fakeRate).toFixed(2);
    setResult(converted);
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

        <div className="mt-6 text-center">
          <ConversionResult result={result} />
        </div>
      </div>
    </div>
  );
}

export default App;