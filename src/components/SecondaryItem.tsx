type Props = {
	className?: string;
	active?: boolean;
};

const SecondaryItem = ({ className, active }: Props) => {
	return (
		<div className={clsx(className, "w-60 relative", { "fill-base": !active, "fill-accent": active })}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlSpace="preserve"
				fillRule="evenodd"
				strokeLinejoin="round"
				strokeMiterlimit="2"
				clipRule="evenodd"
				viewBox="0 0 228 60">
				<path d="M0 0h227.072v60H0z" />
			</svg>

			<div className="absolute inset-0 flex justify-between items-center px-3">
				<div
					className={clsx("size-10 text-5 flex items-center justify-center rounded-full", {
						"bg-btnbg text-base": !active,
						"bg-base text-accent": active,
					})}>
					<IconPhArrowSquareUpRight />
				</div>
				<div className={clsx("text-5 mr-auto ml-3", { "text-btnbg": !active, "text-base": active })}>TEXT</div>
			</div>
		</div>
	);
};

export default SecondaryItem;
