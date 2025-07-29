import React from "react";
import img1 from "./AnuTech.png";

function Navbar() {
  const [currentTab, setCurrentTab] = React.useState("Products");

  return (
    <div className="flex items-center justify-between p-5">
      <img src={img1} className="h-9" />

      <div className="flex items-center text-lg font-semibold space-x-10">
        <button className={`${currentTab === "Products"? "text-[#fad02c]" : "text-[#333333]"}`} onClick={() => setCurrentTab("Products")}>Products</button>
        <button className={`${currentTab === "Pricing"? "text-[#fad02c]" : "text-[#333333]"}`} onClick={() => setCurrentTab("Pricing")}>Pricing</button>
        <button className={`${currentTab === "Support"? "text-[#fad02c]" : "text-[#333333]"}`} onClick={() => setCurrentTab("Support")}>Support</button>
        <button className={`${currentTab === "faq"? "text-[#fad02c]" : "text-[#333333]"}`} onClick={() => setCurrentTab("faq")}>FAQs</button>
      </div>
      <button className="py-1 px-5 rounded bg-[#333333] text-white shadow font-semibold">Reach Us</button>
    </div>
  );
}

export default Navbar;
