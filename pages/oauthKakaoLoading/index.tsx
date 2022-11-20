import React from 'react';
import Lottie from 'react-lottie';
import MainLottie from '../../public/images/lottie/mainLottie.json';

const KakaoOauthRedirectionPage = () => {
	return (
		<div>
			<Lottie
				options={{
					loop: true,
					autoplay: true,
					animationData: MainLottie,
					rendererSettings: {
						preserveAspectRatio: 'xMidYMid slice',
					},
				}}
			/>
		</div>
	);
};

export default KakaoOauthRedirectionPage;
