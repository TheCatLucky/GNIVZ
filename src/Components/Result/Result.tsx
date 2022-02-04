import { FC } from "react";
import style from "./Result.module.css";
type Props = {
	result: string;
};
const Result: FC<Props> = ({ result }) => {
  return (
    <div className={style.wrapper}>
      <p>Новое слово :</p>
			<p className={style.result}>{result}</p>
		</div>
  );
};
export default Result;
