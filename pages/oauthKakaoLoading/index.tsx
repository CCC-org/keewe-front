import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import MainLottie from '../../public/images/lottie/mainLottie.json';
import styles from './index.module.css';

const KakaoOauthRedirectionPage = () => {
	return (
		<div className={styles.container}>
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
