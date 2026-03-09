import * as Icons from './icon/skillIcons/index'

interface IconCardProps{
    icon:keyof typeof Icons
    name:string;
}

export const SkillCard = (props:IconCardProps) =>{
    const Icon =Icons[props.icon];
    return(
        <div className="text-white bg-[#373737] text-center p-6 rounded-lg flex flex-col items-center">
        <Icon />
            <p className="pt-2">{props.name}</p>
        </div>
    );
};