import React from 'react';
import { SvgIcon } from '@mui/material';
import Button from '@mui/material/Button';
import IconPath from 'constant/IconPath';
import { Box } from '@mui/system';
import { NextPage } from 'next';

interface OnboardNextButtonProps {
	color: string;
}

// TODO: 버튼 disable 기능등을 추가,

const OnboardNextButton: NextPage<OnboardNextButtonProps> = (
	props: OnboardNextButtonProps,
) => {
	const { color } = props;
	const handleClick = () => {
		alert('준비중입니다.');
	};

	return (
		<Button disabled onClick={handleClick} color="primary">
			<Box
				sx={{
					width: '64px',
					height: '64px',
					borderRadius: '20px',
					backgroundColor: 'black',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					color: 'white',
				}}
			>
				<SvgIcon>
					<path d={IconPath.arrow_forward} />
				</SvgIcon>
			</Box>
		</Button>
	);
};

export default OnboardNextButton;
