import type { NextPage } from "next";
import Image from "next/image";
import "remixicon/fonts/remixicon.css";
import SEO from "../components/SEO";

const Home: NextPage = () => {
	return (
		<div>
			<SEO />
			<div className="overflow-hidden h-screen">
				<div className="top-64 absolute left-1/2 -translate-x-1/2 w-screen">
					<Image
						src={"/main.png"}
						width={900}
						height={500}
						alt={"Main"}
						className={"mx-auto rounded-4xl grayscale blur-sm z-0"}
					/>
				</div>
				<div className="mt-32 text-center relative">
					<Image
						src="/logo.png"
						alt="logo"
						width={80}
						height={80}
            quality={10}
						className="mx-auto rounded-md"
					/>
					<h3 className="text-white text-6xl font-poppins font-black uppercase mt-4 ">
						This is <span className="text-[#D92B27]">Vam</span>Vam Tech
					</h3>
					<div className=" mt-8 flex flex-row justify-center items-center space-x-4">
						<button className="bg-[#fff] text-[#242424] px-4 py-3 border-l-8 border-[#D92B27] rounded-lg text-[14px] font-[700]">
						<span className="text-[20px]">🥳</span> &nbsp;Follow our community
						</button>
						<button className="bg-[#D92B27] text-white px-4 py-2  rounded-lg text-[14px] font-[600] flex flex-row justify-center items-center gap-x-2">
							<span className="text-[20px]">☕️</span> &nbsp;Buy me coffee
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
