import Image from "next/image";
import { ParticleWave } from "./component/ParticleWave";
import { WorkCard } from "./component/Workcard";

import {HTML,CSS,JS,TS,React,NextJS,Tailwind,PHP,Mysql,Laravel} from "./component/icon/skillIcons/index"
import { SkillCard } from "./component/SkillCard";


export default function Home() {
  const skills = [
    {icon:"HTML",name:"HTML"},
    {icon:"CSS",name:"CSS"},
    {icon:"JS",name:"JavaScript"},
    {icon:"TS",name:"TypeScript"},
    {icon:"React",name:"React"},
    {icon:"NextJS",name:"NextJS"},
    {icon:"Tailwind",name:"Tailwind"},
    {icon:"PHP",name:"PHP"},
    {icon:"Laravel",name:"Laravel"},
    {icon:"Mysql",name:"Mysql"},
  ] as const;


  const Wooks = [
    {
      title:"Smart MicroClimate Control System",
      description:"自分の家庭にあった最適な室内環境を提供するIotデバイス",
      image:"/smcs_image.png",
      technologies:["React Native","Nodejs","ESP32"],
      githubUrl:"https://github.com/alphateam-ecc/alphateam_front"
    },
    {
      title:"swap Webサイト",
      description:"プラスチック削減プロジェクトSWAPの公式ホームページ",
      image:"/swapWeb_image.png",
      technologies:["Nextjs","postgresql","Prisma"],
    },
    {
      title:"Grease Trace",
      description:"遠隔での共同作業において 「説明が伝わらない」ことで生じるもどかしさを解消する、リアルタイム描画共有ツール",
      image:"/Trace.png",
      technologies:["Go","React","Docker","Rust","linux"],
      githubUrl:"https://github.com/Dietary-fibari-hiroto/GreaseTrace-frontend"
    },
    {
      title:"Eduroute JAPAN",
      description:"訪日留学生向けに作成したWebサービス。AI診断であなたにあった最適な進路を提案！",
      image:"/edurouteJAPAN_image.png",
      technologies:["PHP","Laravel","Mysql","Docker","JavaScript"],
    },
    {
      title:"ポートフォリオサイト",
      description:"ポートフォリオサイト",
      image:"/portfolio.png",
      technologies:["Nextjs"],
      githubUrl:"https://github.com/rikuto-mania/portfolio"
    },
    {
      title:"FristChat",
      description:"返信が遅い人に早く返信させるためのアプリ",
      image:"/FristChat.png",
      technologies:["React","nodejs","tailwind","Docker","Mysql"],
      githubUrl:"https://github.com/hakyukawa"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="pb-30">
        <div className="relative h-screen overflow-hidden">
          <ParticleWave />
          <div className="w-full h-full flex flex-col items-center justify-center">
            <p className="text-3xl md:text-5xl font-semibold pb-2">Hi I'm RIKUTO</p>
            <p className="text-2xl">Welcome to My Portfolio!!</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center xl:max-w-4xl mx-auto px-6 md:px-8 gap-9 py-30">
        <div className="bg-[#00152d] pl-4 pb-4">
          <Image src={"/rikuto-mania01.PNG"} alt="rikuto" width={520} height={600} className="bg-blue-950 pt-4 pr-4" />
        </div>
        <div>
          <p className="text-5xl font-bold pb-9">ABOUT ME</p>
          <p>こんにちは。河野陸人(こうの りくと)と申します。<br/>
            ECCコンピュータ専門学校 IT開発エキスパートコース在学。
            Web分野に興味があり将来はフロントエンドエンジニアとして活躍したいと考えております。<br/>
            現在はフロントエンドだけではなくバックエンドも勉強中です。
          </p>
        </div>
      </section>


      <section className="px-6 md:px-8 py-15">
        <p className="text-center text-5xl font-bold pb-12">SKILLS</p>
        <div className="grid gap-5 max-w-4xl mx-auto grid-cols-3 md:grid-cols-6 lg:grid-cols-7">
          {skills.map((skill) =>{
            return(
              <SkillCard 
                key={skill.name}
                icon={skill.icon} 
              name={skill.name}
              />
            )
          })}
        </div>
      </section>

      <section className="px-6 md:px-8 py-15">
        <p className="text-center text-5xl font-bold pb-12">WORKS</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {Wooks.map((wook,index) =>{
            return(
              <WorkCard
                key={index}
                {...wook}
                index={index}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
