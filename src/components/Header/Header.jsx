import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";


function Header({toggleWishlistPopup}){
    return(
        <div className="flex mt-2">
            <div className="p-3 ml-32">
                <img src="Images/Logo.jpg"></img>
            </div>
            <Navigation/>
            <SearchBar toggleWishlistPopup={toggleWishlistPopup}/>
            
        </div>
    );
}

export default Header;


// import Navigation from "../Navigation/Navigation";
// import SearchBar from "../SearchBar/SearchBar";


// function Header(){
//     return(
//         <div className="flex mt-2">
//             <div className="p-3 ml-32">
//                 <img src="Images/Logo.jpg"></img>
//             </div>
//             <Navigation/>
//             <SearchBar/>
            
//         </div>
//     );
// }

// export default Header;