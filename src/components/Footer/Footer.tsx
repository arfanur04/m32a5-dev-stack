import logo from "../../assets/logo-text.png";

const Footer = () => {
	const linkGroups = [
		{ title: "Product", links: ["Home", "Technologies", "Projects"] },
		{ title: "Company", links: ["About", "Contact", "Careers"] },
		{ title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
	];

	const socials = [
		{ name: "GitHub", href: "https://github.com" },
		{ name: "Twitter", href: "https://twitter.com" },
		{ name: "LinkedIn", href: "https://linkedin.com" },
	];

	return (
		<div className="container mx-auto w-11/12">
			<footer className="border-t border-base-200 bg-base-100">
				<div className="mx-auto pt-16 pb-8">
					<div className="grid grid-cols-5 gap-6">
						{/* Brand */}
						<div className="col-span-5 gap-6 lg:col-span-2">
							<a
								href="#"
								className="flex items-center gap-3 justify-center lg:justify-start"
							>
								<img
									src={logo}
									alt=""
								/>
							</a>
							<p className="mt-4 mx-auto max-w-[70%] text-center lg:text-left lg:mx-0 leading-relaxed text-slate-500">
								Curated tools, technologies, and resources for developers
								building modern software.
							</p>
							<div className="mt-6 flex gap-5 justify-center lg:justify-start">
								{socials.map(({ name, href }) => (
									<a
										key={name}
										href={href}
										target="_blank"
										rel="noreferrer"
										className="font-medium text-slate-600 transition hover:text-pink-600"
									>
										{name}
									</a>
								))}
							</div>
						</div>

						{/* Link groups */}
						<div className="col-span-5 gap-12 sm:gap-6 mt-6 lg:mt-0 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center md:text-left *:last:col-span-full *:last:justify-self-center *:md:last:col-span-1 *:last:w-full">
							{linkGroups.map(({ title, links }) => (
								<div key={title}>
									<h4 className="text-sm font-bold tracking-wider text-slate-900 uppercase">
										{title}
									</h4>
									<ul className="mt-5 space-y-3">
										{links.map((link) => (
											<li key={link}>
												<a
													href="#"
													className="text-slate-500 transition hover:text-pink-600"
												>
													{link}
												</a>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					{/* Bottom bar */}
					<div className="flex flex-col items-center justify-between gap-4 border-t border-base-200 pt-8 text-sm text-slate-400 sm:flex-row">
						<p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
						<div className="flex gap-6">
							<a
								href="#"
								className="transition hover:text-pink-600"
							>
								Privacy
							</a>
							<a
								href="#"
								className="transition hover:text-pink-600"
							>
								Terms
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
