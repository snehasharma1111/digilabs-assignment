import { classNames } from "@/utils/functions";
import Image from "next/image";
import styles from "./Banner.module.scss";
import chevronRight from "@/public/icons/carrot-right.svg";
import chevronLeft from "@/public/icons/carrot-left.svg";

const Banner = ({ image, title, description, tabs, style }) => {
	return (
		<div className={classNames(styles, "banner")} style={style}>
			<div className={classNames(styles, "banner-image")}>
				<Image src={image} alt={title} />
			</div>
			<div className={classNames(styles, "banner-content")}>
				<span className={classNames(styles, "banner-new")}>New</span>
				<h2 className={classNames(styles, "banner-title")}>{title}</h2>
				<p className={classNames(styles, "banner-description")}>
					{description}
				</p>
				<div className={classNames(styles, "banner-actions")}>
					{tabs ? (
						<div className={classNames(styles, "banner-dots")}>
							{Array(tabs?.total)
								?.fill(0)
								?.map((tab, index) => (
									<span
										key={index}
										className={classNames(
											styles,
											"banner-dot",
											tabs?.active === index
												? "banner-dot-active"
												: "banner-dot-inactive"
										)}
									></span>
								))}
						</div>
					) : null}
					<button
						className={classNames(styles, "banner-share")}
						onClick={(e) => {
							e.preventDefault();
							if (navigator.share) {
								navigator
									.share({
										title: "DigiLabs Assignment",
										url: "https://sneha-digilabs-assignment.vercel.app/",
									})
									?.then((res) => console.log(res))
									?.catch((err) => console.error(err));
							}
						}}
					>
						Share
					</button>
				</div>
			</div>
			<button
				className={classNames(
					styles,
					"banner-navbtn",
					"banner-navbtn-prev"
				)}
			>
				<span className={classNames(styles, "banner-navbtn-icon")}>
					<Image src={chevronLeft} alt="chevron" />
				</span>
			</button>
			<button
				className={classNames(
					styles,
					"banner-navbtn",
					"banner-navbtn-next"
				)}
			>
				<span className={classNames(styles, "banner-navbtn-icon")}>
					<Image src={chevronRight} alt="chevron" />
				</span>
			</button>
		</div>
	);
};

export default Banner;
