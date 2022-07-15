import React from 'react';
import KakaoLoading from '@components/oauthKakaoLoading';

const oauthKakaoLoading = (props: any) => {
	console.log(`oauthKakaoLoading: `, props);

	return <KakaoLoading props={props} />;
};

export async function getServerSideProps(context: any) {
	const { query } = context;
	// TODO: JWT를 localStorage에 집언허어야함
	console.log(query);
	const res = await fetch(
		`https://api-keewe.com/api/v1/user/kakao?code=${query.code}`,
	);
	const data = await res.json(); // JWT가 있음.

	console.log(data);

	return {
		props: {
			data,
		},
	};
}

export default oauthKakaoLoading;

/*
	flutter      ==> 다트 소스코드가, 컴파일 되면 ios, android가 읽을 수 있는 코드로 두개가 컴파일되어서 나옴
	react-native ==> 그냥 그 자체의 프로그램으로 실행하는거에요. 이거의 예시가 뭐냐면, 디스코드
	electron     ==> js로 데스크톱 앱을 만들수 있는 프레임워크임.

	서체는 지금당장 알아보기가 너무 힘들다. 일단 좀 두고보자 이런 스텐스로 나가보죠.
*/
