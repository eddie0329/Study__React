/** @jsxImportSource @emotion/react */
import React from 'react';

type Props = {
	children: React.ReactNode;
};

const style = {
	'background-color': 'hotpink',
  height: '100vh',
	padding: '32px',
};

const BasicLayout: React.FC<Props> = ({ children }) => {
	return <main css={style}>{children}</main>;
};

export default BasicLayout;
