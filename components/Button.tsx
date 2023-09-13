import { ButtonProps } from "@types";
import Link from "next/link";

const Button: React.FC<ButtonProps> = ({ href, title }) => {
	return (
		<button className="text-[#fff] border-none outline-none text-[20px] lg:text-[30px] bg-secondry hover:bg-[#11001C] mt-8 px-6 py-3 rounded-sm w-[max-content]  text-center cursor-pointer">
			<Link href={href}>{title}</Link>
		</button>
	);
};

export default Button;
