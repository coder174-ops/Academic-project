import heroShowcase from "../assets/image.png";
import './HeroSection.css';

export function HeroSection() {
  return (
    <section className="relative w-screen  flex flex-col items-center text-white text-sm ">
      <svg
        className="absolute inset-x-0 -z-10  -mt-40  md:mt-0 w-[100vw] h-auto"
        viewBox="0 0 1440 676"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1440" height="676" fill="#06B6D4" />
        <rect
          x="-92"
          y="-948"
          width="1624"
          height="1624"
          rx="812"
          fill="black"
        />

        <defs>
          <radialGradient
            id="a"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(90 428 292)scale(812)"
          >
            <stop offset=".63" stopColor="#372AAC" stopOpacity="0" />
            <stop offset="1" stopColor="#372AAC" />
          </radialGradient>
        </defs>
      </svg>

      <div className="flex items-center mt-32 gap-2 border border-slate-600 text-gray-50 rounded-full px-4 py-2">
        <div className="size-2.5 bg-green-500 rounded-full"></div>
        <span>Join Us</span>
      </div>
      <h1 className="text-center text-5xl leading-[68px] md:text-6xl md:leading-[70px] mt-4 font-semibold max-w-2xl">
        Welcome to{" "}
        <span className="text-[#06B6D4]">Student Skill Community!</span>
      </h1>
      <p className="text-center text-base max-w-lg mt-2">
        Our platform helps you build, test, and deliver faster — so you can
        focus on what matters.
      </p>
      <div className="flex items-center gap-4 mt-8">
        {/* <button className="flex items-center gap-2 bg-[#06B6D4] hover:bg-[#06B6D4]/80 text-white active:scale-95 rounded-lg px-7 h-11">
          Get started
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.166 10h11.667m0 0L9.999 4.165m5.834 5.833-5.834 5.834" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button> */}
        <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
        <button className="px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur">
          Get started
        </button>
        </div>
        <div className="button-bg1 rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100">
        <button className="px-8 text-sm py-2.5 text-white rounded-full font-medium bg-gray-800">
          Expore Community
        </button>
        </div>
      </div>
      {/* <img
        // src={heroShowcase}
        className=" w-full rounded-[15px] max-w-4xl mt-16"
        alt="hero section showcase"
      /> */}
    </section>
  );
}
