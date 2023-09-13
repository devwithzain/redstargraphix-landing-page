"use client";
import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";
import { logoF } from "@public";
import { motion } from "framer-motion";
import { footerVariants } from "@constants/motion";
import Link from "next/link";
const Footer: React.FC = () => {
	return (
		<>
			<motion.section
				variants={footerVariants}
				initial="hidden"
				whileInView="show"
				className="w-full mt-16 pb-6">
				<div className="flex justify-between md:flex-row flex-col w-full pb-6">
					<div className="flex-1 flex flex-col justify-start mr-10">
						<div className="flex gap-x-4">
							<Image
								src={logoF}
								alt="logofooter"
								width={400}
								height={800}
								className="w-[50px] h-[50px] object-cover"
							/>
							<h1 className="text-white text-[25px] xl:text-[40px]">
								RedStarGraphix
							</h1>
						</div>
						<p className="mt-4 max-w-[310px] text-white">
							Take the first step towards transforming your branding with our
							expert design services. Don’t wait! Let’s create something amazing
							together.
						</p>
					</div>
					<div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
						{footerLinks.map((footerLink, i) => (
							<div
								key={footerLink.id}
								className="flex flex-col ss:my-0 my-4 mix-w-[150px">
								<h4
									className={`text-[20px] font-bold leading-[27px] text-white`}>
									{footerLink.title}
								</h4>
								<ul className="list-none mt-4 text-white">
									{footerLink.links.map((link, index) => (
										<li
											key={link.id}
											className={`font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
												index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
											}`}>
											{link.name}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
					<p className="font-normal text-center text-[18px] leading-[27px] text-white">
						Copyright © RedStarGraphix. All Rights Reserved.
					</p>
					<div className="flex flex-row md:mt-0 mt-6">
						{socialMedia.map((social, index) => (
							<Link
								href={social.link}
								target="_blank"
								key={social.id}>
								<Image
									src={social.icon}
									alt={social.link}
									className={`w-[21px] h-[21px] object-contain cursor-pointer ${
										index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
									}`}
								/>
							</Link>
						))}
					</div>
				</div>
			</motion.section>
		</>
	);
};

export default Footer;
