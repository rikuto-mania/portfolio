import Link from "next/link";

import { FaGithub,FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () =>{
    return(
        <footer className="bg-[#373737] py-3">
            <div className="flex gap-4 justify-center pb-2">
                <Link href="https://github.com/rikuto-mania" ><FaGithub size={24}/></Link>
                <Link href="https://www.facebook.com/people/%E6%B2%B3%E9%87%8E%E9%99%B8%E4%BA%BA/100050814615032/"><FaFacebook size={24}/></Link>
            </div>
            <p className="text-sm text-center">&copy;rikuto-mania All right Reserved.</p>
        </footer>
    );
}

export default Footer