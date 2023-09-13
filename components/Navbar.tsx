"use client";
import { useState } from "react";
import { navLinks } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { navVariants } from "@constants/motion";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
const Navbar: React.FC = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<nav className="w-full flex justify-between items-center py-5 z-20 text-white">
				<Link href="/">
					<motion.h1
						className=" text-[30px] lg:text-[40px]"
						variants={navVariants}
						initial="hidden"
						whileInView="show">
						RedStarGraphix
					</motion.h1>
				</Link>
				<ul className="md:flex justify-center items-center hidden">
					{navLinks.map((nav, index) => (
						<motion.li
							key={nav.id}
							className={`font-normal cursor-pointer text-[20px] text-white ${
								index === navLinks.length - 1 ? "mr-0" : "mr-10"
							}`}
							variants={navVariants}
							initial="hidden"
							whileInView="show">
							<a href={`#${nav.id}`}>{nav.title}</a>
						</motion.li>
					))}
				</ul>
				<div className="w-[35px] h-[35px] rounded-[50%] flex justify-center items-center md:hidden">
					<CgMenuRight
						onClick={() => setToggle(true)}
						className="text-3xl cursor-pointer"
					/>
					{toggle && (
						<motion.div
							whileInView={{ x: [300, 0] }}
							transition={{ duration: 0.85, ease: "easeOut" }}
							className="fixed top-0 bottom-0 right-0 z-50 p-4 w-full h-screen flex justify-end items-end 
                            flex-col shadow-md bg-[#11001c]">
							<IoMdClose
								onClick={() => setToggle(false)}
								className="w-[35px] h-[35px]"
							/>
							<ul className="h-full w-full flex justify-center items-center flex-col gap-y-12">
								{navLinks.map((link) => (
									<Link
										href={`#${link.id}`}
										key={link.id}
										onClick={(toggle) => setToggle(!toggle)}
										className="text-[25px] uppercase font-bold font-poppins">
										{link.title}
									</Link>
								))}
							</ul>
						</motion.div>
					)}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
