import React from 'react';

/*
	https://api-keewe.com/api/v1/user/kakao?code={path}
*/
const index = (props: any) => {
	const { data } = props;
	return (
		<div>
			<p>api-keewe.com/api/v1/user/kakao?code=query.code</p>
			<p>에 관한 내용들을 담은 페이지</p>
			<p>{data.message}</p>
			<p>{data.data.userId}</p>
			<p>{data.data.accessToken}</p>
		</div>
	);
};

export default index;
