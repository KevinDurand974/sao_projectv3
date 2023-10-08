import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
	className?: string;
	active?: boolean;
}>;

const variants = {
	initial: { x: -50, opacity: 0 },
	animate: { x: 0, opacity: 1, transition: { ease: "easeInOut" } },
	exit: { x: -10, opacity: 0, transition: { ease: "easeOut" } },
};

const PrimaryItems = forwardRef<HTMLDivElement, Props>(({ children, className, active }, ref) => {
	return (
		<AnimatePresence>
			{active ? (
				<motion.div
					ref={ref}
					variants={variants}
					initial="initial"
					animate="animate"
					exit={active ? "exit" : ""}
					className={clsx(className, "absolute flex items-center inset-0 -z-1")}>
					<div className="absolute top-50% -translate-y-50% left-[calc(100%+1rem)] flex flex-col gap-3px">
						<div className="flex flex-col gap-3px">{children}</div>
					</div>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
});

export const MotionPrimaryItems = motion(PrimaryItems, { forwardMotionProps: true });
export default PrimaryItems;
