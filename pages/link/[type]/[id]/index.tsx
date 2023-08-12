import React from 'react';
import type { NextPage } from 'next';
import { Player } from '@lottiefiles/react-lottie-player';
import MainLottie from '../../../../public/images/lottie/mainLottie.json';
import { isMobile } from 'react-device-detect';
import { useRouter } from 'next/router';

const LinkPage: NextPage = () => {
	const router = useRouter();
	const { type, id } = router.query;

	if (isMobile) {
		router.push(`keewe:///link/${type}/${id}`);
	}

	return (
		<div
			style={{
				backgroundColor: 'white',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				paddingBottom: '80px',
				height: '100vh',
			}}
		>
			<Player
				src={MainLottie}
				background="transparent"
				speed={1}
				autoplay={true}
				loop={true}
				style={{ width: '130px', height: '130px' }}
			/>
		</div>
	);
};

export default LinkPage;
