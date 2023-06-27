"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function useAos() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: -300,
    });
  }, []);
}
