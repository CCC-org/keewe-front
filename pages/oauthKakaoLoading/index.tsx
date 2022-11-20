import React from 'react';
// import Lottie from 'react-lottie';
import { Player } from '@lottiefiles/react-lottie-player';
import MainLottie from '../../public/images/lottie/mainLottie.json';

const KakaoOauthRedirectionPage = () => {
	return (
		<div>
			<Player
				src={MainLottie}
				background="transparent"
				speed={1}
				autoplay={true}
				loop={true}
				style={{ width: '300px', height: '300px' }}
			/>
		</div>
	);
};

export default KakaoOauthRedirectionPage;
