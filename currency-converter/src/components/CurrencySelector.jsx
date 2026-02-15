function CurrencySelector({ label, value, setValue, currencies }) {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-3 border rounded"
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  )
}

export default CurrencySelector;
