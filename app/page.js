import { PortableText } from "@portabletext/react";
import { client } from "../sanity/lib/client";
import Image from "next/image";

async function getPosts() {
  const query = `*[_type == "post"]{
      title,
      category,
      description,
      "imageUrl": image.asset->url
    }`;
  const posts = await client.fetch(query, { next: { revalidate: 3600 }});
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="mt-10 pb-32">
      <div className=" relative">
       
        <h1 className=" textStroke font-ephesis absolute z-10 left-1/2 -translate-x-1/2 top-4 text-9xl text-white  ">
          Maktub.i
        </h1>
        <div className="bg-white w-[400px] h-[450px] z-10 p-6 absolute left-20 top-2/3 -translate-y-1/2 rounded-xl">
          <Image
            className="w-full rounded "
            alt="autora"
            unoptimized={true}
            src={"/assets/home/autora.png"}
            width={200}
            height={200}
          />
          <h1 className="font-bold">Laura López Gutierrez</h1>
          <p>creadora del proyecto</p>
        </div>
        <div className="bg-white w-1/2 h-[450px] z-10 p-6 absolute right-20 top-2/3 -translate-y-1/2 rounded-xl">
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
            realidad de maneras inesperadas y provocadoras. <br></br> <br></br> El objetivo del blog
            fue desafiar las percepciones y abrir las mentes a nuevas
            realidades, al igual que el prisionero de la caverna que se libera y
            descubre un mundo más allá de las sombras. Cada cuento en 'Sombras y
            Luces' se convierte en una herramienta para explorar temas como la
            libertad, la realidad y la ilusión, invitando a los lectores a
            cuestionar y a reflexionar. Con una mezcla de autores novatos y
            experimentados, el blog ofrece una diversidad de voces y
            perspectivas, todas unidas por el deseo de iluminar las sombras de
            nuestra existencia
          </p>
        </div>
        <Image
          className="w-full opacity-90 h-[700px] rounded border-t-2 border-black"
          alt="bg"
          unoptimized={true}
          src={"/assets/home/bg3.png"}
          width={1000}
          height={1000}
        />
      </div>
      <div className="mt-20 px-10">
        <div className="flex justify-between gap-20 ">
          <div className="w-2/3">
            <h1 className="border-b-2 border-black py-2 mb-4 ">
              Lo más destacado
            </h1>
            <div className="grid grid-cols-2 gap-10 ">
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
          </div>
          <div className="w-1/3 text-center">
            <h1 className="border-y border-gray-400 py-2">Catálogo</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
