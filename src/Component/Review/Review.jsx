import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";

const Review = () => {
    return (
        <div className="mb-10">
            <div>
                <h1 className="md:text-6xl text-3xl font-bold text-center">People Review</h1>
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/gSY179M/person.jpg" className="rounded-xl h-44" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Emily Johnson</h2>
                        <p>I absolutely love the unique collection of jute and wood crafts on this website. The craftsmanship is exceptional!</p>
                        <div className="flex text-[#d3a873] text-xl mt-3 text-center">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/CJDM8L4/businesswoman.jpg" className="rounded-xl h-44" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Sophia</h2>
                        <p>The variety of kitchenware available here is impressive. I found exactly what I was looking for!</p>
                        <div className="flex text-[#d3a873] text-xl mt-3 text-center">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/V2gwSBX/mens.jpg" className="rounded-xl h-44" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">John</h2>
                        <p>I recently purchased a wooden lamp from this website, and it is fantastic! The quality exceeded my expectations.</p>
                        <div className="flex text-[#d3a873] text-xl mt-3 text-center">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfStroke />
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/DVRVYZt/man-isolated-showing-emotions-end-gestures.jpg" className="rounded-xl h-44" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Michael</h2>
                        <p>Great website! Easy navigation and seamless checkout process. Highly recommended for anyone interested in artisanal crafts.</p>
                        <div className="flex text-[#d3a873] text-xl mt-3 text-center">
                            <FaStar /><FaStar /><FaStar /><FaStar /><IoStarOutline />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;