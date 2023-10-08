const Menu = () => {
	const { isMenuOpen, toggleMenu } = useStore(({ isMenuOpen, toggleMenu }) => ({ isMenuOpen, toggleMenu }));

	return (
		<section className="inset-0 fixed z-9999">
			{/* Controller button */}
			<div className="fixed left-5% top-5% group">
				<RoundButton className="group-hover:fill-accent absolute size-8 animate-ping pointer-events-none" />
				<RoundButton className="absolute size-8 hover:opacity-100" onClick={toggleMenu}>
					<AnimatePresence>
						{isMenuOpen ? (
							<motion.span
								initial={{ scale: 0, rotate: 0, opacity: 0 }}
								animate={{ scale: 1, rotate: 90, opacity: 1 }}
								exit={{ scale: 0, rotate: 0, opacity: 0 }}
								className="text-4 absolute">
								<IconPhXBold />
							</motion.span>
						) : (
							<motion.span
								initial={{ scale: 0, rotate: 0, opacity: 0 }}
								animate={{ scale: 1, rotate: 0, opacity: 1 }}
								exit={{ scale: 0, rotate: 90, opacity: 0 }}
								className="text-4 absolute">
								<IconPhListFill />
							</motion.span>
						)}
					</AnimatePresence>
				</RoundButton>
			</div>

			{/* Menu */}
			<PrimaryMenu className="fixed inset-y-0 flex flex-col justify-center left-15%" />
		</section>
	);
};

export default Menu;
