import React from 'react';

import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Home: NextPage = () => {
	const theme = useTheme();
	return (
		<>
			<Typography variant="display" color={theme.palette.common.graphic.blue}>
				hihi
			</Typography>
		</>
	);
};

export default Home;
