import React from 'react';
import SVGButton from '@components/Button/SVGButton';
import Box from '@mui/material/Box';
import arrow_back_24px from '@icons/arrow_back_24px';

const PrevArrowSection = () => {
	return (
		<Box margin="10px 16px 10px 16px">
			<SVGButton source={arrow_back_24px}></SVGButton>
		</Box>
	);
};

export default PrevArrowSection;
