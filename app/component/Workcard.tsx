import Image from "next/image";
import Link from "next/link";
import { FaGlobe ,FaGithub} from "react-icons/fa";
interface WorkCardProps{
    title:string;
    description:string;
    image:string;
    technologies:string[];
    liveUrl?:string;
    githubUrl?:string;
    index:number;
}


export const WorkCard = (props:WorkCardProps) =>{
    return(
        <div className="rounded-2xl bg-[#373737] text-white p-4 flex flex-col h-full">
            <Image src={props.image} alt={props.title} width={400} height={255} className="w-full pb-5 rounded-lg"/>
            <p className="md:text-xl font-semibold pb-2">{props.title}</p>
            <p className="text-sm md:text-[16px] font-light">{props.description}</p>
            <div className="flex flex-wrap gap-2 py-4">
                {props.technologies.map((tech) =>{
                    return(
                        <p key={tech} className="px-3 py-1 border border-white text-white rounded-full">{tech}</p>
                    );
                })}
            </div>
            
            <div className="flex flex-col mt-auto">
                <div className="flex text-white gap-4">
                    {props.githubUrl &&(
                        <Link href={props.githubUrl}>
                            <div className="flex items-center">
                                <FaGithub size={16}/>
                                <p className="pl-1">Githubをみる</p>
                            </div>
                        </Link>
                    )}
                    {props.liveUrl &&(
                        <Link href={props.liveUrl}>
                            <div className="flex items-center">
                                <FaGlobe size={16}/>
                                <p className="pl-1">サイトを見る</p>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WorkCard