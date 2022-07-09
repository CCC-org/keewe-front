import React from 'react';

import { SvgIcon, useTheme } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import arrow_forward from '@icons/arrow_forward';

import { NextPage } from 'next';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
	width: '64px',
	height: '64px',
	borderRadius: '20px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: `${theme.palette.common.graphic.white} 0.5s ease`,
	transition: `opacity 0.5s ease`,
	'&.Mui-disabled, &:active': {
		color: `${theme.palette.common.graphic.white}`,
		backgroundColor: `${theme.palette.common.brand.onprimary.main}`,
		opacity: 0.2,
	},
	'&:focus': {
		color: `${theme.palette.common.graphic.white}`,
		backgroundColor: `${theme.palette.common.brand.onprimary.main}`,
	},
}));

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
		<StyledButton
			disabled={active}
			variant="contained"
			onClick={onClick}
			sx={{ backgroundColor: theme.palette.common.brand.onprimary.main }}
		>
			<SvgIcon>
				<path d={arrow_forward} />
			</SvgIcon>
		</StyledButton>
	);
};

export default OnboardNextButton;
