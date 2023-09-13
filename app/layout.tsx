import { WhatsApp } from "@components";
import "@styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "RedStarGraphix",
	description:
		"Welcome to RedStarGraphix We offer professional design services including logo designs, banners, business cards, and more. Let us bring your creative visions to life.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className="font-jua bg-primary">
				<WhatsApp />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
