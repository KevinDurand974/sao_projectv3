const Menu = () => {
	const menu = useStore(({ isMenuOpen, toggleMenu }) => ({ isMenuOpen, toggleMenu }));

	return (
		<section className="inset-0 fixed z-9999">
			<div className="fixed left-10 top-10 group">
				<RoundButton className="group-hover:fill-accent absolute size-8 animate-ping pointer-events-none" />
				<RoundButton className="absolute size-8 hover:opacity-100" onClick={menu.toggleMenu}>
					<AnimatePresence>
						{menu.isMenuOpen && (
							<motion.span
								key="exit"
								initial={{ scale: 0, rotate: 0 }}
								animate={{ scale: 1, rotate: 90 }}
								exit={{ scale: 0, rotate: 0 }}
								className="text-4 absolute">
								<IconPhXBold />
							</motion.span>
						)}
						{!menu.isMenuOpen && (
							<motion.span
								key="open"
								initial={{ scale: 0, rotate: 0 }}
								animate={{ scale: 1, rotate: 0 }}
								exit={{ scale: 0, rotate: 90 }}
								className="text-4 absolute">
								<IconPhListFill />
							</motion.span>
						)}
					</AnimatePresence>
				</RoundButton>
			</div>
		</section>
	);
};

export default Menu;
