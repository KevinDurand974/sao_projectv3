import { AnimationDefinition } from "framer-motion";

type Props = {
	className?: string;
};

const menuVariants = {
	animate: { transition: { staggerDirection: -1, staggerChildren: 0.1 } },
	exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};

const childDefault = {
	animate: { y: 0, opacity: 1, transition: { type: "tween", ease: "easeOut" } },
	exit: { x: -50, opacity: 0, transition: { type: "tween", ease: "easeIn" } },
};

const messageVariants = {
	initial: { y: -250, opacity: 0 },
	...childDefault,
};
const playerVariants = {
	initial: { y: -350, opacity: 0 },
	...childDefault,
};
const settingsVariants = {
	initial: { y: -450, opacity: 0 },
	...childDefault,
};

const PrimaryMenu = ({ className }: Props) => {
	const [ready, setReady] = useState(false);

	const isOpen = useStore(({ isMenuOpen }) => isMenuOpen);
	const { select, selected } = useStore(({ mainSelected, mainSelect }) => ({
		select: mainSelect,
		selected: mainSelected,
	}));

	const handleEndAnimation = (name: AnimationDefinition) => {
		if (name === "animate") setReady(true);
		else setReady(false);
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					variants={menuVariants}
					initial="initial"
					animate="animate"
					exit="exit"
					onAnimationComplete={handleEndAnimation}
					className={clsx(className, "flex flex-col gap-6 origin-top")}>
					<motion.div variants={messageVariants}>
						<RoundButton ring className="size-18" selected={ready && selected === 1} onClick={() => select(1)}>
							<span>
								<IconPhChatCircleDotsDuotone className="size-8" />
							</span>
						</RoundButton>
					</motion.div>
					<motion.div variants={playerVariants}>
						<RoundButton ring className="size-18" selected={ready && selected === 2} onClick={() => select(2)}>
							<span>
								<IconPhPlayDuotone className="size-8" />
							</span>
						</RoundButton>
					</motion.div>
					<motion.div variants={settingsVariants}>
						<RoundButton ring className="size-18" selected={ready && selected === 3} onClick={() => select(3)}>
							<span>
								<IconPhGearDuotone className="size-8" />
							</span>
						</RoundButton>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default PrimaryMenu;
