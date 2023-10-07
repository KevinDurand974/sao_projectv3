const Menu = () => {
	const { isOpen, close, open } = useStore(({ isOpen, close, open }) => ({ isOpen, close, open }));

	return (
		<section className="inset-0 fixed z-9999">
			<div className="fixed left-10 top-10 group">
				<RoundButton className="group-hover:fill-accent absolute size-8 animate-ping pointer-events-none" />
				<RoundButton className="absolute size-8 hover:opacity-100" onClick={isOpen ? close : open}>
					<span className="text-4">{isOpen ? <IconPhXBold /> : <IconPhListFill />}</span>
				</RoundButton>
			</div>

			<pre> {isOpen ? "Open" : "Close"} </pre>
		</section>
	);
};

export default Menu;
