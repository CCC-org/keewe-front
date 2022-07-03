import React from 'react';
import type { AppProps } from 'next/app';
import AppPropsProvider from '@store/AppPropsProvider';
import { ThemeProvider } from '@mui/system';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppPropsProvider>
			{(theme) => (
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			)}
		</AppPropsProvider>
	);
}

export default MyApp;
