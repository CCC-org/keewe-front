import React from 'react';
import { TextField, useTheme } from '@mui/material';

interface BigTextInputProps {
	placeHolder: string;
	onChange: (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => void;
	input: string;
}

// TODO: See to whether caret width could be set.

const BigTextInput = (props: BigTextInputProps) => {
	const { placeHolder, onChange, input } = props;
	const theme = useTheme();
	return (
		<TextField
			onChange={onChange}
			InputProps={{
				disableUnderline: true,
				// TODO: placeholder color needs to change
				// sx: {
				// 	'&::placeholder': {
				// 		color: 'green',
				// 	},
				// },
				style: {
					color: theme.palette.common.brand.onprimary.container,
					fontWeight: '800',
					fontSize: '21px',
					minWidth: '200px',
					padding: '0px 0px 0px 0px',
					margin: '0px 0px 0px 0px',
					position: 'absolute',
					top: '-5px',
					left: '2px',
					// Cannot set the caret width.
					caretColor: theme.palette.common.brand.onprimary.container,
				},
			}}
			variant="standard"
			placeholder={placeHolder}
		>
			{input}
		</TextField>
	);
};

export default BigTextInput;
