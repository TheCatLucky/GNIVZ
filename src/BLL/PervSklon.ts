export const pervSklonA = (word: string, wordCase: string) => {
	switch (wordCase) {
		case "0":
			return word;
		case "1":
			return word.slice(0, -1) + "ы";
		case "2":
			return word.slice(0, -1) + "е";
		case "3":
			return word.slice(0, -1) + "у";
		case "4":
			return word.slice(0, -1) + "ой";
		case "5":
			return word.slice(0, -1) + "е";
		default:
			throw new Error("ошибка в окочании");
	}
};
export const pervSklonYa = (word: string, wordCase: string) => {
	switch (wordCase) {
		case "0":
			return word;
		case "1":
			return word.slice(0, -1) + "и";
		case "2":
			return word.slice(0, -1) + "е";
		case "3":
			return word.slice(0, -1) + "ю";
		case "4":
			return word.slice(0, -1) + "ей";
		case "5":
			return word.slice(0, -1) + "е";
		default:
			throw new Error("ошибка в окочании");
	}
};
export const pervSklonIya = (word: string, wordCase: string) => {
	switch (wordCase) {
		case "0":
			return word;
		case "1":
			return word.slice(0, -1) + "и";
		case "2":
			return word.slice(0, -1) + "и";
		case "3":
			return word.slice(0, -1) + "ю";
		case "4":
			return word.slice(0, -1) + "ей";
		case "5":
			return word.slice(0, -1) + "и";
		default:
			throw new Error("ошибка в окочании");
	}
};

export const pervSklonKa = (word: string, wordCase: string) => {
	switch (wordCase) {
		case "0":
			return word;
		case "1":
			return word.slice(0, -1) + "и";
		case "2":
			return word.slice(0, -1) + "е";
		case "3":
			return word.slice(0, -1) + "у";
		case "4":
			return word.slice(0, -1) + "ой";
		case "5":
			return word.slice(0, -1) + "е";
		default:
			throw new Error("ошибка в окочании");
	}
};

