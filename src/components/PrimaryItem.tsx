type Props = {
	className?: string;
	active?: boolean;
};

const MainItem = ({ active, className }: Props) => {
	return (
		<div className={clsx(className, "relative", { "fill-base opacity-50": !active, "fill-accent": active })}>
			{active ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlSpace="preserve"
					fillRule="evenodd"
					strokeLinejoin="round"
					strokeMiterlimit="2"
					clipRule="evenodd"
					viewBox="0 0 256 60">
					<path d="M28.928 44.684 0 30l28.928-14.684V0H256v60H28.928V44.684Z" />
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlSpace="preserve"
					fillRule="evenodd"
					strokeLinejoin="round"
					strokeMiterlimit="2"
					clipRule="evenodd"
					viewBox="0 0 256 60">
					<path d="M28.928 0H256v60H28.928z" />
				</svg>
			)}

			<div className="absolute inset-0 left-8 flex justify-between items-center px-3">
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

export default MainItem;
