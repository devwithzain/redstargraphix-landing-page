import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsApp: React.FC = () => {
	return (
		<div className="fixed bottom-5 right-5 z-20  text-green-500 bg-white rounded-full p-2">
			<Link
				href={"https://wa.me/18329224322"}
				target="_blank">
				<IoLogoWhatsapp size={"50px"} />
			</Link>
		</div>
	);
};

export default WhatsApp;
