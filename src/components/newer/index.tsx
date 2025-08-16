import { FollowerPointerCard } from "./follower-pointer-card"

export default function NewPage() {
    return (
        <div className="flex gap-4">
            <FollowerPointerCard
                title={
                    <TitleComponent
                        title={blogContent.author}
                        avatar={blogContent.authorAvatar}
                    />
                }
            >
                <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
                        <img
                            src={blogContent.image}
                            alt="thumbnail"
                            className="h-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="my-4 text-lg font-bold text-zinc-700">
                            {blogContent.title}
                        </h2>
                        <h2 className="my-4 text-sm font-normal text-zinc-500">
                            {blogContent.description}
                        </h2>
                        <div className="mt-10 flex flex-row items-center justify-between">
                            <span className="text-sm text-gray-500">{blogContent.date}</span>
                            <div className="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white">
                                Read More
                            </div>
                        </div>
                    </div>
                </div>
            </FollowerPointerCard>

            {/* <FollowerPointerCard className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Card Two</h2>
                    <p className="text-gray-300">
                        This second card works completely independently. The blob pointer uses GSAP for buttery smooth animations.
                    </p>
                    <div className="w-full h-32 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-white/70">Another Interactive Area</span>
                    </div>
                </div>
            </FollowerPointerCard>

            <FollowerPointerCard className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
                <div className="text-center space-y-6">
                    <h2 className="text-3xl font-semibold text-white">Large Interactive Area</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        This larger card demonstrates how the blob pointer maintains smooth performance across different sized
                        containers. The morphing blob effect and GSAP animations create a fluid, organic feel.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mt-8">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="h-24 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-lg flex items-center justify-center"
                            >
                                <span className="text-white/70">Zone {i}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </FollowerPointerCard> */}
        </div>
    )
}


const blogContent = {
    slug: "launch-of-capsd",
    author: "Maynkudu",
    date: "28th March, 2023",
    title: "Capsule launches CapsD",
    description:
        "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    image: "/demo/thumbnail.png",
    authorAvatar: "/manu.png",
};

const TitleComponent = ({
    title,
    avatar,
}: {
    title: string;
    avatar: string;
}) => (
    <div className="flex items-center space-x-2">
        <img
            src={avatar}
            height="20"
            width="20"
            alt="thumbnail"
            className="rounded-full border-2 border-white"
        />
        <p>{title}</p>
    </div>
);