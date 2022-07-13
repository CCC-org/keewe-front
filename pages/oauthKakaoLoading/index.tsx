import React from 'react';

/*
	https://api-keewe.com/api/v1/user/kakao?code={path}
*/
const index = (props: any) => {
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

	try {
		const res = await fetch(
			`https://api-keewe.com/api/v1/user/kakao?code=${query.code}`,
		);
		const data = await res.json();
		console.log(data);
		return {
			props: {
				data,
			},
		};
	} catch (e) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}
}

export default index;
