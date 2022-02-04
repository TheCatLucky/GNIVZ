export const vtorSklon = (word: string, wordCase: string) => {
	switch (wordCase) {
		case "0":
			return word;
		case "1":
			return word + "а";
		case "2":
			return word + "у";
    case "3":
      return word;
		case "4":
			return word + "ом";
		case "5":
			return word + "е";
		default:
			throw new Error("ошибка в окочании");
	}
};
export const vtorSklonYi = (word: string, wordCase: string) => {
	switch (wordCase) {
		case "0":
			return word;
		case "1":
			return word.slice(0, -1) + "я";
		case "2":
			return word.slice(0, -1) + "ю";
		case "3":
			return word.slice(0, -1) + "я";
		case "4":
			return word.slice(0, -1) + "ем";
		case "5":
			return word.slice(0, -1) + "е";
		default:
			throw new Error("ошибка в окочании");
	}
};
export const vtorSklonO = (word: string, wordCase: string) => {
	switch (wordCase) {
		case "0":
			return word;
		case "1":
			return word.slice(0, -1) + "а";
		case "2":
			return word.slice(0, -1) + "у";
		case "3":
			return word.slice(0, -1) + "о";
		case "4":
			return word.slice(0, -1) + "ом";
		case "5":
			return word.slice(0, -1) + "е";
		default:
			throw new Error("ошибка в окочании");
	}
};
export const vtorSklonE = (word: string, wordCase: string) => {
	switch (wordCase) {
		case "0":
			return word;
		case "1":
			return word.slice(0, -1) + "я";
		case "2":
			return word.slice(0, -1) + "ю";
		case "3":
			return word.slice(0, -1) + "е";
		case "4":
			return word.slice(0, -1) + "ем";
		case "5":
			return word.slice(0, -1) + "е";
		default:
			throw new Error("ошибка в окочании");
	}
};
export const vtorSklonOk = (word: string, wordCase: string) => {
	switch (wordCase) {
		case "0":
			return word;
		case "1":
			return word.slice(0, -2) + "ка";
		case "2":
			return word.slice(0, -2) + "ку";
		case "3":
			return word.slice(0, -2) + "ок";
		case "4":
			return word.slice(0, -2) + "ком";
		case "5":
			return word.slice(0, -2) + "ке";
		default:
			throw new Error("ошибка в окочании");
	}
};
