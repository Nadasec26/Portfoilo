import './Hero.css'
import Lottie from "lottie-react";
import heroAnimation from '../../../public/animation/hero.json'
export default function Hero() {
  return (
    <section className='flex grow  mt-12'>
      <div className=''>
        <div className="parent_avater">
          <img src="../../../public/me-modified.png" className='avater w-32 border-2 border-solid border-orange-400 p-1 rounded-full' alt="" />
          <span className='icon-verified text-base ml-32' />
        </div>
        <h1 className='text-4xl mr-6 ml-0 mb-5'>Software designer, founder, and amateur astronaut.</h1>
        <p className='mb-16 text-sm'>I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.</p>
        <div className="icons flex gap-6 text-xl">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className='flex items-center animation'>
      <Lottie style={{height:355}}
                animationData={heroAnimation}
                aria-aria-labelledby="use lottie animation"
              />
      </div>
    </section>
  )
}
