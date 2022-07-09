import React from 'react';
import { SvgIcon } from '@mui/material';
import Button from '@mui/material/Button';
import arrow_forward from 'constant/Icons/arrow_forward';
import { NextPage } from 'next';
import { useTheme } from '@mui/material';

interface OnboardNextButtonProps {
	active: boolean;
	onClick: () => void;
}

const OnboardNextButton: NextPage<OnboardNextButtonProps> = (
	props: OnboardNextButtonProps,
) => {
	const { active, onClick } = props;
	const theme = useTheme();

	return (
		<Button
			disabled={active}
			variant="contained"
			onClick={onClick}
			sx={{
				width: '64px',
				height: '64px',
				borderRadius: '20px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: theme.palette.common.graphic.black,
			}}
		>
			<SvgIcon>
				<path d={arrow_forward} />
			</SvgIcon>
		</Button>
	);
};

export default OnboardNextButton;
