import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white z-20 flex items-center px-40 text-gray-500">
  <div className="flex-1 justify-start">
    <Image
      alt="logo"
      unoptimized={true}
      src={"/assets/logoMak.png"}
      width={200}
      height={200}
    />
  </div>
  <ul className="flex gap-20 justify-center">
    <Link href={"/"}><li>INICIO</li></Link>
    <Link href={"/catalogo"}><li>CATÁLOGO</li></Link>
    <Link href={"/contacto"}><li>CONTACTO</li></Link>
    <Link href={"/blog"}><li>BLOG</li></Link>
  </ul>
  <div className="flex-1"> {/* Este div actúa como un "espacio fantasma" para equilibrar el logo y centrar el ul */}</div>
</nav>

  );
}
