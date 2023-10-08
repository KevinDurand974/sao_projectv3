import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
	className?: string;
	ring?: boolean;
	selected?: boolean;
}> &
	ButtonHTMLAttributes<HTMLButtonElement>;

const RoundButton = ({ children, className, ring = false, onClick, selected }: Props) => {
	return (
		<button
			onClick={onClick}
			type="button"
			className={clsx(
				className,
				"min-w-4 min-h-4 rounded-full fill-base stroke-transparent text-textbase drop-shadow-simple drop-shadow-color-transparent transition-all duration-300 hover:(fill-accent text-textaccent drop-shadow-color-accent)",
				{ "!fill-accent !text-textaccent !drop-shadow-color-accent": selected }
			)}>
			{!ring ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlSpace="preserve"
					fillRule="evenodd"
					strokeLinejoin="round"
					strokeMiterlimit="2"
					clipRule="evenodd"
					viewBox="0 0 64 64"
					className="absolute w-full h-full top-0 left-0">
					<circle cx="32" cy="32" r="32" />
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlSpace="preserve"
					fillRule="evenodd"
					strokeLinejoin="round"
					strokeMiterlimit="2"
					clipRule="evenodd"
					viewBox="0 0 64 64"
					className="absolute w-full h-full top-0 left-0">
					<path d="M64 32c0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32ZM32 1.333C15.063 1.333 1.333 15.063 1.333 32S15.063 62.667 32 62.667 62.667 48.937 62.667 32 48.937 1.333 32 1.333Zm0 4c14.718 0 26.667 11.95 26.667 26.667 0 14.718-11.95 26.667-26.667 26.667-14.718 0-26.667-11.95-26.667-26.667C5.333 17.282 17.283 5.333 32 5.333Z" />
				</svg>
			)}
			<div className="absolute inset-0 z-1 flex items-center justify-center">{children}</div>
		</button>
	);
};

export default RoundButton;
