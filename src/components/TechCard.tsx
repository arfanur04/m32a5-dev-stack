import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../type";
import { FaCheck } from "react-icons/fa";

interface ITechCardProps {
	technology: ITechnology;
	stacks: ITechnology[];
	setStacks: Dispatch<SetStateAction<ITechnology[]>>;
	handleAdd: (technology: ITechnology) => void;
}

const TechCard = ({ technology, stacks, handleAdd }: ITechCardProps) => {
	const { id, name, category, description, icon, rating, difficulty, badge } =
		technology;

	const isAdded = stacks.some((stack) => stack.id === id);

	return (
		<div
			className={`card bg-base-100 rounded-xl border shadow-sm transition hover:-translate-y-1 hover:shadow-md ${isAdded ? "border-bc4-purple" : "border-base-200"}`}
		>
			<div className="card-body gap-0 p-6">
				{/* Icon + badge */}
				<div className="flex items-start justify-between">
					<img
						src={icon}
						alt={`${name} logo`}
						className="h-14 w-14 object-contain"
						loading="lazy"
					/>
					<span className="badge badge-lg border-sky-200 bg-sky-50 font-medium text-sky-500">
						{badge}
					</span>
				</div>

				{/* Title + description */}
				<h3 className="mt-5 text-2xl font-bold text-base-content">{name}</h3>
				<p className="mt-2 mb-5 flex-1 leading-relaxed text-base-content/60">
					{description}
				</p>

				{/* Meta row */}
				<div className="flex items-center justify-between gap-2 border-t border-base-200 pt-4 flex-wrap">
					<span className="badge badge-lg rounded-lg border-0 bg-slate-100 text-base-content/80">
						{category}
					</span>
					<span className="text-sm text-base-content/60">{difficulty}</span>
					<span className="flex items-center gap-1 font-semibold">
						<span className="text-amber-400">★</span>
						{rating.toFixed(1)}
					</span>
				</div>

				{/* Action */}
				<button
					onClick={() => handleAdd(technology)}
					disabled={isAdded}
					className="btn-bb1"
				>
					{isAdded ? (
						<>
							<FaCheck />
							Added to Stack
						</>
					) : (
						"Add to Stack"
					)}
				</button>
			</div>
		</div>
	);
};

export default TechCard;
