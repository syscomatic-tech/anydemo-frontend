import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import PersistProvider from "@/src/redux/PersistProvider";
import { ReduxProvider } from "@/src/redux/provider";
import NextTopLoader from "nextjs-toploader";

import "./../styles/globals.css";
import MusicPlayer from "../components/Music/MusicPlayer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anydemo.ai - The one tool need to make any demo",
  description:
    "Anydemo.ai is the one stop platform for voice creation, licensing, streaming and creator merchandise.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <PersistProvider>
            <NextTopLoader />
            {children}
            <MusicPlayer />
          </PersistProvider>
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
