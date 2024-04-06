'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";


const Logo = () => {
    const router = useRouter();


    return (
        <Image 
        alt="logo"
        className="md:block hidden cursor-pointer w-auto h-auto"
        height='100'
        width='100'
        src="/images/logo.png"
        />
      );
}
 
export default Logo;