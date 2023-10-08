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

const SecondaryItems = ({ children, className, active }: Props) => {
	return (
		<AnimatePresence>
			{active ? (
				<motion.div
					variants={variants}
					initial="initial"
					animate="animate"
					exit={active ? "exit" : ""}
					className={clsx(className, "absolute flex items-center inset-0 -z-1")}>
					<div className="absolute top-50% -translate-y-50% left-[calc(100%+1rem)] flex gap-4px items-stretch h-fit">
						<div className="flex-1 flex items-center">
							<div className="w-7 fill-base">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlSpace="preserve"
									fillRule="evenodd"
									strokeLinejoin="round"
									strokeMiterlimit="2"
									clipRule="evenodd"
									viewBox="0 0 64 64">
									<path
										fillRule="nonzero"
										d="m63.997 64-64-32 64-32v64ZM46.473 24c-4.419 0-8 3.581-8 8 0 4.42 3.581 8 8 8 4.42 0 8-3.58 8-8 0-4.419-3.58-8-8-8Z"
									/>
								</svg>
							</div>
							<div className="h-80% w-2px two-step-base-33%-66%"></div>
						</div>
						<div className="flex flex-col gap-3px">{children}</div>
					</div>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
};

export default SecondaryItems;
