import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";
import Craftitem from "../../Component/Craftitem/Craftitem";
import Craftcategory from "../../Component/Craftcategory/Craftcategory";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>prakritik-shongi-home</title>
            </Helmet>
            <Banner></Banner>
            <Craftitem></Craftitem>
            <Craftcategory></Craftcategory>
        </div>
    );
};

export default Home;