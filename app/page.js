import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="logo"
        />
      </div>
      <div>
        <h1>Yongjin Lee</h1>
        <p>CS @ Cornell</p>
        <p>Developing software for innovative solutions</p>
      </div >
    </div>
  );
}
