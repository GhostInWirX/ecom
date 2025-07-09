import MainCarousel from "../../HomeCrousel/MainCrousel";
import HomeSectionCrousel from "../../HomeSectionCoursel/HomeSectionCoursel";
import { CoatData } from "../../../../Data/CoatData";
import Footer from "../../Footer/Footer";
import ProductCard from "../../Products/Productcard";
import Product from "../../Products/Product";
import { data_set } from "../../../../Data/new_data";
import ProductDetails from "../../ProductDetails/ProductDetails";

const HomePage = () => {
    return (
        <div>
            {/* <MainCarousel /> */}
            {/* <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
            <HomeSectionCrousel data={CoatData} category={"Coat"}/>
            <HomeSectionCrousel data={CoatData} />
            </div>
            <div>
                <Product product={data_set}/>
            </div> */}
            <ProductDetails/>
            <div>
                    <Footer/>
            </div>
        </div>
    );
};
export default HomePage;