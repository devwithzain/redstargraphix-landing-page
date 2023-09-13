"use client";
import styles from "@styles/style";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioItem } from "@constants";
import { portVariants } from "@constants/motion";

const Portfolio: React.FC = () => {
	return (
		<>
			<section
				id="portfolio"
				className="w-full py-16">
				<h1 className="lg:text-[60px] text-[40px] text-white font-bold mb-6">
					Get inspired by beautiful design
				</h1>
				<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lp:grid-cols-3 lg:grid-cols-3">
					{portfolioItem.map((item) => (
						<motion.div
							key={item.id}
							className="p-8 flex flex-col items-center justify-center gap-y-5 bg-secondry rounded-lg w-[maxcontent]"
							variants={portVariants}
							initial="hidden"
							whileInView="show">
							<Image
								src={item.img}
								alt={item.title}
								width={400}
								height={800}
								className="w-[100%] h-full object-fill"
							/>
							<div>
								<h1 className="text-[22px] text-white">{item.title}</h1>
							</div>
						</motion.div>
					))}
				</div>
			</section>
		</>
	);
};

export default Portfolio;
