function AmountInput({ amount, setAmount }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">
        Amount
      </label>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default AmountInput;