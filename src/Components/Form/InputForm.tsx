import { ErrorMessage, Field, Form, Formik } from "formik";
import { Dispatch, FC, SetStateAction } from "react";
import style from "./InputForm.module.css";
import { pervSklonA, pervSklonIya, pervSklonKa, pervSklonYa } from "../../BLL/PervSklon";
import { tretSklon } from "../../BLL/TretSklon";
import { vtorSklon, vtorSklonE, vtorSklonO, vtorSklonOk, vtorSklonYi } from "../../BLL/VtorSklon";

type Props = {
	setResult: Dispatch<SetStateAction<string>>;
};
type Error = {
	text?: string;
};
const InputForm: FC<Props> = ({ setResult }) => {
	type Values = {
		text: string;
		wordCase: string;
	};
	const setCase = (props: Values) => {
		let resWord = props.text;
		let word = "";
		let lastLetter = resWord.slice(-1);
		switch (resWord.slice(-2)) {
			case "ка":
				word = pervSklonKa(resWord, props.wordCase);
				return setResult(word);
			case "ок":
				word = vtorSklonOk(resWord, props.wordCase);
				return setResult(word);
			case "ия":
				word = pervSklonIya(resWord, props.wordCase);
				return setResult(word);
			default:
				break;
		}
		switch (lastLetter) {
			case "а":
				word = pervSklonA(resWord, props.wordCase);
				return setResult(word);
			case "я":
				word = pervSklonYa(resWord, props.wordCase);
				return setResult(word);
			case "о":
				word = vtorSklonO(resWord, props.wordCase);
				return setResult(word);
			case "е":
			case "ё":
				word = vtorSklonE(resWord, props.wordCase);
				return setResult(word);
			case "й":
				word = vtorSklonYi(resWord, props.wordCase);
				return setResult(word);
			case "ь":
				word = tretSklon(resWord, props.wordCase);
				return setResult(word);
			default:
				word = vtorSklon(resWord, props.wordCase);
				return setResult(word);
		}
	};

	return (
		<div className={style.wrapper}>
			<div>
				<h2 className={style.h2}>Склонение слова</h2>
				<Formik
					initialValues={{ text: "", wordCase: "0" }}
					validate={(values) => {
						const errors: Error = {};
						if (values.text.length < 3) {
							errors.text = "Слово не может состоять меньше чем из 3-х букв";
						}
						let endValue = values.text.match(/^[а-яА-я]*/);
						//@ts-ignore
						values.text = endValue[0] || "";
						return errors;
					}}
					onSubmit={(values: Values, { setSubmitting }) => {
						setCase(values);
						setSubmitting(false);
					}}
				>
					{({ isSubmitting }) => (
						<Form className={style.input}>
							<Field type="text" name="text" placeholder="Введите слово в ед.ч. им.п." />
							<ErrorMessage name="text" component="div" className={style.error}></ErrorMessage>
							<p>Выберите падеж</p>
							<Field name="wordCase" as="select" type="number">
								<option value="0">Именительный</option>
								<option value="1">Родительный</option>
								<option value="2">Дательный</option>
								<option value="3">Винительный</option>
								<option value="4">Творительный</option>
								<option value="5">Предложный</option>
							</Field>
							<button type="submit" disabled={isSubmitting}>
								Изменить
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default InputForm;
