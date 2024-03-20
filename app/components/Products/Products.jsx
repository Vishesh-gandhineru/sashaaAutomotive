"use client"

import { useState , useEffect } from "react";
import './Product.css'
import { Switch } from "../switch";
import SparePartsSection from "./SparePartsSection";
import RightIcon from "../rightIcon";


export default function Products() {

    const [ProductType, setProductType] = useState("")
    const [toggle, setToggle] = useState(false)

    const handelChange = (e) => {
        setToggle(prev => !prev)
    }
return (
    <section className="max-w-[1300px] m-auto p-5">
        <div className="flex justify-center items-center gap-5 text-[24px]">
        <h5>Spare Parts</h5>
        <Switch onCheckedChange = {handelChange}
 />
        <h5>Tuning</h5>

        </div>
        
        {toggle ? (
            <div>
                <h2>Tuning Layout</h2>
                <SparePartsSection />
            </div>
        ) : (
            <div>
                <SparePartsSection />
                
            </div>
        )}

<div className="flex justify-center items-center m-auto mb-5">
                    <button className="text-white px-6 py-3 border-[2px] border-r-0">
                    Enquire Now
                    </button>
                    <span className=" bg-white h-[52px] flex justify-center items-center py-3 px-4 text-[20px]">
                    <RightIcon />
                    </span>
                  </div>
    </section>
);
}