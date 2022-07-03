import * as React from 'react';
import { useState, createContext } from 'react';

import { PaletteMode } from '@mui/material';

import { Theme } from '@mui/material/styles';

import lightTheme from '@theme/light';
import darkTheme from '@theme/dark';

interface AppLayoutProviderProps {
	children: (theme: Theme) => JSX.Element;
}

export const AppLayoutContext = createContext<{
	theme: PaletteMode;
	setTheme(mode: PaletteMode): void;
}>({ theme: 'light', setTheme: () => undefined });

const AppLayoutProvider = ({ children }: AppLayoutProviderProps) => {
	const [theme, setTheme] = useState<PaletteMode>('light');

	return (
		<AppLayoutContext.Provider value={{ theme, setTheme }}>
			{children(theme === 'light' ? lightTheme : darkTheme)}
		</AppLayoutContext.Provider>
	);
};

export default AppLayoutProvider;
