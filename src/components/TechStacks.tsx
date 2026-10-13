import type { ITechnology } from "../type";
import TechStack from "./TechStack";

interface ITechStackProps {
	stacks: ITechnology[];
	handleRemove: (technology: ITechnology) => void;
	handleRemoveAll: () => void;
}

const TechStacks = ({
	stacks,
	handleRemove,
	handleRemoveAll,
}: ITechStackProps) => {
	return (
		<div className="border p-4 rounded-xl border-gray-300">
			<header className="mb-6">
				<h2 className="text-3xl font-bold mb-2">Your Stack</h2>
				<p className="text-bc3-gray">
					{stacks.length > 0
						? `${stacks.length} technologies Selected`
						: "No technologies selected yet"}
				</p>
			</header>
			<main>
				{stacks.length > 0 ? (
					<>
						<div className="flex flex-col gap-2">
							{stacks.map((stack) => (
								<TechStack
									key={stack.id}
									stack={stack}
									handleRemove={handleRemove}
								/>
							))}
						</div>
						<div>
							<button
								onClick={handleRemoveAll}
								className="btn-outline text-red-500 btn w-full mt-6 border-gray-300"
							>
								Remove All
							</button>
						</div>
					</>
				) : (
					<p className="py-6 text-center text-gray-300 border rounded-md">
						Your Stack is empty
					</p>
				)}
			</main>
		</div>
	);
};

export default TechStacks;
