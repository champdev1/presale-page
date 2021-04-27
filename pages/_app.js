import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Game of Defi</title>
				<meta name="description" content="Game of Defi" />
				<meta
					property="og:url"
					content="https://www.gameofdefi.finance"
				/>
				<meta property="og:type" content="article" />
				<meta
					property="og:title"
					content="Game of Defi"
				/>
				<meta
					property="og:description"
					content="How much does culture influence creative thinking?"
				/>
				<meta
					property="og:image"
					content="https://www.gameofdefi.finance/images/logo.png"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
