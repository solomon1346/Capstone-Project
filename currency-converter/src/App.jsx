import { useState } from "react";
import AmountInput from "./components/AmountInput";
import CurrencySelector from "./components/CurrencySelector";
import ConversionResult from "./components/ConversionResult";

function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);

  const currencies = ['USD', 'EUR', 'GBP', 'JPY']; // add more later

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-6">Currency Converter</h1>

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

        <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 mb-4">
          Convert
        </button>

        <ConversionResult result={result} />
      </div>
    </div>
  )
}

export default App;
