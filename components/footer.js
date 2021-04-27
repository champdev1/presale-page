import Image from "next/image";

const Footer = () => {
	return (
		<div className="footer container">
			<div className="socials">
				<div className="socials__item">
					<a href="https://twitter.com/GameOfDeFi" target="_blank">
						<Image
							src="/images/twitter_icon.svg"
							alt="twitter"
              width={40}
              height={40}
						/>
					</a>
				</div>
				<div className="socials__item">
					<a href="https://discord.gg/uyzZ3Pc9" target="_blank">
						<Image
							src="/images/discord.svg"
							alt="discord"
              width={40}
              height={40}
						/>
					</a>
				</div>
				<div className="socials__item">
					<a href="https://t.me/GOD_Finance" target="_blank">
						<Image
							src="/images/telegram_icon.svg"
							alt="telegram"
              width={40}
              height={40}
						/>
					</a>
				</div>
				<div className="socials__item">
					<a href="#">
						<Image
							src="/images/marketplace_icon.svg"
							alt="marketplace"
              width={40}
              height={40}
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
