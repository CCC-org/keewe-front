import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { BlockMapType, NotionRenderer } from 'react-notion';

const Page = () => {
	const [response, setResponse] = useState<BlockMapType>({});
	useEffect(() => {
		const NOTION_PAGE_ID = 'Keewe-32099697963a4681a5afe70000b0217a?pvs=4';
		fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
			.then((res) => res.json())
			.then((resJson) => {
				setResponse(resJson);
			});
	}, []);
	return <NotionRenderer blockMap={response} fullPage={true} />;
};

export default Page;
