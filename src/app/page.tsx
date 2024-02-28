import Image from "next/image";
import Safari from "../../public/Browser/Safari.svg";

export default function Home() {
  return (
    <main className="flex justify-center mt-[150px] h-screen">
      {/* <div className="justify-center flex"> */}
      <div className="flex flex-col text-[40px] font-bold tracking-wide">
        <span className="text-[#2752E7] ml-[380px] ">One platform</span>
        <span className="text-[#2C3131] ml-[350px]">all things Crypto</span>
        <span className="text-[12px] mx-[100px] text-[#626262] ml-[150px] mt-[15px] font-medium text-center">
          Open a free account in minutes right from your phone <br /> and make
          your money go further
        </span>
        <Image src={Safari} alt="coolImg" className="mt-[20px] mb-[80px]" />
        {/* </div> */}
      </div>
    </main>
  );
}
