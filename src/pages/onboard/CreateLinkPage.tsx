import React, { useState, useEffect } from 'react';
import PrevArrowSection from '@components/Header/PrevArrowSection';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material';
import OnboardNextButton from '@components/Button/OnboardNextButton';
import BigTextInput from '@components/TextInput/BigTextInput';

const CreateLinkPage = () => {
	const theme = useTheme();
	const [link, setLink] = useState<string>('');
	const [color, setColor] = useState('gray');
	const [active, setActive] = useState<boolean>(true);
	const [linkColor, setLinkColor] = useState('gray');

	const handleChange = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		setLink(e.target.value);
	};

	useEffect(() => {
		if (link.length > 5) {
			setActive(false);
		} else {
			setActive(true);
		}
	}, [link]);

	useEffect(() => {
		if (link.length > 0) {
			setLinkColor(theme.palette.common.brand.onprimary.container);
		} else {
			setLinkColor('gray');
		}
	}, [link]);

	const handleNextClick = () => {
		// TODO: 다음으로 이동
		alert('다음으로 이동 논리 필요');
		return;
	};

	return (
		<>
			<PrevArrowSection />
			<Box sx={{ margin: '22px 16px 0px 16px' }}>
				<Typography variant="display">링크를 만들어볼까요? </Typography>
			</Box>
			<Box sx={{ margin: '8px 16px 0px 16px' }}>
				<Typography variant="footnote">
					언제든지 링크를 바꿀 수 있어요.
				</Typography>
			</Box>
			<Stack
				flexDirection="row"
				gap="2px"
				sx={{
					borderBottom: `2px solid ${theme.palette.common.brand.onprimary.container}`,
					margin: '30px 16px 0px 16px',
					height: '38px',
				}}
			>
				<Typography
					variant="headline1"
					color={theme.palette.common.graphic.black}
					sx={{ opacity: '0.3' }}
				>
					keewe.shop/
				</Typography>
				<BigTextInput
					placeHolder="yourlink"
					onChange={handleChange}
					input={link}
				/>
			</Stack>
			<Box
				sx={{
					position: 'absolute',
					bottom: '16px',
					right: '16px',
				}}
			>
				<OnboardNextButton onClick={handleNextClick} active={active} />
			</Box>
		</>
	);
};

export default CreateLinkPage;
