import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
	interface CommonColors {
		brand: {
			primary: {
				main: string;
				container: string;
			};
			onprimary: {
				main: string;
				container: string;
			};
			surface: {
				main: string;
				container: string;
			};
		};
		graphic: {
			blue: string;
			sky: string;
			purple: string;
			violet: string;
			pink: string;
			red: string;
			coral: string;
			yellow: string;
			orange: string;
			green: string;
			marine: string;
		};
		system: {
			success: string;
			error: string;
		};
	}
	interface TypographyVariants {
		display: React.CSSProperties;
		headline1: React.CSSProperties;
		headline2: React.CSSProperties;
		footnote: React.CSSProperties;
		caption1: React.CSSProperties;
		body1: {
			regular: React.CSSProperties;
			bold: React.CSSProperties;
		};
		body2: {
			regular: React.CSSProperties;
			bold: React.CSSProperties;
		};
	}
	interface TypographyVariantsOptions {
		display: React.CSSProperties;
		headline1: React.CSSProperties;
		headline2: React.CSSProperties;
		footnote: React.CSSProperties;
		caption1: React.CSSProperties;
		body1: {
			regular: React.CSSProperties;
			bold: React.CSSProperties;
		};
		body2: {
			regular: React.CSSProperties;
			bold: React.CSSProperties;
		};
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		display: true;
		headline1: true;
		headline2: true;
		footnote: true;
		caption1: true;
		body1: {
			regular: true;
			bold: true;
		};
		body2: {
			regular: true;
			bold: true;
		};
	}
}

const BRAND = {
	primary: {
		main: '#B2E817',
		container: '##E0F6A2',
	},
	onprimary: {
		main: '#121314',
		container: '#486006',
	},
	surface: {
		main: '#F8F8F4',
		container: '#E2D9CF',
	},
};

const GRAPHIC = {
	black: '#121314',
	blue: '#2E6DE8',
	sky: '#19A9FA',
	purple: '#9350E9',
	violet: '#7545FF',
	pink: '#FF55BA',
	red: '#F24822',
	coral: '#FF7163',
	yellow: '#FFD600',
	orange: '#FF9417',
	green: '#09CE84',
	marine: '#0FA7B0',
};

const SYSTEM = {
	success: '#2E6DE8',
	error: '#F24822',
};

const TYPOGRAPHY = {
	fontFamily: 'Apple SD Gothic Neo',
	color: '#121314',
	display: {
		fontWeight: 700,
		fontSize: '30px',
		lineHeight: '36px',
	},
	headline1: {
		fontWeight: 700,
		fontSize: '22px',
		lineHeight: '28px',
	},
	headline2: {
		fontWeight: 700,
		fontSize: '18px',
		lineHeight: '20px',
	},
	footnote: {
		fontWeight: 400,
		fontSize: '14px',
		lineHeight: '16px',
	},
	caption1: {
		fontWeight: 400,
		fontSize: '14px',
		lineHeight: '16px',
	},
	body1: {
		regular: {
			fontWeight: 400,
			fontSize: '16px',
			lineHeight: '24px',
		},
		bold: {
			fontWeight: 700,
			fontSize: '16px',
			lineHeight: '24px',
		},
	},
	body2: {
		regular: {
			fontWeight: 400,
			fontSize: '14px',
			lineHeight: '20px',
		},
		bold: {
			fontWeight: 700,
			fontSize: '14px',
			lineHeight: '20px',
		},
	},
};

const theme = createTheme({
	typography: TYPOGRAPHY,
	palette: {
		common: {
			brand: BRAND,
			graphic: GRAPHIC,
			system: SYSTEM,
		},
	},
});

export default theme;
