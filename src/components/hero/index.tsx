"use client";

const HeroPage = () => {
    return (
        <div className="min-h-screen">
            {/* Background  */}
            <div></div>

            {/* Content  */}
            <div className="flex flex-col justify-center min-h-screen p-10 font-poppins">
                <div className="ml-5">
                    <span className="text-7xl font-light">
                        Making <span className="font-[400]">Beautiful</span> <br /> Websites
                        for You
                    </span>
                    <div>
                        <button>
                            Explore More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPage;
