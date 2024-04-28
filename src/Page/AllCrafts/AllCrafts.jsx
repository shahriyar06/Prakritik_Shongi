import { Link, useLoaderData } from "react-router-dom";


const AllCrafts = () => {
    const loadallcrafts = useLoaderData()

    return (
        <div className="m-10">
            <div>

            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-medium">
                            <th>No</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Subcategory</th>
                            <th>Price</th>
                            <th>stockStatus</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loadallcrafts.map((allCrafts, idx) => <tr key={allCrafts._id} className="text-lg">
                                <th>{idx+1}</th>
                                <td>{allCrafts.name}</td>
                                <td>{allCrafts.title}</td>
                                <td>{allCrafts.subcategory}</td>
                                <td>{allCrafts.price}</td>
                                <td>{allCrafts.stockStatus}</td>
                                <td><Link to={`/craftdetails/${allCrafts._id}`} className="btn lg:text-lg bg-[#cec1ab] text-[#FFFFFF]">View Details</Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCrafts;