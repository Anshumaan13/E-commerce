function Products(){
    return(
        <div className="grid grid-cols-2">
            <div className="grid grid-rows-2">
                <div className="flex">
                    <div>
                        <img src="Images/PlayStation.png"/>
                    </div>
                    <div>
                        <h2 className=" text-4xl mt-20"> PlayStation 5</h2>
                        <p className="font-light max-w-sm mt-2 mx-auto">Incredibly powerful CPUs, GPUs,
                        and an SSD with integrated I/O will
                        redefine your PlayStation experience.</p>
                    </div>
                </div>
                <div className="grid flex-col grid-cols-2">
                    <div className="flex bg-gray-200">
                    <div>
                        <img src="Images/airpods.png" className="h-272px"/>
                    </div>
                    <div className="p-7">
                        <h2 className=" text-3xl mt-10"> Apple AirPods <b>Max</b></h2>
                        <p className="font-light text-sm max-w-sm mt-2 mx-auto ">Computational audio. Listen, it's powerful.</p>
                    </div>
                    </div>
                    <div className="bg-zinc-800 h-200">
                    <div className="flex text-white">
                    <div>
                        <img src="Images/visionpro.png" className="mt-10"/>
                    </div>
                    <div className="p-7">
                        <h2 className=" text-3xl mt-10"> Apple Vision <b>Pro</b></h2>
                        <p className="font-light text-sm max-w-sm mt-2 mx-auto ">An immerse way to experience 
                            entertainment.</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="flex ml-0 relative">
               <div >
                    <h2 className=" text-5xl mt-40 ml-14" id="mac"> Macbook <b>Air</b></h2>
                    <p className="font-light text-sm max-w-xs mt-2 mx-auto ml-10">The new 15‑inch MacBook Air 
                        makes room for more of what 
                        you love with a spacious Liquid Retina display.</p>
               </div>
               <div className="flex-1 ml-0">
                    <img src="Images/Body.png" className="w-full h-auto pt-12 pl-12"></img>
                    
                    <img src="Images/Vector.png" className="w-full"></img>
                </div> 
            </div>
        </div>          
    );
}

export default Products;