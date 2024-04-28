import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";
import Craftitem from "../../Component/Craftitem/Craftitem";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>prakritik-shongi-home</title>
            </Helmet>
            <Banner></Banner>
            <Craftitem></Craftitem>
        </div>
    );
};

export default Home;