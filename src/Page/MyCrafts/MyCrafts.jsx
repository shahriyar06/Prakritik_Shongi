import { useLoaderData } from "react-router-dom";
import MyCraftinfo from "../../Component/MyCraftinfo/MyCraftinfo";
import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";


const MyCrafts = () => {
    const myCrafts = useLoaderData();
    const { user } = useContext(AuthContext)
    const { email } = user;
    const allmyCrafts = myCrafts.filter(item => item.email === email);
    return (
        <div className="my-10">
            <div className="w-11/12 mx-auto grid grid-cols-2 gap-4">
                {
                    allmyCrafts.map(myallcrafts => <MyCraftinfo myallcrafts={myallcrafts} key={myallcrafts._id}></MyCraftinfo>)
                }
            </div>
        </div>
    );
};

export default MyCrafts;