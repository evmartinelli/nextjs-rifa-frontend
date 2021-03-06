import cn from "classnames";
interface Props {
	className?: string;
	title: string;
	attributes: {
		id: number;
		value: string;
		meta: string;
		status: string;
	}[];
	active: string;
	onClick: any;
}

export const ProductAttributes: React.FC<Props> = ({
	className = "mb-4",
	title,
	attributes,
	active,
	onClick,
}) => {
	return (
		<div className={className}>
			<h3 className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
				{title}
			</h3>
			<ul className="colors flex flex-wrap -me-3">
				{attributes?.map(({ id, value, status, meta }) => (
					<li
						key={`${value}-${id}`}
						className={cn(
							"cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out",
							{
								"border-black": value === active,
								"bg-green-200 strikethrough-diagonal": status === "paid",
								"bg-yellow-200": status === "pending",
							}
						)}
						onClick={() => onClick({ 
							[title]: value,
							status
						 })}
					>					
						{title === "color" ? (
							<span
								className="h-full w-full rounded block"
								style={{ backgroundColor: meta }}
							/>
						) : (
							value
						)}
					</li>
				))}
			</ul>
		</div>
	);
};