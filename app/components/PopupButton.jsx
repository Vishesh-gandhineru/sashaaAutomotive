import RightIcon from "./rightIcon"
import { CloseCircleIcon } from "@sanity/icons";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose
  } from "./dialog";
import Image from "next/image";
import MailerLiteForm from "./EnquryForm/mailerLite";

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
               <MailerLiteForm />
            </DialogContent>
        </Dialog>
    );
}
    





