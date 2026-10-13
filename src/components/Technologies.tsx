import { Suspense, useState } from "react";
import type { ITechnology } from "../type";
import TechContainer from "./TechContainer";
import TechStacks from "./TechStacks";
import { showRemoveToast, showSuccessToast } from "../App";

const technologiesFetch = async (): Promise<ITechnology[]> => {
	const res = await fetch("/technologies.json");
	const data = await res.json();
	return data;
};

const Technologies = () => {
	const [technologiesPromise] = useState(() => technologiesFetch());
	const [stacks, setStacks] = useState<ITechnology[]>([]);

	const handleAdd = (technology: ITechnology) => {
		setStacks([...stacks, technology]);
		showSuccessToast("Added to Stack");
	};

	const handleRemove = (stack: ITechnology) => {
		const filter = stacks.filter((t) => t.id !== stack.id);
		setStacks(filter);
		showRemoveToast("Removed from Stack");
	};

	const handleRemoveAll = () => {
		setStacks([]);
		showRemoveToast("Removed All from Stack");
	};

	return (
		<div
			id="scroll-page"
			className="container w-11/12 py-16 mx-auto"
		>
			<header className="mb-6">
				<h2 className="mb-2 text-2xl font-extrabold md:text-3xl lg:text-4xl">
					Explore the <span className="text-gradient">Technologies</span>
				</h2>
				<p className="text-bc3-gray">
					Pick one technology per category to build your ideal stack.
				</p>
			</header>
			<main className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				<Suspense fallback={<div>Loading...</div>}>
					<TechContainer
						technologiesPromise={technologiesPromise}
						stacks={stacks}
						setStacks={setStacks}
						handleAdd={handleAdd}
					/>
				</Suspense>
				<TechStacks
					stacks={stacks}
					handleRemove={handleRemove}
					handleRemoveAll={handleRemoveAll}
				/>
			</main>
		</div>
	);
};

export default Technologies;
