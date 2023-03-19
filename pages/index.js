import { classNames } from "@/utils/functions";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
		allowResend: false,
	});
	const [otp, setOtp] = useState(Array(6).fill(""));
	useEffect(() => {
		if (stage === 2) {
			setTimeout(() => {
				setLoginDetails((p) => ({ ...p, allowResend: true }));
			}, 10000);
		} else setLoginDetails((p) => ({ ...p, allowResend: false }));
	}, [stage]);

	return (
		<main className={classNames(styles, "home")}>
			<section className={classNames(styles, "frame")}>
				<button
					className={classNames(styles, "frame-favicon")}
					onClick={() => setStage(() => 1)}
					style={{
						position: stage === 3 ? "relative" : "absolute",
					}}
				>
					<Image src={favicon} alt="favicon" />
					<span
						style={{
							color: "var(--primary-color-700)",
							marginTop: "20px",
							display: stage === 3 ? "flex" : "none",
							cursor: "text",
						}}
					>
						Success
					</span>
				</button>
				{stage === 1 ? (
					<div className={classNames(styles, "content")}>
						<h1 className={classNames(styles, "content-heading")}>
							Welcome to Systempackage
						</h1>
						<form
							className={classNames(styles, "content-form")}
							onSubmit={(e) => {
								e.preventDefault();
								if (
									loginDetails.email &&
									loginDetails.email !== "" &&
									loginDetails.password &&
									loginDetails.password !== ""
								)
									setStage(() => 2);
								else
									alert(
										"Please enter your email and password"
									);
							}}
						>
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
												p.passwordInputType ===
												"password"
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
											backgroundColor:
												"var(--primary-color)",
										},
									}}
								/>
							</Input>
							<Button
								text="Next"
								type="submit"
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
								onClick={() => {
									if (loginDetails.email === "")
										alert("Please enter your email");
									else setStage(() => 2);
								}}
							>
								Forgot your Password?
							</span>
						</form>
					</div>
				) : stage === 2 ? (
					<div className={classNames(styles, "content")}>
						<h1 className={classNames(styles, "content-heading")}>
							Enter the verification code to continue
						</h1>
						<p
							className={classNames(
								styles,
								"content-description"
							)}
						>
							We sent a 6-digit verification code to{" "}
							<a
								href={`mailto:${
									loginDetails.email + "@" + dropdownValue
								}`}
							>
								{loginDetails.email + "@" + dropdownValue}
							</a>
							. If you dont see it, check your spam.
						</p>
						<div className={classNames(styles, "content-otps")}>
							{otp.map((num, id) => (
								<Input
									name={"otp" + id}
									value={otp[id]}
									min={0}
									max={9}
									key={id}
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										textAlign: "center",
									}}
									autoComplete="false"
									placeholder="0"
									onKeyUp={(e) => {
										if (e.target.value.length === 1) {
											if (
												e.target.value >= 0 &&
												e.target.value <= 9
											) {
												if (e.target.name === "otp5") {
													e.target.blur();
												} else {
													document
														.getElementsByName(
															"otp" +
																(+e.target.name[
																	e.target
																		.name
																		.length -
																		1
																] +
																	1)
														)[0]
														.focus();
												}
											} else {
												e.target.value = "";
											}
										}
									}}
									onChange={(e) => {
										setOtp((p) => {
											let toSet = [...p];
											let v = e.target.value;
											if (
												v.length === 0 ||
												(v.length === 1 &&
													+v[0] >= 0 &&
													+v[0] <= 9)
											)
												toSet[id] = e.target.value;
											return toSet;
										});
									}}
								/>
							))}
						</div>
						<div className={classNames(styles, "content-actions")}>
							<span
								className={classNames(
									styles,
									"content-actions__btn"
								)}
								onClick={() => setStage(() => 1)}
							>
								Back
							</span>
							<span
								className={classNames(
									styles,
									"content-actions__btn"
								)}
								style={{
									color: loginDetails.allowResend
										? "var(--primary-color)"
										: "#CACACE",
									cursor: loginDetails.allowResend
										? "pointer"
										: "not-allowed",
								}}
								onClick={() => {
									if (loginDetails.allowResend)
										setStage(() => 3);
								}}
							>
								Resend OTP
							</span>
						</div>
					</div>
				) : null}
				<span className={classNames(styles, "frame-signup")}>
					Not a member? <Link href="/signup">Create Account</Link>
				</span>
			</section>
		</main>
	);
};

export default HomePage;
