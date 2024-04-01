import Image from "next/image";

export default function HeadingSection() {
  return (
    <div className="flex md:flex-row flex-col border-b-4 pb-20 border-white">
      <Image
        className=" w-full md:max-w-[56.8%] md:order-1 order-2"
        src={"/apeblue.png"}
        width={1920}
        height={1080}
        alt="pepe blue"
      />
      <div className=" flex flex-col md:order-2 order-1  md:px-0 px-5  mt-[25%] md:mt-0 space-y-5 justify-center text-darkBlue">
        <h1 className="text-5xl lg:text-7xl font-bold">snipabutblue</h1>
        <p className="text-2xl">
          snipa conquered the green, snipabutblue is poised to skyrocket in the
          blue base chain
        </p>
        <div>
          <button className="bg-darkBlue text-white px-3 py-2 text-2xl font-semibold rounded-md border-4 border-white">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}