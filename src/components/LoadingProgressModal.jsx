"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../styles/globals.css";
const LoadingProgressModal = (props) => {
  const { title, open, setOpen } = props;
  const [percent, setPercent] = useState(0);
  const { convertedMusic, loading } = useSelector(
    (state) => state.musicConversion
  );
  console.log("percent", percent);
  useEffect(() => {
    if (open) {
      let interval;
      if (percent < 80) {
        interval = setInterval(() => {
          setPercent((prevPercent) => prevPercent + 1);
        }, 200);
      } else if (percent >= 80 && convertedMusic) {
        interval = setInterval(() => {
          setPercent((prevPercent) => prevPercent + 1);
        }, 200);
      }

      if (percent >= 100) {
        clearInterval(interval);
        setOpen(false);
      }

      return () => {
        clearInterval(interval);
      };
    }
  }, [open, percent, convertedMusic]);

  return (
    <div className="modal modal-open">
      <div className="modal-content">
        <div>
          <div className="progressTitle">
            <h1>
              {title} : {percent}%{" "}
            </h1>
          </div>
          <div className="mx-auto my-4 flex  items-center justify-center">
            <span className="loading loading-infinity loading-lg mx-auto bg-white scale-150"></span>
          </div>
          <div className="progress ">
            <div className="track">
              <div
                style={{ width: `${percent + 5}%` }}
                className="percent"
              ></div>
              <span style={{ left: `${percent + 5}%` }} className="percentTag">
                {percent}%
              </span>
            </div>
          </div>
        </div>

        <button className="crossBtn" onClick={() => setOpen(false)}>
          <Image src="/img/cross.png" width={37.5} height={37.5} alt="cross" />
        </button>
      </div>
    </div>
  );
};

export default LoadingProgressModal;
