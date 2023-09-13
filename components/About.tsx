"use client";
import styles from "@styles/style";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroVariants, heroVariants1 } from "@constants/motion";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { aboutposter } from "@public";
const Contact = () => (
	<>
		<section
			id="about"
			className="w-full py-16">
			<h1 className="lg:text-[60px]  text-[40px] text-white mb-6 font-bold">
				Only the best freelance design
			</h1>
			<div
				className={`w-full flex md:flex-row flex-col overflow-hidden gap-8 ${styles.paddingY}`}>
				<motion.div
					className={`flex-1  flex-col `}
					variants={heroVariants}
					initial="hidden"
					whileInView="show">
					<div className="flex  text-white flex-col gap-6 lg:gap-y-12">
						<h1 className="text-[20px]">
							Here&apos;s why 100,000+ businesses have chosen RedStarGraphix:
						</h1>
						<div className="flex flex-col gap-6 bg-secondry p-4 rounded-lg">
							<div className="flex gap-x-3 items-center">
								<RiCheckboxCircleLine className="w-[35px] h-[35px]" />
								<h1 className="text-[18px] font-bold ">Save money & time</h1>
							</div>
							<p className="text-white text-[16px]">
								Our custom design starts at a low price with options to meet any
								budget. On average, projects start to receive designs within a
								few hours.
							</p>
						</div>
						<div className="flex flex-col gap-6 bg-secondry p-4 rounded-lg">
							<div className="flex gap-x-3 items-center">
								<RiCheckboxCircleLine className="w-[35px] h-[35px]" />
								<h1 className="text-[18px] font-bold ">More creativity</h1>
							</div>
							<p className="text-white text-[16px]">
								With freelance designers across the globe competing on your
								project, you&apos;ll receive heaps of design ideas - you just
								need to choose the best.
							</p>
						</div>
						<div className="flex flex-col gap-6 bg-secondry p-4 rounded-lg">
							<div className="flex gap-x-3 items-center">
								<RiCheckboxCircleLine className="w-[35px] h-[35px]" />
								<h1 className="text-[18px] font-bold ">Money back guarantee</h1>
							</div>
							<p className="text-white text-[16px]">
								If you&apos;re not satisfied with the designs and don&apos;t get
								the perfect design for your business, get your money back
							</p>
						</div>
					</div>
				</motion.div>
				<motion.div
					className={`${styles.flexCenter} flex-1  flex md:my-0 my-10`}
					variants={heroVariants1}
					initial="hidden"
					whileInView="show">
					<Image
						src={aboutposter}
						alt="aboutposter"
						width={400}
						height={800}
						className="w-[80%] object-cover"
					/>
				</motion.div>
			</div>
		</section>
	</>
);

export default Contact;
