function ConversionResult({ result }) {
  return (
    <div className="mt-4 text-center text-xl font-semibold">
      {result !== null ? `Converted Amount: ${result}` : 'Enter amount to convert'}
    </div>
  )
}

export default ConversionResult;
