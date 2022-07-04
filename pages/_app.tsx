import React from 'react';

import type { AppProps } from 'next/app';
import AppPropsProvider from '@store/AppPropsProvider';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@theme/light';
import createEmotionCache from 'temp/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
			<p>Hello to me21</p>
		</CacheProvider>
	);
}

export default MyApp;
