import Image from "next/image";

export default async function Contact() {

  return (
    <main className="pb-32">
      <div className=" relative">
        <h1 className=" textStroke font-ephesis absolute z-10 left-1/2 -translate-x-1/2 top-4 text-9xl text-white  ">
          Contacto
        </h1>
        <Image
          className="w-full opacity-90 h-[80vh] rounded border-t-2 border-black"
          alt="bg"
          unoptimized={true}
          src={"/assets/home/bg3.png"}
          width={1000}
          height={1000}
        />
        <div className="w-1/4 text-center flex flex-col gap-4 bg-white border border-black shadow-gray-400 shadow-sm  z-10 p-6 absolute mt-14 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-xl">
          
          <h1 className=""> <strong>Telefono:</strong> +34 661 67 89 76</h1>
          <h1 className=""> <strong>Email:</strong> maktup.i@gmail.com</h1>
          <div className="flex justify-center gap-4 mt-4">
                <Image
                  className="w-8 rounded"
                  alt=""
                  unoptimized={true}
                  src={"/assets/social/fb.png"}
                  width={1000}
                  height={1000}
                />
                <Image
                  className="w-8 rounded"
                  alt=""
                  unoptimized={true}
                  src={"/assets/social/ig.png"}
                  width={1000}
                  height={1000}
                />
                <Image
                  className="w-8 rounded"
                  alt=""
                  unoptimized={true}
                  src={"/assets/social/tw.png"}
                  width={1000}
                  height={1000}
                />
              </div>
        </div>
      </div>



    </main>
  );
}
