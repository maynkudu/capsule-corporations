import Image from "next/image";
import { FollowerPointerCard } from "./follower-pointer-card";

const contents = [
    {
        slug: "launch-of-capsd",
        author: "Maynkudu",
        date: "28th March, 2026",
        title: "Capsule launches CapsD",
        description: "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
        image: "/demo/thumbnail.png",
    },
    {
        slug: "episode-now-live",
        author: "Maynkudu",
        date: "30th March, 2026",
        title: "Episode is Now Live",
        description: "Check out the latest episode of our series! We dive deep into amazing content that will blow your mind.",
        image: "/demo/thumbnail2.png",
    },
];

export default function NewPage() {
    return (
        <div className="flex flex-col gap-4 p-10">
            <span className="text-7xl font-poppins">What&apos;s New!</span>
            <div className="flex gap-5 border-t-2 border-t-white/40 py-5">
                {contents.map((blog, idx) => (
                    <FollowerPointerCard key={idx} className="w-[30vw] hover:-translate-y-2 transition-all duration-500 ease-in-out">
                        <div className="group relative flex flex-col gap-5 h-max w-full overflow-hidden rounded-2xl transition duration-200 hover:shadow-xl">
                            <div className="relative  h-[60vh] w-full overflow-hidden rounded-lg bg-white/30">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="transform object-cover group-hover:scale-95 group-hover:rounded-2xl hover:blur-2xl transition-all duration-500 ease-in-out"
                                />
                            </div>
                            <div className="font-poppins text-white">
                                <div className="flex gap-3 text-xs">
                                    <span className="px-2 bg-white text-black rounded-full">{blog.author}</span>
                                    <span className="px-2 bg-white text-black rounded-full">{blog.date}</span>
                                </div>
                                <h2 className="my-4 font-medium text-2xl">{blog.title}</h2>
                            </div>
                        </div>
                    </FollowerPointerCard>
                ))}
            </div>
        </div>
    );
}
