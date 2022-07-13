import React from 'react';

/*
	https://api-keewe.com/api/v1/user/kakao?code={path}
*/
const index = (props: any) => {
	return (
		<div>
			<p>api-keewe.com/api/v1/user/kakao?code=query.code</p>
			<p>에 관한 내용들을 담은 페이지</p>
			<p>{props.data.message}</p>
			<p>{props.data.data.userId}</p>
			<p>{props.data.data.accessToken}</p>
		</div>
	);
};

export async function getServerSideProps(context: any) {
	const { query } = context;
	// TODO: JWT를 localStorage에 집언허어야함
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
