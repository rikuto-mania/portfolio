interface WorkCardProps{
    image:string;
    title:string;
    description:string;
    github?:string;
}


export const WorkCard = (props:WorkCardProps) =>{
    return(
        <div className="rounded-2xl bg-[#F4F4F4] border p-4">
            <img src={props.image} alt={props.title} className="w-full pb-5"/>
            <p className="text-xl font-semibold pb-2">{props.title}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default WorkCard