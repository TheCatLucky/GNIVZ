import { ErrorMessage, Field, Form, Formik } from "formik";
import { Dispatch, FC, SetStateAction } from "react";
import { setCase, Values } from "../../BLL/FilterWord";
import style from "./InputForm.module.css";

type Props = {
	setResult: Dispatch<SetStateAction<string>>;
};
type Error = {
	text?: string;
};
const InputForm: FC<Props> = ({ setResult }) => {
	const handleWordSubmit = (values: Values) => {
		setResult(setCase(values));
	};
	return (
		<div className={style.wrapper}>
			<div>
				<h2 className={style.h2}>Склонение слова</h2>
				<Formik
					initialValues={{ text: "", wordCase: "0" }}
					validate={(values) => {
						const errors: Error = {};
						if (values.text.length <= 3) {
							errors.text = "Слово не может состоять меньше чем из 3-х букв";
						}
						let endValue = values.text.match(/^[а-яА-я]*/);
						//@ts-ignore
						values.text = endValue[0] || "";
						return errors;
					}}
					onSubmit={(values: Values, { setSubmitting }) => {
						handleWordSubmit(values);
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
