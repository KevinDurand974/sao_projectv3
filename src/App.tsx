import bg1 from "./assets/images/backgrounds/img-1.jpg";

const App = () => {
	// const bears = useStore((state) => state.bears); store exemple

	return (
		<main className="w-full h-full">
			<img src={bg1} className="w-full h-full object-cover object-center" />

			<Menu />
		</main>
	);
};

export default App;
