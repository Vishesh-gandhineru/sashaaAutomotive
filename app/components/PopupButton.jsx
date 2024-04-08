import RightIcon from "./rightIcon"
import { CloseCircleIcon } from "@sanity/icons";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose
  } from "./dialog";
import Image from "next/image";

export default function PopupButton({buttonText = "Enquire Now" , className ,}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                 <div className={`flex items-center hover:scale-[1.1] transition-all ease-in-out ${className}`}>
                    <button className="text-white px-6 py-3 border-[2px] border-r-0">
                        {buttonText}
                    </button>
                    <span className=" bg-white h-[3.25rem] flex justify-center items-center py-3 px-4 text-[20px]">
                        <RightIcon />
                    </span>
                </div>
                
            </DialogTrigger>
            
            <DialogContent className="max-w-[85%] max-h-[80%] sm:max-h-fit overflow-y-scroll sm:overflow-hidden sm:max-w-[95%] md:max-w-[90%] lg:max-w-[70%] translate-x-[-50%] m-auto border-none bg-[#1B1B1B] p-[0px]">
            <DialogClose asChild>
                <CloseCircleIcon className="w-[35px] h-[35px] absolute left-[85%]  md:left-[95%] top-[3%] z-50 cursor-pointer hover:scale-[1.1] transition-all"/>
            </DialogClose>
                <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-[80%] p-5 mx-auto md:p-10 py-[50px]">
                        <form className="rounded flex flex-col gap-8">
                            <div className="mb-4">
                                <input
                                    className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="mb-4 flex flex-col sm:flex-row gap-8">
                                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                                    <input
                                        className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="mobile"
                                        type="text"
                                        placeholder="Mobile Number"
                                    />
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <input
                                        className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Email Address"
                                    />
                                </div>
                            </div>
                            <div className="mb-4 flex flex-col sm:flex-row gap-8">
                                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                                    <input
                                        className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="vehicle-brand"
                                        type="text"
                                        placeholder="Vehicle Brand"
                                    />
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <input
                                        className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="vin"
                                        type="text"
                                        placeholder="VIN/Chassis/Engine No."
                                    />
                                </div>
                            </div>
                            <div className="mb-4 flex flex-col sm:flex-row gap-8">
                                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                                    <input
                                        className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="interested-product"
                                        type="text"
                                        placeholder="Interested Product"
                                    />
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <input
                                        className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="location"
                                        type="text"
                                        placeholder="Location"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-start">
                                <div className="inline-flex justify-center items-center hover:scale-[1.1] transition-all ease-in-out">
                                    <button className="text-white px-12 py-3 border-[2px] border-r-0">
                                        Submit
                                    </button>
                                    <span className=" bg-white h-full flex justify-center items-center py-[21px] px-4 text-[20px]">
                                        <RightIcon />
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="relative w-full sm:w-[50%] h-[300px] sm:h-full hidden sm:block">
                        <Image fill src="/popupformImage.png" className="object-cover" />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
    





