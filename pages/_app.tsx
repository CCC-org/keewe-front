import React from 'react';

import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@theme/light';
import createEmotionCache from 'emotion_cache/createEmotionCache';
// Redux
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import Head from 'next/head';

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	if (pageProps.error) {
		return (
			<div>
				<p>Error has occured</p>
			</div>
		);
	}
	return (
		<>
			<Provider store={store}>
				<CacheProvider value={emotionCache}>
					<ThemeProvider theme={theme}>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />
						<Component {...pageProps} />
					</ThemeProvider>
				</CacheProvider>
			</Provider>
		</>
	);
}

export default MyApp;
