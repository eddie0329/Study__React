import { useState, useEffect } from 'react';

export const useMount = () => {
	const [mount, setMount] = useState(false);

	useEffect(() => {
		setMount(true);
	}, []);

	const useMountEffect = (callback: any) =>
		useEffect(() => {
			if (!mount) return; /* guard */
			return callback();
		}, [mount]);

	return { mount, useMountEffect };
};
