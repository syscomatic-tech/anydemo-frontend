"use client";
import MainLayout from "@/src/components/layouts/MainLayout";
import CreateMusic from "@/src/components/home/createMusic/createMusic";
import GetStarted from "@/src/components/home/getStarted/getStarted";
import Shop from "@/src/components/home/shop/shop";
import Stream from "@/src/components/home/stream/stream";
import HeroSection from "@/src/components/home/heroSection/heroSection";
import MusicIsolation from "../components/home/musicIsolation/MusicIsolation";
import CustomVoice from "../components/home/customVoice/CustomVoice";
import useAos from "../hooks/useAos";

export default function Home() {
  useAos();
  return (
    <div className="text-white bg-[url('/img/hero/Ellipse-11.png')] bg-no-repeat m-0 p-0">
      <MainLayout>
        <div className="container mt-8">
          <HeroSection />
          <CreateMusic />
          <MusicIsolation />
          {/* <Stream /> */}
          <CustomVoice />
          {/* <Shop /> */}
        </div>
        <GetStarted />
      </MainLayout>
    </div>
  );
}
