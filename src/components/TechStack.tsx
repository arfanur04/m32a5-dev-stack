import type { ITechnology } from "../type";

interface ITechStackProps {
	stack: ITechnology;
	handleRemove: (technology: ITechnology) => void;
}

const TechStack = ({ stack, handleRemove }: ITechStackProps) => {
	return (
		<div className="p-2 text-gray-300 border rounded-md flex justify-between items-center">
			<section className="flex gap-2 items-center">
				<figure>
					<img
						src={stack.icon}
						alt={stack.name}
						className="w-8"
					/>
				</figure>
				<header>
					<h4 className="text-xl font-bold text-black">{stack.name}</h4>
					<p>{stack.category}</p>
				</header>
			</section>
			<section>
				<button
					onClick={() => handleRemove(stack)}
					className="text-2xl font-bold hover:text-red-500 cursor-pointer"
				>
					X
				</button>
			</section>
		</div>
	);
};

export default TechStack;
