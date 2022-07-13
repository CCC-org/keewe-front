import React from 'react';
import Router from 'next/router';
import { Button } from '@mui/material';
import Link from 'next/link';

const temp2 = 'https://api-keewe.com/api/v1/oauth/kakao';

const responseQueryCode =
	'yul8DwTOqU0N1rcoqeMVNb0qqYBNyXqM2M1bztfCKnInY-Fp_u-zafY99E-YvIWnQfUdvQopb1QAAAGB8s2K4A';

const HomePage = () => {
	return (
		<>
			<Link href={temp2}>Link 드가자</Link>
		</>
	);
};

export default HomePage;
