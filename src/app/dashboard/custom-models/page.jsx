"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { downloadMusic, fetchUserMusic, streamMusic } from "@/src/axios/axios";
import { NoDataFound } from "@/src/components/helper";

const MyMusic = () => {
  const dispatch = useDispatch();
  const { music } = useSelector((state) => state.userMusic);
  const { streamingMusic, loading } = useSelector((state) => state.musicStream);
  const { downloadedMusic, error } = useSelector(
    (state) => state.musicDownload
  );
  console.log("downloadedMusic", downloadedMusic, error);

  function downloadAudioChunks(audioData) {
    // 1. Extract audio data by removing the ID3 tag
    const audioDataWithoutID3 = audioData.substring(10);

    // 2. Convert data to the desired format if needed

    // 3. Create a downloadable Blob
    const blob = new Blob([audioDataWithoutID3], { type: "audio/mpeg" });

    // 4. Generate a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "audio.mp3";

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const handleDownloadClick = () => {
    downloadAudioChunks(downloadedMusic);
  };

  const handleDownload = (music) => {
    dispatch(downloadMusic(music));
  };

  const onStreamMusic = (music) => {
    dispatch(streamMusic(music));
  };

  useEffect(() => {
    dispatch(fetchUserMusic());
  }, []);

  return (
    <div className="dashboard_children lg:max-h-[670px] lg:overflow-y-scroll">
      {<NoDataFound />}
    </div>
  );
};

export default MyMusic;
