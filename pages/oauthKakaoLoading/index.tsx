import React from 'react';

/*
	https://api-keewe.com/api/v1/user/kakao?code={path}
*/
const index = (props: any) => {
	console.log(props);
	return (
		<div>
			<p>{props.data.message}</p>
			<p>{props.data.data.userId}</p>
			<p>{props.data.data.accessToken}</p>
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
