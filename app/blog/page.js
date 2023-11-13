import Image from "next/image";
import { getPosts } from "../services/services";
import { PortableText } from "@portabletext/react";

export default async function Blog() {
  const posts = await getPosts();
  return (
    <main className="pb-32">
      <div className=" relative">
        <h1 className=" textStroke font-ephesis absolute z-10 left-1/2 -translate-x-1/2 top-4 text-9xl text-white  ">
          Blog
        </h1>
        <Image
          className="w-full opacity-90 h-[300px] rounded border-t-2 border-black"
          alt="bg"
          unoptimized={true}
          src={"/assets/home/bg3.png"}
          width={1000}
          height={1000}
        />
      </div>

    
      <div className="grid grid-cols-2 gap-10 mt-10 px-10">
              {posts.map((post, index) => (
                <article key={index} className="text-center">
                  <Image
                    className="w-1/2 mx-auto opacity-90 h-[200px] rounded"
                    alt={post.title}
                    unoptimized={true}
                    src={post.imageUrl}
                    width={1000}
                    height={1000}
                  />
                  <div className="flex flex-col gap-6 mt-4">
                    <p className="text-yellow-700 text-sm cursive">
                      {post.category}
                    </p>
                    <h1 className="font-bold">{post.title}</h1>
                    <p className="text-gray-400 text-sm italic">hace 1 hora</p>

                    <div className="w-8/12 mx-auto">
                    <PortableText value={post.description} />
                    </div>
                  </div>
                </article>
              ))}
            </div>

    </main>
  );
}
