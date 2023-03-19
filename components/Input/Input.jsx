import styles from "./Input.module.scss";

const classNames = (...args) => {
	const classes = [];
	args.forEach((arg) => {
		if (typeof arg === "string") classes.push(styles[arg]);
		else if (typeof arg === "object")
			Object.keys(arg).forEach((key) => {
				if (arg[key]) classes.push(styles[key]);
			});
	});
	return classes.join(" ");
};

const Input = ({ label, className, ...rest }) => {
	return (
		<div className={classNames("input-group")}>
			{label ? (
				<label className={classNames("input-label")}>{label}</label>
			) : null}
			<input {...rest} className={classNames("input", className)}></input>
		</div>
	);
};

export default Input;
