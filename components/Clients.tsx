"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { clientsItem } from "@constants";
import { clientVariants } from "@constants/motion";

const Clients = () => {
	return (
		<>
			<section
				id="clients"
				className="w-full py-16">
				<h1 className="lg:text-[60px] text-[40px] text-white mb-6 font-bold">
					Our Happy Clients
				</h1>
				<div className="w-full grid grid-cols-1 gap-10 md:grid-cols-3 lp:grid-cols-3 lg:grid-cols-3 my-12">
					{clientsItem.map((item) => (
						<motion.div
							key={item.id}
							className="p-8 flex flex-col gap-y-6 lg:gap-y-20 bg-secondry rounded-lg "
							variants={clientVariants}
							initial="hidden"
							whileInView="show">
							<Image
								src={item.img}
								alt={item.name}
								className="w-[80px]"
							/>
							<div>
								<h1 className="text-[20px] text-white">{item.title}</h1>
							</div>
							<h1 className="text-[22px] text-white">{item.name}</h1>
						</motion.div>
					))}
				</div>
			</section>
		</>
	);
};

export default Clients;
