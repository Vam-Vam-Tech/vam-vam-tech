import React from "react";
import Head from "next/head";

const SEO = () => {
	return (
		<Head>
			<title>VamVamTech - Home</title>
			<meta name="title" content="VamVamTech - Home" />
			<meta
				name="description"
				content="All-in-one tech solution with modern tech stacks by developers from Myanmar."
			/>

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://vamvamtech.com/" />
			<meta property="og:title" content="VamVamTech - Home" />
			<meta
				property="og:description"
				content="All-in-one tech solution with modern tech stacks by developers from Myanmar."
			/>
			<meta property="og:image" content="https://vamvamtech.com/seo.png" />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://vamvamtech.com/" />
			<meta property="twitter:title" content="VamVamTech - Home" />
			<meta
				property="twitter:description"
				content="All-in-one tech solution with modern tech stacks by developers from Myanmar."
			/>
			<meta property="twitter:image" content="https://vamvamtech.com/seo.png" />
		</Head>
	);
};

export default SEO;
