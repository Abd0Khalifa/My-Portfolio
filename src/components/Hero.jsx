/**
 * Components
 */
import { ButtonOutline, ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
    <div className="container flex flex-col-reverse items-center lg:grid lg:grid-cols-2 lg:gap-10">
      {/* Left Section: Text */}
      <div className="mt-12 lg:mt-24">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
            </span>
            <span>Available for work</span>
          </div>
        </div>
  
        <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
          Building Scalable Modern Websites For The Future
        </h2>
  
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonPrimary label='Download CV' icon="download" href="/files/Abdulrahman Khalifa_CV.pdf" download target="_blank" />
          <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward" />
        </div>
      </div>
  
      {/* Right Section: Image */}
      <div className="mb-8 lg:mb-0">
        <figure className="w-full max-w-[480px] mx-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
          <img
            src="/images/me.png"
            width={656}
            height={800}
            alt="Abdulrahman Khalifa"
            className="w-full h-auto block"
          />
        </figure>
      </div>
    </div>
  </section>
  
  );
}

export default Hero