import Image from "next/image";

interface WorkCardProps{
    image:string;
    title:string;
    description:string;
    github?:string;
}


export const WorkCard = (props:WorkCardProps) =>{
    return(
        <div className="rounded-2xl bg-[#373737] border p-4">
            <Image src={props.image} alt={props.title} width={400} height={255} className="w-full pb-5 rounded-lg"/>
            <p className="text-xl font-semibold pb-2">{props.title}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default WorkCard