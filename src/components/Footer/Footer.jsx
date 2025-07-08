function Footer(){
    return(
        <div>
            <div className=" bg-black grid font-light grid-cols-3 text-white">
                <div className=" p-20">
                    <img src="Images/Logo (1).png"></img>
                    <p>We are a residential interior design firm 
                        located in Portland. Our boutique-studio offers more than</p>
                </div>
                <div className="p-20">
                    <h6><b>Services</b></h6>
                    <button className="mt-2 mb-2">Bonus program</button><br/>
                    <button className="mb-2">Gift cards</button><br/>
                    <button className="mb-2">Credit and payment</button><br/>
                    <button className="mb-2">Service contracts</button><br/>
                    <button className="mb-2">Non-cash account</button><br/>
                    <button>Payment</button><br/>
                </div>
                <div className="p-20">
                <h6><b>Assistance to the buyer</b></h6>
                    <button className="mt-2 mb-2">Find an order</button><br/>
                    <button className="mb-2">Terms of delivery</button><br/>
                    <button className="mb-2">Exchange and return of goods</button><br/>
                    <button className="mb-2">Guarantee</button><br/>
                    <button className="mb-2">Frequently asked questions</button><br/>
                    <button>Terms of use of the site</button><br/>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;