import Image from "next/image";
import { getCatalogue } from "../services/services";

export default async function Catalogo() {
  const catalogue = await getCatalogue();
  return (
    <main className="pb-32">
      <div className=" relative">
        <h1 className=" textStroke font-ephesis absolute z-10 left-1/2 -translate-x-1/2 top-4 text-9xl text-white  ">
          Catálogo
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

      <div className="grid grid-cols-2 mt-4 gap-6 p-10">
        {[...catalogue.slice(-1), ...catalogue.slice(0, -2)].map((item, index) => (
          <div key={index}>
            <Image
              className="w-full opacity-90 h-[400px] rounded"
              alt=""
              unoptimized={true}
              src={item.imageUrl}
              width={1000}
              height={1000}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
