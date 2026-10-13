import bannerStack from "../../assets/banner-stack.png";

const Banner = () => {
	return (
		<div className="container flex flex-col items-center justify-between w-11/12 py-16 mx-auto text-center lg:flex-row lg:px-0 lg:text-left">
			<div className="space-y-6">
				{/* context */}
				<h1 className="text-3xl font-extrabold xl:text-6xl lg:text-5xl md:text-4xl">
					Build Your Ideal <br />
					<span className="text-gradient">Development Stack</span>
				</h1>
				<p className="max-w-xl">
					Explore frontend, backend, database, and tooling options, compare them
					side by side, and put together the stack that fits your next project.
				</p>
				<div className="grid grid-flow-col gap-2 auto-cols-fr w-fit">
					<button className="px-8 py-3 font-bold text-white rounded-lg btn-gradient btn">
						Explore Technologies
					</button>
					<button className="px-8 py-3 font-bold rounded-lg btn text-bc3-gray">
						Learn More
					</button>
				</div>
			</div>
			<div>
				{/* image */}
				<figure>
					<img
						src={bannerStack}
						alt="banner-stack"
					/>
				</figure>
			</div>
		</div>
	);
};

export default Banner;
