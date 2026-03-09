import Image from "next/image";
import { ParticleWave } from "./component/ParticleWave";
import { WorkCard } from "./component/Workcard";

export default function Home() {
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

      <section className="flex flex-col md:flex-row items-center xl:max-w-4xl mx-auto px-8 gap-9 py-30">
        <div className="bg-[#00152d] pl-4 pb-4">
          <Image src={"/rikuto-mania01.PNG"} alt="rikuto" width={520} height={600} className="bg-blue-950 pt-4 pr-4" />
        </div>
        <div className="">
          <p className="text-5xl font-bold pb-9">ABOUT ME</p>
          <p>こんにちは。河野陸人(こうの りくと)と申します。<br/>
            ECCコンピュータ専門学校 IT開発エキスパートコース在学。
            Web分野に興味があり将来はフロントエンドエンジニアとして活躍したいと考えております。<br/>
            現在はフロントエンドだけではなくバックエンドも勉強中です。
          </p>
        </div>
      </section>

      <section>
        <p className="text-center text-5xl font-bold pb-12">WORKS</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <WorkCard 
            image="/smcs_image.png" 
            title="Smart MicroClimate Control System" 
            description="自分の家庭にあった最適な室内環境を提供する
                        Iotデバイス"
          />

          <WorkCard 
            image="/swapWeb_image.png" 
            title="SWAP Webサイト" 
            description="プラスチック削減プロジェクトSWAPの公式ホームページ"
          />

          <WorkCard 
            image="/edurouteJAPAN_image.png" 
            title="eduroute JAPAN" 
            description="AI診断であなたに合った進路を提案する日本留学ナビサイト"
          />
        </div>
      </section>
    </div>
  );
}
