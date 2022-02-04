import React, { FC, useState } from "react";
import InputForm from "./Form/InputForm";
import Result from "./Result/Result";
import style from "./App.module.css";

const App: FC = () => {
	const [result, setResult] = useState("");
	return (
		<div className={style.flex}>
			<div className={style.content}>
				<InputForm setResult={setResult} />
				<Result result={result} />
			</div>
		</div>
	);
};

export default App;
