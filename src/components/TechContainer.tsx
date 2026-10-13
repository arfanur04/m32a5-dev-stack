import { use, useEffect, type Dispatch, type SetStateAction } from "react";
import type { ITechnology } from "../type";
import TechCard from "./TechCard";

interface ITechContainerProps {
	technologiesPromise: Promise<ITechnology[]>;
	stacks: ITechnology[];
	setStacks: Dispatch<SetStateAction<ITechnology[]>>;
	handleAdd: (technology: ITechnology) => void;
}

const TechContainer = ({
	technologiesPromise,
	stacks,
	setStacks,
	handleAdd,
}: ITechContainerProps) => {
	const technologies = use(technologiesPromise);

	useEffect(() => {
		const element = document.getElementById("scroll-page");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}, [technologies]);

	return (
		<div className="grid grid-cols-1 col-span-1 gap-6 md:col-span-2 lg:col-span-3 md:grid-cols-2 lg:grid-cols-3">
			{technologies.map((technology) => (
				<TechCard
					key={technology.id}
					technology={technology}
					stacks={stacks}
					setStacks={setStacks}
					handleAdd={handleAdd}
				/>
			))}
		</div>
	);
};

export default TechContainer;
