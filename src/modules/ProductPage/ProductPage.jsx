import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductList2 from "../../components/ProductCard/ProductList2";

function ProductPage(){
    return(

        <div>
            <div>
                <Breadcrumbs/>
                <ProductList2/>
                <Footer></Footer>
            </div>            
        </div>
        
    );
}

export default ProductPage;
