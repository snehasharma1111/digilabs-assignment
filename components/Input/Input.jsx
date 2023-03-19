import { classNames } from "@/utils/functions";
import styles from "./Input.module.scss";

const Input = ({ label, className, children, boxStyle, ...rest }) => {
	return (
		<div className={classNames(styles, "input-group")} style={boxStyle}>
			{label ? (
				<label className={classNames(styles, "input-label")}>
					{label}
				</label>
			) : null}
			<input
				{...rest}
				className={classNames(styles, "input", className)}
			></input>
			{children}
		</div>
	);
};

export default Input;
