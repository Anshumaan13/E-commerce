function BannersList(){
    return(
        <div className="bg-white py-10 px-5">
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6">
                <div className="p-6 rounded-lg shadow-md flex flex-col
                items-center text-center">
                    <img src="Images/Group 1.png" ></img>
                    <h2 className="text-lg font-semibold mb-2"> Popular Products </h2>
                    <p className="text-sm mb-4">iPad combines a magnificent 
                        10.2-inch Retina display, 
                        incredible performance, 
                        multitasking and ease of use.</p>
                    <button className="border border-black rounded-md px-4 py-2 font-medium 
                    hover:bg-black hover:text-white transition"> Shop Now</button>
                </div>
                <div className="p-6 rounded-lg shadow-md flex flex-col
                items-center text-center">
                    <img src="Images/image 64.png" className=""></img>
                    <h2 className="text-lg font-semibold mb-2 mt-14"> IPad Pro </h2>
                    <p className="text-sm mb-4">iPad combines a magnificent 
                        10.2-inch Retina display, 
                        incredible performance, 
                        multitasking and ease of use.</p>
                    <button className="border border-black rounded-md px-4 py-2 font-medium 
                    hover:bg-black hover:text-white transition"> Shop Now</button>
                    
                </div>
                <div className="p-6 rounded-lg shadow-md flex flex-col
                items-center text-center">
                    <img src="Images/image 41.png" className=""></img>
                    <h2 className="text-lg font-semibold mb-2 mt-14"> Samsung Galaxy </h2>
                    <p className="text-sm mb-4">iPad combines a magnificent 
                        10.2-inch Retina display, 
                        incredible performance, 
                        multitasking and ease of use.</p>
                    <button className="border border-black rounded-md px-4 py-2 font-medium 
                    hover:bg-black hover:text-white transition"> Shop Now</button>
                    
                </div>
                <div className="p-6 rounded-lg shadow-md flex flex-col
                items-center text-center">
                    <img src="Images/Macbook 1.png" className=""></img>
                    <h2 className="text-lg font-semibold mb-2 mt-11"> MacBook Pro </h2>
                    <p className="text-sm mb-4">iPad combines a magnificent 
                        10.2-inch Retina display, 
                        incredible performance, 
                        multitasking and ease of use.</p>
                    <button className="border border-black rounded-md px-4 py-2 font-medium 
                    hover:bg-black hover:text-white transition"> Shop Now</button>
                    
                </div>
            </div>

        </div>
    )
}

export default BannersList
