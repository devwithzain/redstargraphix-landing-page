"use client";
import styles from "@styles/style";
import { logo } from "@public";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroVariants, heroVariants1 } from "@constants/motion";
import Button from "./Button";
import Navbar from "./Navbar";
const Hero = () => (
	<section
		id="home"
		className={`w-full min-h-[100vh] mb-20`}>
		<Navbar />
		<div
			className={`w-full flex lg:flex-row flex-col gap-12 lp:items-center lg:items-center lg:min-h-[83vh] lp:min-h-[80vh] md:items-start overflow-hidden lp:flex-row pt-7`}>
			<motion.div
				className="flex justify-center items-start flex-1 flex-col xl:px-0"
				variants={heroVariants}
				initial="hidden"
				whileInView="show">
				<div className="flex flex-row justify-between items-center w-full">
					<h1 className="flex-1 font-bold lg:text-[80px] lg:leading-[130px] lp:leading-[80px] text-[30px] text-white lp:text-[40px] lg:text-white tracking-wider">
						Unleash your
						<br className="lg:block lp:block hidden" />{" "}
						<span className="text-[#BE1621]">Brand&apos;s</span> full
						<br className="lg:block lp:block hidden" /> potential with our
						<br className="lg:block lp:block hidden" /> wide array of
						<br className="lg:block lp:block hidden" /> design services!
					</h1>
				</div>
				<Button
					title={"Explore now"}
					href={"#services"}
				/>
			</motion.div>
			<motion.div
				className="justify-center items-center flex-1 relative lg:justify-center flex md:my-0 my-10"
				variants={heroVariants1}
				initial="hidden"
				whileInView="show">
				<Image
					src={logo}
					alt="billings"
					width={400}
					height={800}
					className="lp:w-[90%] h-full md:w-[40%]"
				/>
			</motion.div>
		</div>
	</section>
);

export default Hero;
