import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { getPosts, getCatalogue } from './services/services'

export default async function Home() {
  const posts = await getPosts();
  const catalogue = await getCatalogue();

  return (
    <main className="pb-32 ">
      <div className=" relative">
        <h1 className=" textStroke font-ephesis absolute z-10 left-1/2 -translate-x-1/2 top-4 text-9xl text-white  ">
          Maktub.i
        </h1>
        <div className="bg-white w-[400px] h-[400px]  z-10 p-6 absolute left-20 4xl:left-64 top-40 4xl:top-64 rounded-xl">
          <Image
            className="w-full h-5/6 rounded "
            alt="autora"
            unoptimized={true}
            src={"/assets/home/autora.png"}
            width={200}
            height={200}
          />
          <h1 className="font-bold">Nombre Completo</h1>
          <p>creadora del proyecto</p>
        </div>
        <div className="bg-white w-7/12 4xl:w-1/2 z-10 p-6 absolute right-10 4xl:right-40 top-64 4xl:top-96 rounded-xl">
          <h1 className="font-bold mb-2">Acerca de Maktub.i</h1>
          <p>
            El proyecto del blog de cuentos 'Maktub.i' nació en una tarde
            lluviosa de otoño, cuando un grupo de amigos amantes de la filosofía
            se reunieron en una pequeña cafetería. Discutían sobre cómo las
            antiguas enseñanzas de Platón todavía resuenan en la sociedad
            moderna. En particular, se sintieron cautivados por la alegoría de
            la caverna, que describe un mundo en el que las personas viven
            encadenadas en una cueva, observando sombras en la pared y creyendo
            que eso es toda la realidad. Inspirados por esta poderosa metáfora,
            decidieron crear un espacio digital donde las historias pudieran
            actuar como las 'sombras' de la caverna, reflejando aspectos de la
            realidad de maneras inesperadas y provocadoras. <br></br> <br></br>{" "}
            El objetivo del blog fue desafiar las percepciones y abrir las
            mentes a nuevas realidades, al igual que el prisionero de la caverna
            que se libera y descubre un mundo más allá de las sombras. Cada
            cuento en 'Sombras y Luces' se convierte en una herramienta para
            explorar temas como la libertad, la realidad y la ilusión, invitando
            a los lectores a cuestionar y a reflexionar.
          </p>
        </div>
        <Image
          className="w-full opacity-90 h-[90vh] 4xl:h-[85vh]   rounded border-t-2 border-black"
          alt="bg"
          unoptimized={true}
          src={"/assets/home/bg3.png"}
          width={1000}
          height={1000}
        />
      </div>
      <div className="mt-20 px-10">
        <div className="flex justify-between gap-20 ">
          <div className="w-2/3 text-center">
            <h1 className="border-b-2 border-black py-2 mb-4 ">
              Lo más destacado
            </h1>
            <div className="grid grid-cols-2 gap-10">
              {posts.map((post, index) => (
                <article key={index} className="text-center">
                  <Image
                    className="w-full opacity-90 h-[300px] rounded"
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

                    <PortableText value={post.description} />
                  </div>
                </article>
              ))}
            </div>
            <button className="w-1/2 mt-10 font-semibold border border-gray-400 py-2 px-6 rounded">Ver más</button>
          </div>
          <div className="w-1/3 text-center">
            <div>
              <h1 className="border-y border-gray-400 py-2">Catálogo</h1>
              <div className="grid grid-cols-2 mt-4 gap-3">
                {catalogue.map((item, index) => (
                  <div key={index}>
                    <Image
                      className="w-full object-cover opacity-90 h-[100px] rounded"
                      alt=""
                      unoptimized={true}
                      src={item.imageUrl}
                      width={1000}
                      height={1000}
                    />
                  </div>
                ))}
              </div>
              <button className="w-1/2  mx-auto mt-10 font-semibold border border-gray-400 py-2 px-6 rounded">Ver más</button>
            </div>
            <div>
              <h1 className="border-y border-gray-400 py-2 mt-20">Síguenos</h1>
              <div className="flex gap-6 justify-center mt-4">
                <Image
                  className="w-10 rounded"
                  alt=""
                  unoptimized={true}
                  src={"/assets/social/fb.png"}
                  width={1000}
                  height={1000}
                />
                <Image
                  className="w-10 rounded"
                  alt=""
                  unoptimized={true}
                  src={"/assets/social/ig.png"}
                  width={1000}
                  height={1000}
                />
                <Image
                  className="w-10 rounded"
                  alt=""
                  unoptimized={true}
                  src={"/assets/social/tw.png"}
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
