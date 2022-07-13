import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

/*
	https://api-keewe.com/api/v1/user/kakao?code={path}
*/
const index = (props: any) => {
	console.log(props.data);
	return (
		<div>
			<h1>{props.message}</h1>
			<h1>{props.data.userId}</h1>
			<h1>{props.data.accessToken}</h1>
		</div>
	);
};

export async function getServerSideProps(context: any) {
	const { query } = context;
	console.log(query.code);
	try {
		const res = await fetch(
			`https://api-keewe.com/api/v1/user/kakao?code=${query.code}`,
		);
		const data = await res.json();
		return {
			props: {
				data: data,
				fake: 'fake',
			},
		};
	} catch (e) {
		// console.log(`something has failed!`.repeat(5), e);
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}
}

export default index;
