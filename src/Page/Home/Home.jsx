import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";
import Craftitem from "../../Component/Craftitem/Craftitem";
import Craftcategory from "../../Component/Craftcategory/Craftcategory";
import Newsletter from "../../Component/Newslatter/Newsletter";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>prakritik-shongi-home</title>
            </Helmet>
            <Banner></Banner>
            <Craftitem></Craftitem>
            <Craftcategory></Craftcategory>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;