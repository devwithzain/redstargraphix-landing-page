"use client";
import { motion } from "framer-motion";
import { heroVariants, heroVariants1 } from "@constants/motion";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
const Contact: React.FC = () => (
	<>
		<section
			id="contact"
			className="w-full py-16">
			<h1 className="lg:text-[60px] text-[40px] text-white mb-6 font-bold">
				Contact Us
			</h1>
			<div className="w-full flex md:flex-row flex-col overflow-hidden gap-8">
				<motion.div
					className={`flex-1  flex-col`}
					variants={heroVariants}
					initial="hidden"
					whileInView="show">
					<div className="flex text-white flex-col gap-y-10">
						<h1 className="text-[20px] leading-10">
							{" "}
							Take the first step towards transforming your branding with our
							expert design services.
							<br /> Don&apos;t wait! Let&apos;s create something amazing
							together.
						</h1>
						<div className="flex gap-x-8 items-center bg-secondry p-4 rounded-lg">
							<MdOutlineMailOutline className="w-[35px] h-[35px]" />
							<h1 className="lg:text-[20px] text-[14px] font-bold ">
								Email: RedStarGraphixLLC@gmail.com
							</h1>
						</div>
						<div className="flex gap-x-8 items-center bg-secondry p-4 rounded-lg">
							<AiOutlinePhone className="w-[35px] h-[35px]" />
							<h1 className="lg:text-[20px] text-[14px] font-bold ">
								Phone Number: +18329224322
							</h1>
						</div>
						<div className="flex gap-x-8 items-center bg-secondry p-4 rounded-lg">
							<Link
								href={"https://www.facebook.com/Redgraphic.janet"}
								target="_blank"
								className="flex items-center gap-x-8">
								<CiFacebook className="w-[35px] h-[35px]" />
								<h1 className="lg:text-[20px] text-[14px] font-bold ">
									Facebook: Redgraphic.janet
								</h1>
							</Link>
						</div>
						<div className="flex gap-x-8 items-center bg-secondry p-4 rounded-lg">
							<Link
								href={"https://www.instagram.com/redstar_graphix"}
								target="_blank"
								className="flex items-center gap-x-8">
								<BsInstagram className="w-[35px] h-[35px]" />
								<h1 className="lg:text-[20px] text-[14px] font-bold ">
									Instagram: redstar_graphix
								</h1>
							</Link>
						</div>
					</div>
				</motion.div>
				<motion.div
					className="flex items-center justify-center flex-1 md:my-0 my-10"
					variants={heroVariants1}
					initial="hidden"
					whileInView="show">
					<form
						action="https://formspree.io/f/meqbagzr"
						method="POST"
						className="flex flex-1 flex-col gap-[20px]">
						<input
							type="text"
							required
							autoComplete="off"
							name="name"
							className="p-[20px] bg-transparent  outline-none text-white lg:text-[20px] text-[10px] rounded-lg font-bold"
							placeholder="Name"
							style={{ border: "6px solid #200036" }}
						/>
						<input
							type="email"
							required
							autoComplete="off"
							name="email"
							className="p-[20px] bg-transparent border-none outline-none text-white lg:text-[20px] text-[10px] rounded-lg font-bold"
							style={{ border: "6px solid #200036" }}
							placeholder="Email"
						/>
						<input
							type="number"
							required
							autoComplete="off"
							name="phone number"
							className="p-[20px] bg-transparent border-none outline-none text-white lg:text-[20px] text-[10px] rounded-lg font-bold"
							style={{ border: "6px solid #200036" }}
							placeholder="Phone Number"
						/>
						<textarea
							placeholder="Message"
							name="message"
							cols={30}
							rows={6}
							className="p-[20px] bg-transparent border-none outline-none text-white lg:text-[20px] text-[10px] rounded-lg font-bold"
							style={{ border: "6px solid #200036" }}></textarea>
						<input
							type="submit"
							className="mt-8 px-6 py-3 hover:bg-[#11001C] bg-secondry cursor-pointer w-[max-content] border-none outline-none text-white lg:text-[30px] text-[20px] rounded-sm font-semibold"
						/>
					</form>
				</motion.div>
			</div>
		</section>
	</>
);

export default Contact;
