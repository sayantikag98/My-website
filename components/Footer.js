import Image from "next/image";

export default function Footer(){
    return (
        <footer>
            <Image src="/images/logo.png" alt="logo" width={40} height={30}/>
        </footer>
    );
}