import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Player } from '@lottiefiles/react-lottie-player';
import MainLottie from '../../../public/images/lottie/mainLottie.json';
import { isMobile, isAndroid, isIOS } from 'react-device-detect';
import { useRouter } from 'next/router';

const LinkPage: NextPage = () => {
	const router = useRouter();
	const { type, id } = router.query;

	useEffect(() => {
		alert(`${type}   :  ${id}`);
		if (isMobile) {
			router.push(`keewe:///link/${type}/${id}`);
			const timer = setTimeout(() => {
				if (document.hidden) {
					clearTimeout(timer);
				} else {
					move();
				}
			}, 500);
		}
	}, [isMobile]);

	const move = () => {
		if (window.confirm('스토어로 이동하시겠습니까?')) {
			if (isAndroid) {
				router.push(
					'http://play.google.com/store/apps/details?id=com.akdlsz21.keewe',
				);
			}
			if (isIOS) {
				router.push('https://apps.apple.com/kr/app/keewe/id6451339222');
			}
		}
	};

	let imageUrl = undefined;
	if (type === 'challenge') {
		imageUrl = 'https://www.keewe.kr/images/tagImages/challenge.png';
	} else if (type !== undefined) {
		imageUrl = 'https://www.keewe.kr/images/tagImages/other.png';
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
			<Head>
				<meta property="og:type" content="keewe" />
				<meta property="og:site_name" content="keewe" />
				<meta property="og:title" content="keewe" />
				<meta property="og:url" content="http://keewe.kr" />
				<meta
					name="description"
					property="og:description"
					content="keewe에서 보기"
				/>
				<meta
					name="image"
					property="og:image"
					content="/images/tagImages/other.png"
				/>
			</Head>
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
