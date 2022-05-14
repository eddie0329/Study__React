/** @jsxImportSource @emotion/react */
import React from 'react';

interface HeaderInfo {
	title: string;
	to: string;
}

const appNavStyle = {};

const AppNav: React.FC<HeaderInfo> = ({ title, to }) => {
	return <li css={appNavStyle}>{title}</li>;
};

const appHeaderStyle = {};

const AppHeader: React.FC = () => {
	const headerInfos: HeaderInfo[] = [
		{ title: 'Home', to: '/' },
		{ title: 'Posts', to: '/posts' },
	];
	return (
		<nav css={appHeaderStyle}>
			<ul>
				{headerInfos.map((info) => (
					<AppNav key={info.title} {...info} />
				))}
			</ul>
		</nav>
	);
};

export default AppHeader;
