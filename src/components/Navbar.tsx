import logo from "../assets/logo-text.png";
import "./Navbar.css";

const Navbar = () => {
	const navLinks = (
		<>
			<li className="font-bold text-gray-500">
				<a>
					<span className="text-gradient gradient">Home</span>
				</a>
			</li>
			<li className="font-bold text-gray-500">
				<a>
					<span>Technologies</span>
				</a>
			</li>
			<li className="font-bold text-gray-500">
				<a>
					<span>Projects</span>
				</a>
			</li>
			<li className="font-bold text-gray-500">
				<a>
					<span>About</span>
				</a>
			</li>
			<li className="font-bold text-gray-500">
				<a>
					<span>Contact</span>
				</a>
			</li>
		</>
	);

	const imgTagLogo = (
		<img
			className="w-full"
			src={logo}
			alt=""
		/>
	);

	return (
		<div className="bg-base-200 sticky top-0 z-50">
			<div className="container mx-auto navbar">
				<div className="navbar-start flex-1 md:flex-auto min-w-[18%] md:min-w-auto">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								aria-label="Menu"
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{" "}
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>{" "}
							</svg>
						</div>
						<ul
							tabIndex={-1}
							className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
						>
							{navLinks}
						</ul>
					</div>
					<a className="hidden text-xl lg:flex btn btn-ghost">{imgTagLogo}</a>
				</div>
				<div className="hidden navbar-center lg:flex">
					<ul className="px-1 menu menu-horizontal">{navLinks}</ul>
				</div>
				<div className="navbar-center lg:hidden">
					<a className="text-xl btn btn-ghost">{imgTagLogo}</a>
				</div>
				<div className="navbar-end">
					<a className="btn btn-signUp rounded-full">Sign In</a>
					<a className="btn btn-signUp rounded-full text-white bg-bc1 hover:bg-bc2 active:bg-bc1">
						Sign Up
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
