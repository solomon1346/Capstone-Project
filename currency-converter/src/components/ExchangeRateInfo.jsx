function AmountInput({ amount, setAmount }) {
  return (
    <input
      type="number"
      placeholder="Enter amount"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      className="w-full p-3 border rounded mb-4"
    />
  )
}

export default AmountInput;
