import { classNames } from "@/utils/functions";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Button.module.scss";

const Button = ({
	text = "Click Me",
	color,
	href = "#",
	target = "_blank",
	link,
	variant,
	className = "",
	size = "",
	icon = "",
	iconDir = "right",
	onClick,
	...rest
}) => {
	const router = useRouter();
	return (
		<button
			className={classNames(
				styles,
				"btn",
				`btn-${color}`,
				`btn-${size === "small" ? "btn-sm" : "btn-lg"}`,
				`btn-${variant}`,
				className
			)}
			{...rest}
			onClick={
				href !== "" && href !== "#"
					? () => window.open(href, target)
					: link !== router.pathname && link !== undefined
					? () => router.push(link)
					: onClick
			}
		>
			{icon !== "" && iconDir === "left" ? (
				<span
					className={classNames(
						styles,
						"btn-icon",
						`btn-icon-${iconDir}`
					)}
				>
					{icon}
				</span>
			) : null}
			{text}
			{icon !== "" && iconDir === "right" ? (
				<span
					className={classNames(
						styles,
						"btn-icon",
						`btn-icon-${iconDir}`
					)}
				>
					{icon}
				</span>
			) : null}
		</button>
	);
};

export default Button;
