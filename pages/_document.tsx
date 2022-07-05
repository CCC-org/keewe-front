import React from 'react';

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head />
			<link rel="manifest" href="/manifest.json" />
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="images/favicons/favicon-16x16.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="images/favicons/favicon-32x32.png"
			/>
			<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/all.min.css"/>
			<link rel="apple-touch-icon" href="images/icons/icon-192x192.png"/>
			<meta name="msapplication-TileColor" content="#FF98BA"/>
			<meta name="theme-color" content="#319197"/>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
