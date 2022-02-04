export const tretSklon = (word: string, wordCase: string) => {
	switch (wordCase) {
		case "0":
			return word;
		case "1":
			return word.slice(0, -1) + "и";
		case "2":
			return word.slice(0, -1) + "и";
		case "3":
			return word;
		case "4":
			return word + "ю";
		case "5":
			return word.slice(0, -1) + "и";
		default:
			throw new Error("ошибка в окочании");
	}
};
