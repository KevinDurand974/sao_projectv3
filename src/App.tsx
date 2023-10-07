function App() {
	const bears = useStore((state) => state.bears);
	const addOne = useStore((s) => s.addOne);
	const addBy = useStore((s) => s.addBy);
	const delOne = useStore((s) => s.delOne);
	const delBy = useStore((s) => s.delBy);
	const reset = useStore((s) => s.reset);

	console.count("Rerender");

	return (
		<div>
			<h1 className="text-7 font-800 text-dark">{bears} Bears</h1>

			<button
				className="bg-neutral-1 text-dark border-1 border-solid border-dark px-4 py-2"
				type="button"
				onClick={delOne}>
				-1
			</button>
			<button
				className="bg-neutral-1 text-dark border-1 border-solid border-dark px-4 py-2"
				type="button"
				onClick={() => delBy(10)}>
				-10
			</button>
			<button
				className="bg-neutral-1 text-dark border-1 border-solid border-dark px-4 py-2"
				type="button"
				onClick={reset}>
				Reset
			</button>
			<button
				className="bg-neutral-1 text-dark border-1 border-solid border-dark px-4 py-2"
				type="button"
				onClick={() => addBy(10)}>
				+10
			</button>
			<button
				className="bg-neutral-1 text-dark border-1 border-solid border-dark px-4 py-2"
				type="button"
				onClick={addOne}>
				+1
			</button>
		</div>
	);
}

export default App;
