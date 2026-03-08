import Image from "next/image";
import { WorkCard } from "./component/Workcard";

export default function Home() {
  return (
    <div className="px-4 lg:px-8">
      <section>
        <h2 className="text-center text-5xl font-bold pb-12">WORKS</h2>

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
