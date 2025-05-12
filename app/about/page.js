import Image from "next/image";
import staticData from "@/lib/staticData";
import Experience from "./components/Experience";

export default function About() {
  const data = staticData.find((item) => item.page === "about");

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center text-center gap-10 min-h-screen">
        {/* "Who am I?" with slide-in-from-left animation */}
        <h1 className="font-serif text-7xl animate-slide-in-left">Who am I?</h1>
        {/* Content with slide-in-from-right animation */}
        <p className="w-xl animate-slide-in-right">
          {data ? data.content : "Content not found."}
        </p>
      </div>

      <div className="flex flex-col items-center min-h-screen gap-10 border-t-2 border-black pt-10">
        <h1 className="text-center font-serif text-5xl">My recent experiences</h1>
        <Experience />
        <button className="btn-primary w-[20%]"><a href="/Yongjin Lee CV.pdf" target="_blank" >
        Check out my resume</a></button>
      </div>
    </div>
  );
}