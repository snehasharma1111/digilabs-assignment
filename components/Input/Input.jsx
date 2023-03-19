import { classNames } from "@/utils/functions";
import styles from "./Input.module.scss";

const Input = ({ label, className, ...rest }) => {
	return (
		<div className={classNames(styles, "input-group")}>
			{label ? (
				<label className={classNames(styles, "input-label")}>
					{label}
				</label>
			) : null}
			<input
				{...rest}
				className={classNames(styles, "input", className)}
			></input>
		</div>
	);
};

export default Input;
