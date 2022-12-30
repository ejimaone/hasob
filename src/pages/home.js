import React from "react";
import { PlayCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import hero from "../assets/images/hero.png";

const Home = () => {
	return (
		<div className="">
			<div className="flex h-screen flex-col lg:flex-row container mx-auto  justify-between max-h-fit">
				<div className=" w-full lg:w-1/2 items-start  flex flex-col justify-between">
					<div className="w-full  lg:mt-40 relative  mt-5 ">
						<h1 className="xl:text-[55px] lg:text-4xl text-[40px]  !leading-snug pt-5 tracking-tight font-medium	">
							Subscribe to FGN <br></br>Saving Bond
						</h1>

						<p className=" py-5 lg:w-[70%]">Loan and get paid with interest</p>

						<div className="flex flex-col lg:flex-row w-full lg:w-3/4 justify-between lg:mt-3 ">
							<button className="bg-[#3d6a19] p-4 lg:w-1/2  text-white rounded font-medium flex items-center justify-center gap-5">
								Get Started <ArrowRightIcon className="h-8 w-8 animate-pulse" />
							</button>

							<button className="  lg:w-1/2 text-sm  font-medium flex items-center justify-center gap-5">
								<PlayCircleIcon className="h-8 w-8" />
								See Video{" "}
							</button>
						</div>
					</div>
				</div>
				<div className=" lg:w-2/3  ">
					<img src={hero} alt="flower" className="h-full absolute right-0" />
				</div>
			</div>
		</div>
	);
};

export default Home;
