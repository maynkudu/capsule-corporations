"use client";

const HeroPage = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-white/40 z-0">
                {/* You can replace this with an image or SVG */}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center min-h-screen p-10 font-poppins">
                <div className="ml-5">
                    <span className="text-7xl font-light">
                        Making <span className="font-medium">Beautiful</span> <br />
                        Websites for You
                    </span>
                    <div className="mt-6">
                        <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
                            Explore More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPage;
