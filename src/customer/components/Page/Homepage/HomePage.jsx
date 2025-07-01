import MainCarousel from "../../HomeCrousel/MainCrousel";
import HomeSectionCrousel from "../../HomeSectionCoursel/HomeSectionCoursel";
import { CoatData } from "../../Data/CoatData";
import Footer from "../../Footer/Footer";
const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
            <HomeSectionCrousel data={CoatData}/>
            <HomeSectionCrousel data={CoatData}/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};
export default HomePage;