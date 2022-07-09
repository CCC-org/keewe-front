import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import IconButton from '@mui/material/Button';
import { useTheme } from '@mui/material';
import SVGButton from '@components/Button/SVGButton';
import Box from '@mui/material/Box';
import arrow_back from '@icons/arrow_back';

const PrevArrowSection = () => {
	const theme = useTheme();
	return (
		<Box margin="10px 16px 10px 16px">
			<SVGButton source={arrow_back}></SVGButton>
		</Box>
	);
};

export default PrevArrowSection;
