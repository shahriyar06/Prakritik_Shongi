import { Link } from "react-router-dom";
import { IoStarHalfSharp } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaPen } from "react-icons/fa6";


const MyCraftinfo = () => {
    return (
        <div>
            <div className="bg-[#efeae3] rounded-3xl w-full">
                <div className="card card-side ">
                    <figure className="pl-3"><img src="https://i.ibb.co/fqMC5Ky/woodenlamp.jpg" className="rounded-3xl h-56 w-72" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold">Wooden Lamp</h2>
                        <h2 className="text-lg font-medium">Wooden Home Decor</h2>
                        <h1 className="text-lg">Price : 3000 tk</h1>
                        <div className="flex justify-between text-lg">
                            <h1>In stock</h1>
                            <h2 className="flex items-center gap-1">5 <IoStarHalfSharp className="text-[#d3a873] text-xl" /></h2>
                        </div>
                        <div className="card-actions justify-end mt-2">
                            <Link className="btn text-lg bg-[#cec1ab] text-[#FFFFFF] hover:text-gray-700">View Details</Link>
                            {/* to={`/craftdetails/${craft._id}`} */}
                            <div className="">
                                <Link className="btn text-xl bg-[#947351] text-[#FFFFFF] mr-2 hover:text-gray-700"><FaPen /></Link>
                                <Link className="btn text-xl  bg-[#947251b6] text-[#FFFFFF] hover:text-gray-700"><RiDeleteBinFill /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCraftinfo;