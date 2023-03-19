import { classNames } from "@/utils/functions";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Input from "@/components/Input/Input";
import Dropdown from "@/components/Dropdown/Dropdown";
import Button from "@/components/Button/Button";
import favicon from "@/public/vectors/favicon.svg";
import eye from "@/public/icons/eye.svg";
import eyeBlocked from "@/public/icons/eye-blocked.svg";
import arrowRight from "@/public/icons/arrow-right-outline.svg";

const HomePage = () => {
	const router = useRouter();
	const options = [
		"heads.design",
		"gmail.com",
		"yahoo.com",
		"outlook.com",
	].map((option) => ({
		text: "@" + option,
		id: option,
	}));
	const [stage, setStage] = useState(1);
	const [dropdownValue, setDropdownValue] = useState(options[0].id);
	const [loginDetails, setLoginDetails] = useState({
		email: "",
		password: "",
		otp: "",
		passwordInputType: "password",
	});

	return (
		<main className={classNames(styles, "home")}>
			<section className={classNames(styles, "frame")}>
				<button
					className={classNames(styles, "frame-favicon")}
					onClick={() => router.push("/")}
				>
					<Image src={favicon} alt="favicon" />
				</button>
				<div className={classNames(styles, "content")}>
					<h1 className={classNames(styles, "content-heading")}>
						Welcome to Systempackage
					</h1>
					<form className={classNames(styles, "content-form")}>
						<Input
							placeholder="Email Address"
							boxStyle={{
								minWidth: "400px",
							}}
							name="email"
							value={loginDetails.email}
							onChange={(e) =>
								setLoginDetails((p) => ({
									...p,
									email: e.target.value,
								}))
							}
						>
							<Dropdown
								options={options}
								dropdownValue={dropdownValue}
								setDropdownValue={setDropdownValue}
								style={{
									position: "absolute",
									right: "8px",
									top: "50%",
									transform: "translateY(-50%)",
								}}
							/>
						</Input>
						<Input
							placeholder="Password"
							boxStyle={{
								minWidth: "400px",
							}}
							name="password"
							type={loginDetails.passwordInputType}
							value={loginDetails.password}
							onChange={(e) =>
								setLoginDetails((p) => ({
									...p,
									password: e.target.value,
								}))
							}
						>
							<Image
								src={
									loginDetails.passwordInputType ===
									"password"
										? eye
										: eyeBlocked
								}
								alt="show"
								onClick={() =>
									setLoginDetails((p) => ({
										...p,
										passwordInputType:
											p.passwordInputType === "password"
												? "text"
												: "password",
									}))
								}
								style={{
									position: "absolute",
									right: "16px",
									top: "50%",
									transform: "translateY(-50%)",
									cursor: "pointer",
									"&:hover": {
										backgroundColor: "var(--primary-color)",
									},
								}}
							/>
						</Input>
						<Button
							text="Next"
							icon={<Image src={arrowRight} alt="arrow" />}
							iconDir="right"
							variant="fill"
							style={{
								width: "100%",
								margin: "0 auto",
							}}
						/>
						<span
							className={classNames(
								styles,
								"content-form-forget"
							)}
							onClick={() => setStage(() => 1)}
						>
							Forgot your Password?
						</span>
					</form>
				</div>
				<span className={classNames(styles, "frame-signup")}>
					Not a member? <Link href="/signup">Create Account</Link>
				</span>
			</section>
		</main>
	);
};

export default HomePage;
