function Banner(){
    return(
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
            
            <div className="min-h-screen flex items-center justify-center text-white 
            z-10">
                <div className="space-y-4">
                    <h1 className="text-2xl font-light tracking-wide">Pro.Beyond.</h1>
                    <h2 className="text-6xl font-light">IPhone 14 <b>PRO</b></h2>
                    <p className="text-m max-w-md mx-auto">Created to change everything for the better. For everyone.</p>
                    <button className="mt-4 px-6 py-2 bg-white bg-opacity-20 
                    border border-white rounded hover:bg-opacity-30 transition">Shop Now</button>
               </div>
               <div>
                <img src="Images/Iphone Image.png" className="ml-16 mb-0"></img>
               </div>
            </div>
        </div>
    );
}
export default Banner;