import carrotDown from "@/public/icons/carrot-down.svg";
import { classNames } from "@/utils/functions";
import Image from "next/image";
import { useState } from "react";
import styles from "./Dropdown.module.scss";

const Dropdown = ({ options, dropdownValue, setDropdownValue }) => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div className={classNames(styles, "dropdown")}>
			<div
				className={classNames(styles, "dropdown-input")}
				onClick={() => setShowMenu((p) => !p)}
				style={{
					boxShadow: showMenu
						? "0px 0px 0px 3px rgba(0, 85, 255, 0.2)"
						: "0px 0px 0px 1.5px rgba(0, 24, 255, 0.2)",
				}}
			>
				<span>
					{
						options.find((option) => option.id === dropdownValue)
							?.text
					}
				</span>
				<Image src={carrotDown} alt="carrot down" />
			</div>
			{showMenu ? (
				<div
					className={classNames(styles, "dropdown-menu")}
					data-aos="fade-down"
				>
					{options.map((option, index) => (
						<div
							className={classNames(
								styles,
								"dropdown-menu-option"
							)}
							key={option.id + " " + index}
							onClick={() => setDropdownValue(option.id)}
						>
							{option.text}
						</div>
					))}
				</div>
			) : null}
		</div>
	);
};

export default Dropdown;
