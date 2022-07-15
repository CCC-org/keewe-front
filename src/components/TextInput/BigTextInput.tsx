import React from 'react';
import { Box, BoxProps, Stack, TextField } from '@mui/material';
import SVGButton from '@components/Button/SVGButton';
import rounded_clear_18px from '@icons/rounded_clear_18px';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
	marginTop: '4px',// 1 하면 딱 좋더라
	transition: `opacity 0.5s ease`,
}));

interface BigTextInputProps {
	placeHolder: string;
	onChange: (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => void;
	input: string;
	onClear: () => void;
}

const BigTextInput = (props: BigTextInputProps) => {
	const { placeHolder, onChange, input, onClear } = props;
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
				value={input}
			/>
			<StyledBox sx={{ opacity: input.length > 0 ? 0.2 : 0 }}>
				<SVGButton
					source={rounded_clear_18px}
					disabled={input.length <= 0}
					onClick={onClear}
					viewBox="0 0 18 19"
				/>
			</StyledBox>
		</Stack>
	);
};

export default BigTextInput;
