import React from 'react';
import { Box, BoxProps, Stack, TextField } from '@mui/material';
import SVGButton from '@components/Button/SVGButton';
import rounded_clear_24px from '@icons/rounded_clear_24px';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
	transition: `opacity 0.5s ease`,
}));

interface BigTextInputProps {
	placeHolder: string;
	onChange: (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => void;
	input: string;
}

const BigTextInput = (props: BigTextInputProps) => {
	const { placeHolder, onChange, input } = props;
	return (
		<Stack flexDirection="row" justifyContent="space-between" sx={{ flex: 1 }}>
			<TextField
				fullWidth
				onChange={onChange}
				variant="standard"
				placeholder={placeHolder}
				InputProps={{
					disableUnderline: true,
				}}
			>
				{input}
			</TextField>
			<StyledBox sx={{ opacity: input.length > 0 ? 1 : 0 }}>
				<SVGButton source={rounded_clear_24px} />
			</StyledBox>
		</Stack>
	);
};

export default BigTextInput;
