import { useEffect, useState } from "react";
import axios from "axios";

import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Button from "../components/button";
import Modal from "../components/modal";

// Define max bid.
const MAX_BID = 800;

export default function Home() {
	const liveTime = 1621519200000; // 1st JUNE IN EPOCH
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [tokenPriceInBNB, setTokenPriceInBNB] = useState("...");
	const [progress, setProgress] = useState(0);
	const [bid, setBid] = useState(0);
	const [openWallets, setOpenWallets] = useState(false);

	useEffect(() => {
		let myInterval = setInterval(() => {
			const currentTime = Date.now();

			const countDownTimeInMillis = liveTime - currentTime;
			const days = Math.floor(countDownTimeInMillis / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(countDownTimeInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor(
				(countDownTimeInMillis % (1000 * 60 * 60)) / (1000 * 60)
			);
			const seconds = Math.floor((countDownTimeInMillis % (1000 * 60)) / 1000);
			setHours(hours);
			setMinutes(minutes);
			setSeconds(seconds);
			setDays(days);
		}, 1000);
		return () => {
			clearInterval(myInterval);
		};
	}, []);

	const fetchPrice = async () => {
		try {
			const priceListDataResult = await axios.get(
				"https://api.pancakeswap.com/api/v1/price"
			);

			const wbnbPrice = priceListDataResult.data.prices["WBNB"];
			setTokenPriceInBNB((wbnbPrice / 50).toFixed(2));
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchPrice();
		let myInterval = setInterval(fetchPrice, 10000);

		return () => {
			clearInterval(myInterval);
		};
	}, []);

	const onBid = (e) => {
		const value = parseInt(e.target.value);

		if (!value) {
			setBid(0);
			setProgress(0);
			return false;
		}

		const percentage = value / MAX_BID / 0.01;
		setBid(value);
		setProgress(percentage);
	};

	return (
		<>
			<Navbar openWallets={() => setOpenWallets(true)} />
			{ openWallets && <Modal closeWallets={() => setOpenWallets(false)}/> }
			<Hero />
			<div className="container rows">
				<div className="row text-block">
					<div className="text-block__title">participant: public</div>
					<div className="text-block__meta">
						fixed swap ratio : <span className="n">1</span> BNB ={" "}
						<span className="n">{tokenPriceInBNB}</span> GOD
					</div>
					<div className="text-block__grid">
						<div className="left-grid">
							price:
							<div className="n">{tokenPriceInBNB}$</div>
						</div>
						<div className="right-grid">
							maximum / wallet:
							<div>
								<span className="n">20</span> BNB
							</div>
						</div>
					</div>
					<div className="text-block__footer text-block__footer--centered">
						auction progress: <span className="n">{bid} / {MAX_BID}</span> BNB
						<div
							className="progress-bar"
							style={{ width: `${progress}%` }}
						></div>
					</div>
					<div className="separator"></div>
				</div>
				<div className="row text-block">
					<div className="text-block__title">join the presale</div>
					<div className="text-block__meta">
						<span className="n">{days}</span> days{" "}
						<span className="n">{hours}</span> hours{" "}
						<span className="n">{minutes}</span> minutes{" "}
						<span className="n">{seconds}</span> seconds
					</div>
					<div className="text-block__grid">
						<div className="left-grid">your bid amount</div>
						<div className="right-grid">
							balance:{" "}
							<span className="n" style={{ lineHeight: 0 }}>
								0
							</span>{" "}
							BNB
						</div>
					</div>
					<div className="text-block__footer">
						<input
							onChange={onBid}
							className="text-block__input"
							onFocus={(e) => (e.target.placeholder = "")}
							onBlur={e => e.target.placeholder = "bid amount" }
							type="number"
							max="200"
							placeholder="bid amount"
						/>
					</div>
					<Button>deposit now</Button>
					<div className="separator"></div>
				</div>
			</div>
			<Footer />
		</>
	);
}
