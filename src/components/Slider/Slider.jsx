import React,{ useRef } from "react";

const categories=[
    {name: "Phones", icon: "Images/Phones.png"},
    {name: "Smart Watches", icon: "Images/Smart Watches.png"},
    {name: "Cameras", icon: "Images/Cameras.png"},
    {name: "Headphones", icon: "Images/Headphones.png"},
    {name: "Computers", icon: "Images/Computers.png"},
    {name: "Gaming", icon: "Images/Gaming.png"},
    {name: "Phones", icon: "Images/Phones.png"},
    {name: "Smart Watches", icon: "Images/Smart Watches.png"},
    {name: "Cameras", icon: "Images/Cameras.png"},
    {name: "Headphones", icon: "Images/Headphones.png"},
    {name: "Computers", icon: "Images/Computers.png"},
    {name: "Gaming", icon: "Images/Gaming.png"},
];

const Slider = () =>{
    const scrollRef=useRef();

    const scroll = (direction) =>{
        const {current} =scrollRef;
        if(direction==="left"){
            current.scrollBy({left:-200, behaviour: "smooth"});
        }
        else
        {
            current.scrollBy({left:200, behaviour: "smooth"});
        }
    };

return(
    <div className="p-4 relative">
        <div className="text-xl font-semibold">Browse by Category</div>

        <button onClick={() => scroll("left")} 
            className="absolute left-2 top-16 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
            >
            <img src="Images/Arrow.png"></img>
        </button>
        <button onClick={() => scroll("right")} 
            className="absolute right-2 top-16 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
            >
            <img src="Images/ArrowR.png"></img>
        </button>

        <div 
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 p-4 ml-10 scrollbar-hide scroll-smooth px-8"
        >
            {categories.map ((category, index) =>(
                <div
                    key={index}
                    className="flex flex-col items-center justify-center 
                    bg-gray-100 hover:bg-gray-200 p-4 rounded-md 
                    min-w-[120px] shadow-sm transition duration-200"
                >
                    <img src={category.icon} alt={category.name} className="w-8 h-8 mb-2"></img>
                </div>
            ))}

        </div>
    </div>
)
};  


export default Slider;