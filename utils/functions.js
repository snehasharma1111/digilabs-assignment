export const classNames = (styles, ...args) => {
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
