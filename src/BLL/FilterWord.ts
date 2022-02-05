import { pervSklonA, pervSklonIya, pervSklonKa, pervSklonYa } from "./PervSklon";
import { tretSklon } from "./TretSklon";
import { vtorSklon, vtorSklonE, vtorSklonO, vtorSklonOk, vtorSklonYi } from "./VtorSklon";

	export type Values = {
		text: string;
		wordCase: string;
	};
export const setCase = (props: Values) => {
		let resWord = props.text;
		let word = "";
		let lastLetter = resWord.slice(-1);
		switch (resWord.slice(-2)) {
			case "ка":
				word = pervSklonKa(resWord, props.wordCase);
				return word;
			case "ок":
				word = vtorSklonOk(resWord, props.wordCase);
				return word;
			case "ия":
				word = pervSklonIya(resWord, props.wordCase);
				return word;
			default:
				break;
		}
		switch (lastLetter) {
			case "а":
				word = pervSklonA(resWord, props.wordCase);
				return word;
			case "я":
				word = pervSklonYa(resWord, props.wordCase);
				return word;
			case "о":
				word = vtorSklonO(resWord, props.wordCase);
				return word;
			case "е":
			case "ё":
				word = vtorSklonE(resWord, props.wordCase);
				return word;
			case "й":
				word = vtorSklonYi(resWord, props.wordCase);
				return word;
			case "ь":
				word = tretSklon(resWord, props.wordCase);
				return word;
			default:
				word = vtorSklon(resWord, props.wordCase);
				return word;
		}
	};