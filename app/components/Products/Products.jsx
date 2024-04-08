"use client"

import { useState , useEffect } from "react";
import './Product.css'
import { Switch } from "../switch";
import SparePartsSection from "./SparePartsSection";
import RightIcon from "../rightIcon";
import TuningSection from "./TuningSection";
import PopupButton from "../PopupButton";


export default function Products() {

    const [ProductType, setProductType] = useState("")
    const [toggle, setToggle] = useState(false)

    const handelChange = (e) => {
        setToggle(prev => !prev)
    }
return (
    <section id="product" className="max-w-[1300px] md:p-8 m-auto p-5 mb-10 mt-5">
        <div className="flex justify-center items-center gap-5 text-[24px]">
        <h5>Spare Parts</h5>
        <Switch onCheckedChange = {handelChange}
 />
        <h5>Tuning</h5>

        </div>
        
        {toggle ? (
            <div>
                <TuningSection />
            </div>
        ) : (
            <div>
                <SparePartsSection />                
            </div>
        )}
<div className="flex justify-center items-center">
                  <PopupButton />
</div>
    </section>
);
}