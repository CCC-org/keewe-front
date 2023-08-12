import React from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import { Player } from '@lottiefiles/react-lottie-player';
import MainLottie from '../../../../public/images/lottie/mainLottie.json';
import { isMobile } from 'react-device-detect';
import { useRouter } from 'next/router';

interface LinkPageProps {
	type: string;
	id: string;
}

const LinkPage: NextPage<LinkPageProps> = ({ type, id }: LinkPageProps) => {
	const router = useRouter();

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

export const getServerSideProps: GetServerSideProps<LinkPageProps> = async (
	context,
) => {
	const { type, id } = context.query;

	return {
		props: {
			type: type as string,
			id: id as string,
		},
	};
};
