import React from 'react';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';

interface SVGButtonProps {
	source: string;
}

const SVGButton = ({ source }: SVGButtonProps) => {
	return (
		<Button
			sx={{
				minWidth: '20px',
				minHeight: '20px',
				borderRadius: '30px',
				margin: '0px',
				color: 'black',
				padding: '0px',
			}}
		>
			<SvgIcon>
				<path d={source} />
			</SvgIcon>
		</Button>
	);
};

export default SVGButton;
