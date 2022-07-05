import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import IconButton from '@mui/material/Button';
import { useTheme } from '@mui/material';
import SVGButton from '@components/Button/SVGButton';
import Box from '@mui/material/Box';
import IconPath from 'constant/IconPath';

const PrevArrowSection = () => {
	const theme = useTheme();
	return (
		<Box margin="10px 16px 10px 16px">
			<SVGButton source={IconPath.arrow_back}></SVGButton>
		</Box>
	);
};

export default PrevArrowSection;
