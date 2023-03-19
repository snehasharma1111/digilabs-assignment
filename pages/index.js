import Button from "@/components/Button/Button";
import Image from "next/image";
import arrowRightOutline from "@/public/vectors/arrow-right-outline.svg";
import arrowRightFill from "@/public/vectors/arrow-right-fill.svg";
import Input from "@/components/Input/Input";

const HomePage = () => {
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
			<Input placeholder="Enter Full Name" label="Name" />
			<Input
				placeholder="Enter Full Name"
				label="Name"
				value="Sneha Sharma"
			/>
			<Input placeholder="Enter Full Name" label="Name" disabled />
		</main>
	);
};

export default HomePage;
