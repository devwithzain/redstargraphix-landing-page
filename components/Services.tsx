"use client";
import { servicesItem } from "@constants";
import { serviceVariants } from "@constants/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import Link from "next/link";
const Services: React.FC = () => {
	const initialVisibleServices = 9;
	const [showAll, setShowAll] = useState(false);

	const visibleServices = showAll
		? servicesItem
		: servicesItem.slice(0, initialVisibleServices);

	const toggleShowAll = () => {
		setShowAll(!showAll);
	};
	return (
		<>
			<section
				id="services"
				className="w-full py-16">
				<h1 className="lg:text-[60px] text-[40px] text-white mb-6 font-bold">
					Our Design Services
				</h1>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lp:grid-cols-5 lg:grid-cols-5">
					{visibleServices.map((item, i) => (
						<motion.div
							key={item.id}
							className="rounded-[10px] bg-secondry p-[25px] transition-all ease-in-out hover:bg-gradient-to-r from-red-600 to-pink-600 hover:translate-y-2 flex gap-y-4 items-center justify-center flex-col"
							variants={serviceVariants}
							initial="hidden"
							whileInView="show">
							<Link
								className="w-full h-full"
								href={`${i === 14 ? "/video-editing" : ""}`}>
								<Image
									src={item.img}
									alt={item.title}
									width={400}
									height={800}
									className="h-full w-full object-cover"
								/>
							</Link>
							<div>
								<h1 className="text-[18px] text-white">{item.title}</h1>
							</div>
						</motion.div>
					))}
				</div>
				<div className="flex w-full items-center justify-center my-6 gap-6">
					{servicesItem.length > initialVisibleServices && (
						<button
							className="text-[#fff] border-none outline-none text-[20px] lg:text-[30px] bg-secondry hover:bg-[#11001C] mt-8 px-6 py-3 rounded-sm w-[max-content]  text-center"
							onClick={toggleShowAll}>
							{showAll ? "Show Less" : "Show More"}
						</button>
					)}
					<Button
						title={"Get started"}
						href={"#contact"}
					/>
				</div>
			</section>
		</>
	);
};

export default Services;
