import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';

interface SVGButtonProps {
	source: string;
	disabled?: boolean;
	viewBox?: string;
	onClick: () => void;
}

const SVGButton = ({ source, disabled, viewBox, onClick }: SVGButtonProps) => {
	return (
		<Button
			onClick={onClick}
			disabled={disabled}
			sx={{
				minWidth: '20px',
				minHeight: '20px',
				borderRadius: '30px',
				margin: '0px',
				color: 'black',
				padding: '0px',
			}}
		>
			<SvgIcon viewBox={viewBox}>
				<path d={source} />
			</SvgIcon>
		</Button>
	);
};

export default SVGButton;
