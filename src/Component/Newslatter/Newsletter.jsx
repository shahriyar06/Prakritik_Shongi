

const Newsletter = () => {
    return (
        <div className="mb-2 bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('https://i.ibb.co/wwpdsVP/wooden-sculpture.jpg')" }}>
            <div className="md:pt-40 pt-32" >
                <h2 className="text-5xl font-semibold text-center text-[#FFFFFF]">Sign up for our newsletter.</h2>
                <h1 className="text-xl font-medium text-center mt-5 text-[#FFFFFF]">Stay connected to Prakritik Shongi experts.</h1>
                <div className='lg:w-6/12 w-11/12 mx-auto mt-7 relative'>
                    <input type="text" placeholder="Enter your email address" className="rounded-full h-14 pl-6 text-lg w-full border border-[#947351]"/>
                    <button className="btn rounded-r-full h-14 md:w-36 w-24 btn-outline text-[#947351] hover:text-[#FFFFFF] hover:bg-[#947351] hover:border-[#947351] text-xl absolute right-0">Signup</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;