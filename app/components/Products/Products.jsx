"use client"

import { useState , useEffect } from "react";
import './Product.css'
import { Switch } from "../switch";
import SparePartsSection from "./SparePartsSection";


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
                {/* Add your tuning layout code here */}
            </div>
        ) : (
            <div>
                <SparePartsSection />
            </div>
        )}
    </section>
);
}