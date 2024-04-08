"use client"

import { useState, useEffect } from "react";
import RightIcon from "../rightIcon";
import MailerLite from "@mailerlite/mailerlite-nodejs";
import Image from "next/image";
import axios from "axios";



export default function MailerLiteForm() {

    const [name , setName] = useState("");
    const [mobile , setMobile] = useState("");
    const [email , setEmail] = useState("");
    const [vehicleBrand , setVehicleBrand] = useState("");
    const [vin , setVin] = useState("");
    const [interestedProduct , setInterestedProduct] = useState("");
    const [location , setLocation] = useState("");
    const [submittedSuccess , setSubmittedSuccess] = useState(false);
    const [submittedError , setSubmittedError] = useState(false);
    


    const handleChange = (e) => {
        const {name , value} = e.target;

   
        switch(name) {
            case "name":
                setName(value);
                break;
            case "mobile":
                setMobile(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "vehicleBrand":
                setVehicleBrand(value);
                break;
            case "vin":
                setVin(value);
                break;
            case "interestedProduct":
                setInterestedProduct(value);
                break;
            case "location":
                setLocation(value);
                break;
            default:
                break;
        }       
        
    }
    const apikey = process.env.NEXT_PUBLIC_MAILERLITE_API_KEY;
    const mailerlite = new MailerLite({
        api_key : apikey,        
    });

    const addSubscriberAipUrl = "https://connect.mailerlite.com/api/subscribers";
    
    const handleSubmit =  (e) => {
        const todaysDate = new Date();
        e.preventDefault();
        const params = {
            email: email,
            fields: {
              name: name,
              phone: mobile,
              interested_product: interestedProduct,
                location: location,
                vehicle_brand: vehicleBrand,
                vin: vin,
            },
            groups: ["118027326539695293"],
            status: "active", // possible statuses: active, unsubscribed, unconfirmed, bounced or junk.
          };
 
          mailerlite.subscribers.createOrUpdate(params)
  .then(response => {
    if (response.status === 200) {
        setSubmittedSuccess(true);
    }
  })
  .catch(error => {
    if (error.response) console.log(error.response.data);
  });
    }
    

    

    return (
        <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-[80%] p-5 mx-auto md:p-10 py-[50px]">
                <form className="rounded flex flex-col gap-8" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            value={name}
                            placeholder="Full Name"
                            onChange={handleChange}
                            name="name"
                            required
                        />
                    </div>
                    <div className="mb-4 flex flex-col sm:flex-row gap-8">
                        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                            <input
                                className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="mobile"
                                type="text"
                                value={mobile}
                                placeholder="Mobile Number"
                                onChange={handleChange}
                                name="mobile"
                                required
                            />
                        </div>
                        <div className="w-full sm:w-1/2">
                            <input
                                className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                value={email}
                                placeholder="Email Address"
                                onChange={handleChange}
                                name="email"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4 flex flex-col sm:flex-row gap-8">
                        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                            <input
                                className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="vehicle-brand"
                                type="text"
                                value={vehicleBrand}
                                placeholder="Vehicle Brand"
                                onChange={handleChange}
                                name="vehicleBrand"
                                required
                            />
                        </div>
                        <div className="w-full sm:w-1/2">
                            <input
                                className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="vin"
                                type="text"
                                value={vin}
                                placeholder="VIN/Chassis/Engine No."
                                onChange={handleChange}
                                name="vin"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4 flex flex-col sm:flex-row gap-8">
                        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                            <input
                                className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="interested-product"
                                type="text"
                                value={interestedProduct}
                                placeholder="Interested Product"
                                onChange={handleChange}
                                name="interestedProduct"
                                required
                            />
                        </div>
                        <div className="w-full sm:w-1/2">
                            <input
                                className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="location"
                                type="text"
                                value={location}
                                placeholder="Location"
                                onChange={handleChange}
                                name="location"
                                required
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
    )
}