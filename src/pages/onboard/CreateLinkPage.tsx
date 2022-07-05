import React, { useState, useEffect } from 'react';
import PrevArrowSection from '@components/Header/PrevArrowSection';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material';
import OnboardNextButton from '@components/Button/OnboardNextButton';

const CreateLinkPage = () => {
	const theme = useTheme();
	const [value, setValue] = useState('');
	const [color, setColor] = useState('gray');
	const [linkColor, setLinkColor] = useState('gray');

	const checkValue = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		setValue(e.target.value);
	};

	useEffect(() => {
		if (value.length > 5) {
			setColor('black');
		} else {
			setColor('gray');
		}
	}, [value]);

	useEffect(() => {
		if (value.length > 0) {
			setLinkColor(theme.palette.common.brand.onprimary.container);
		} else {
			setLinkColor('gray');
		}
	}, [value]);

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
			<Box
				sx={{
					borderBottom: `2px solid ${theme.palette.common.brand.onprimary.container}`,
					margin: '30px 16px 0px 16px',
					height: '38px',
				}}
			>
				<Typography
					variant="headline1"
					color={theme.palette.common.graphic.black}
					sx={{ opacity: '0.3', padding: '4px 0px 5px 0px' }}
				>
					keewe.shop/
				</Typography>
				<TextField
					onChange={checkValue}
					InputProps={{
						disableUnderline: true,
						style: {
							color: theme.palette.common.graphic.black,
							fontWeight: '800',
							fontSize: '21px',
							minWidth: '200px',
							padding: '0px 0px 0px 0px',
							margin: '0px 0px 0px 0px',
							position: 'absolute',
							top: '-5px',
							left: '2px',
						},
					}}
					variant="standard"
					placeholder="yourlink"
				></TextField>
			</Box>
			<Box
				sx={{
					position: 'absolute',
					bottom: '16px',
					right: '16px',
				}}
			>
				<OnboardNextButton color={color} />
			</Box>
		</>
	);
};

export default CreateLinkPage;
