import Image from "next/image";
import Button from "./button";

const Navbar = ({openWallets}) => {
	return (
		<nav className="navigation container">
			<div className="logo">
				<Image src="/images/logo.svg" alt="GOD logo" width={200} height={200} />
			</div>
			<div className="navigation__links">
				<Button onClick={openWallets}>unlock wallet</Button>
			</div>
		</nav>
	);
};

export default Navbar;
