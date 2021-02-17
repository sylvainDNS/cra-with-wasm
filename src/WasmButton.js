const WasmButton = () => {
  const handleClick = async () => {
    const promise = await import('hello-world-wasm')
    promise.greet()
  }

  return <button onClick={handleClick}>Display WASM alert</button>
}

export default WasmButton
