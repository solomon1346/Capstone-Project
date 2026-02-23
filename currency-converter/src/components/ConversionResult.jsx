function ConversionResult({ result }) {
  return (
    <div className="text-xl font-semibold">
      {result
        ? `Converted Amount: ${result}`
        : "Converted amount will appear here"}
    </div>
  );
}

export default ConversionResult;