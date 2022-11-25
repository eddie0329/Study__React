type FlagState = [number, React.Dispatch<React.SetStateAction<number>>];
interface ToastInfo {
	id: number;
	msg: string;
	type: ToastType;
	timer: NodeJS.Timeout;
	close: () => void;
}

export enum ToastType {
	SUCCESS = 'SUCCESS',
	FAIL = 'FAIL',
}

export default class ToastProxy {
	private readonly flagState: FlagState;
	private id: number = 0;
	toastInfos: ToastInfo[] = [];

	constructor(flagState: FlagState) {
		this.flagState = flagState;
	}

	generateToast(msg: string, toastType: ToastType, duration: number) {
		const figuredId = this.id++;
		this.toastInfos.push({
			msg,
			id: figuredId,
			type: toastType,
			timer: setTimeout(() => {
				this.close(figuredId);
			}, duration),
			close: () => this.close(figuredId),
		});
		this.update();
	}

	success(msg: string) {
		this.generateToast(msg, ToastType.SUCCESS, 1000);
	}

	fail(msg: string) {
		this.generateToast(msg, ToastType.FAIL, 1000);
	}

	close(id: number) {
		const foundToastInfo = this.toastInfos.find(({ id: _id }) => _id !== id);
		if (foundToastInfo) clearTimeout(foundToastInfo.timer);
		this.toastInfos = this.toastInfos.filter(({ id: _id }) => _id !== id);
		this.update();
	}

	clearAll() {
		this.toastInfos = [];
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
