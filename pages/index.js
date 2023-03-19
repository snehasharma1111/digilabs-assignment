import Button from "@/components/Button/Button";
import Image from "next/image";
import arrowRightOutline from "@/public/icons/arrow-right-outline.svg";
import arrowRightFill from "@/public/icons/arrow-right-fill.svg";
import bannerImage from "@/public/vectors/banner-image.svg";
import Input from "@/components/Input/Input";
import Banner from "@/components/Banner/Banner";
import Dropdown from "@/components/Dropdown/Dropdown";
import { useState } from "react";

const HomePage = () => {
	const options = [
		{
			text: "@heads.design",
			id: "heads.design",
		},
		{
			text: "@gmail.com",
			id: "gmail.com",
		},
		{
			text: "@yahoo.com",
			id: "yahoo.com",
		},
	];
	const [dropdownValue, setDropdownValue] = useState(options[0].id);
	return (
		<main>
			<Button
				text="Next"
				icon={<Image src={arrowRightOutline} alt="arrow right" />}
				variant="fill"
			/>
			<Button
				text="Next"
				icon={<Image src={arrowRightFill} alt="arrow right" />}
				variant="outline"
			/>
			<Button
				text="Next"
				icon={<Image src={arrowRightOutline} alt="arrow right" />}
				variant="dark"
			/>
			<Button
				text="Next"
				icon={<Image src={arrowRightOutline} alt="arrow right" />}
				variant="dark"
				disabled
			/>
			<Dropdown
				options={options}
				dropdownValue={dropdownValue}
				setDropdownValue={setDropdownValue}
			/>
			<Input placeholder="Enter Full Name" label="Name" />
			<Input
				placeholder="Enter Full Name"
				label="Name"
				value="Sneha Sharma"
			/>
			<Input placeholder="Enter Full Name" label="Name" disabled />
			<Banner
				image={bannerImage}
				title="Developer handoff improvements"
				description="You'll now see a highlight around Symbols on the Canvas and in the Inspector."
				tabs={{
					total: 4,
					active: 0,
				}}
			/>
		</main>
	);
};

export default HomePage;
