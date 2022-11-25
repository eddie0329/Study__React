import { NextRouter } from 'next/router';
import React, { FC } from 'react';

export type Resolve = (value: unknown) => void;
export type Reject = (reason: any) => void;
type FlagState = [number, React.Dispatch<React.SetStateAction<number>>];
type ModalComponent = FC<any>;
interface Options {
	props: any;
}
interface ModalInfo {
	key: string;
	Component: ModalComponent;
	resolve: Resolve;
	reject: Reject;
	props?: any;
}

export default class ModalProxy {
	private readonly flagState: FlagState;
	private readonly router: NextRouter;
	modalInfos: ModalInfo[] = [];

	constructor(flagState: FlagState, router: NextRouter) {
		this.flagState = flagState;
		this.router = router;
	}

	filterModalInfoByKey(key: string) {
		this.modalInfos = this.modalInfos.filter(({ key: _key }) => _key !== key);
	}

	resolve(key: string, value: any, resovle: Resolve) {
		this.filterModalInfoByKey(key);
		resovle(value);
		this.update();
	}

	reject(key: string, reason: any, reject: Reject) {
		this.filterModalInfoByKey(key);
		reject(reason);
		this.update();
	}

	push<T>(
		key: string,
		Component: ModalComponent,
		options?: Options
	): Promise<T> | never {
		this.filterModalInfoByKey(key);
		return new Promise((resolve, reject) => {
			this.modalInfos.push({
				key,
				Component,
				resolve: (value) => this.resolve(key, value, resolve as Resolve),
				reject: (reason) => this.reject(key, reason, reject),
				props: options?.props ?? {},
			});
			// this.router.push({
			// 	query: {
			// 		dialogType: this.modalInfos.map(({ key }) => key),
			// 	},
			// });
			this.update();
		});
	}

	pop() {
		this.modalInfos.pop();
		this.update();
	}

	clearAll() {
		this.modalInfos = [];
		this.update();
	}

	update() {
		if (typeof window === 'undefined') return; /* guard */
		const [_, setFlag] = this.flagState;
		setFlag((prev) => prev * -1);
	}

	mount() {
		this.update();
	}

	unmount() {
		this.clearAll();
	}
}
