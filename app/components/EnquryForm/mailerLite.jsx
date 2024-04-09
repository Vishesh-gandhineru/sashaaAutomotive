"use client"

import { useState, useEffect } from "react";
import RightIcon from "../rightIcon";
import { Loader } from 'lucide-react';

import Image from "next/image";
import { useFormik } from "formik";
import { inquireSchemas } from "@/app/schemas";
import axios from "axios";



export default function MailerLiteForm() {

    const [submittedSuccess , setSubmittedSuccess] = useState(false);
    const [submittedError , setSubmittedError] = useState(false);
    const [loaded , setLoaded] = useState(false);
    
    const apikey = process.env.NEXT_PUBLIC_MAILERLITE_API_KEY;
    const baseAPIURL = "https://connect.mailerlite.com/";


    const {values, errors, touched, handleChange , handleSubmit} = useFormik({
        initialValues: {
            name: "",
            mobile: "",
            email: "",
            vehicleBrand: "",
            vin: "",
            interestedProduct: "",
            location: "",
        },
        validationSchema: inquireSchemas,

        onSubmit: (values, action) => {
            setLoaded(true);
            const params = {
                email: values.email,
                fields: {
                  name: values.name,
                  phone: values.mobile,
                  interested_product: values.interestedProduct,
                    location: values.location,
                    vehicle_brand: values.vehicleBrand,
                    vin: values.vin,
                },
                groups: ["118108972678907288"],
                status: "active", // possible statuses: active, unsubscribed, unconfirmed, bounced or junk.
              };

              const config = {                
                headers: {
                "Authorization": `Bearer ${apikey}`,
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
              };

      axios.post(`${baseAPIURL}api/subscribers`, params, config)
      .then(response => {          
        if (response.status === 200 || response.status === 201) {
            setSubmittedSuccess(true);
            setLoaded(false);
        }
      })
      .catch(error => {
        if (error.response) console.log(error.response.data);
        if (error.response === 400) {
            setSubmittedError(true);
        }
    
      });

      action.resetForm();
        },

        onChange: (event) => {
            const {name , value} = event.target;
            formik.setFieldValue(name , value);
        }
    })

    
  
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-[80%] p-5 mx-auto md:p-10 py-[50px]">
                <form className="rounded flex flex-col gap-5" onSubmit={handleSubmit} >
                    <div className="mb-4">
                        <input
                            className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            value={values.name}
                            placeholder="Full Name *"
                            onChange={handleChange}
                            name="name"
                            
                        />
                        {errors.name && touched.name ? <p className="form-error text-red-300 mt-2">{errors.name}</p> : null}
                    </div>
                    <div className="mb-4 flex flex-col sm:flex-row gap-8">
                        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                            <input
                                className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="mobile"
                                type="text"
                                value={values.mobile}
                                placeholder="Mobile Number *"
                                onChange={handleChange}
                                name="mobile"
                                
                            />
                            {errors.mobile && touched.mobile ? <p className="form-error text-red-300 mt-2">{errors.mobile}</p> : null}
                        </div>
                        <div className="w-full sm:w-1/2">
                            <input
                                className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                value={values.email}
                                placeholder="Email Address *"
                                onChange={handleChange}
                                name="email"
                                
                            />
                            {errors.email && touched.email ? <p className="form-error text-red-300 mt-2">{errors.email}</p> : null}
                        </div>
                    </div>
                    <div className="mb-4 flex flex-col sm:flex-row gap-8">
                        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                            <input
                                className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="vehicle-brand"
                                type="text"
                                value={values.vehicleBrand}
                                placeholder="Vehicle Brand *"
                                onChange={handleChange}
                                name="vehicleBrand"
                              
                            />
                            {errors.vehicleBrand && touched.vehicleBrand ? <p className="form-error text-red-300 mt-2">{errors.vehicleBrand}</p> : null}
                        </div>
                        <div className="w-full sm:w-1/2">
                            <input
                                className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="vin"
                                type="text"
                                value={values.vin}
                                placeholder="VIN/Chassis/Engine No. *"
                                onChange={handleChange}
                                name="vin"
                             
                            />
                            {errors.vin && touched.vin ? <p className="form-error text-red-300 mt-2">{errors.vin}</p> : null}
                        </div>
                    </div>
                    <div className="mb-4 flex flex-col sm:flex-row gap-8">
                        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                            <input
                                className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="interested-product"
                                type="text"
                                value={values.interestedProduct}
                                placeholder="Interested Product *"
                                onChange={handleChange}
                                name="interestedProduct"
                                
                            />
                            {errors.interestedProduct && touched.interestedProduct ? <p className="form-error text-red-300 mt-2">{errors.interestedProduct}</p> : null}
                        </div>
                        <div className="w-full sm:w-1/2">
                            <input
                                className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-white leading-tight focus:outline-none focus:shadow-outline"
                                id="location"
                                type="text"
                                value={values.location}
                                placeholder="Location *"
                                onChange={handleChange}
                                name="location"
                            />
                            {errors.location && touched.location ? <p className="form-error text-red-300 mt-2">{errors.location}</p> : null}
                        </div>
                    </div>
                    <div className="flex items-center justify-start">
                        <div className="inline-flex justify-center items-center hover:scale-[1.1] transition-all ease-in-out">
                            <button type="submit" className="text-white px-12 py-3 border-[2px] border-r-0">
                                Submit
                            </button>
                            { loaded ?<span className=" bg-white h-full flex justify-center items-center py-[14px] px-4 text-[20px]">
                            <Loader className="stroke-[#000] animate-spin"/>  
                            </span> : 
                            <span className=" bg-white h-full flex justify-center items-center py-[21px] px-4 text-[20px]">
                            <RightIcon />
                            </span> }
                            
                        </div>
                    </div>
                    {submittedSuccess ? <p className="text-green-500">Thank you for contacting Sashaa Automotive. Our team will get in touch with you at the earliest.</p> : null}
                </form>
            </div>
            <div className="relative w-full sm:w-[50%] h-[300px] sm:h-full hidden sm:block">
                <Image fill src="/popupformImage.png" className="object-cover" />
            </div>
        </div>
    )
}