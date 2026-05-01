import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    '/public/img1.jpg',
    '/public/img2.jpg',
    '/public/img3.jpg',
    '/public/img4.jpg',
  ]

  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: 'top 28%',
        end: 'top -70%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })


  return (
    <div className='parent'>
      <div id='page1' className='py-1 '>
        <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 -top-80 lg:left-[30vw] left-[30vw]'>
          <img ref={imageRef} className='h-full object-cover w-full' src="/public/img1.jpg" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Arpit <br />
              Kumar</h1>
          </div>
          <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
            <p className='lg:text-6xl text-xl leading-tight'>As a frontend developer, I enjoy building dynamic and responsive web applications using React and JavaScript. I’m passionate about crafting clean, intuitive user interfaces and continuously improving performance. Currently, I’m exploring advanced animations and modern UI techniques to make my work more engaging and visually appealing.</p>
          </div>
        </div>
      </div>
      <div id='page2' className=" h-screen">

      </div><div id='page2' className="min-h-screen bg-slate-900 text-white px-6 py-20">

  {/* EDUCATION */}
  <section className="mb-20">
    <h2 className="text-4xl font-[font2] mb-8">Education</h2>

    <div className="p-6 border rounded-xl bg-white/5
                transition-all duration-300
                hover:bg-white/10 hover:scale-[1.02]
                hover:shadow-2xl hover:border-white/30
                cursor-pointer">
      <h3 className= "font-serif,text-2xl transition-all duration-300 group-hover:text-white">Bachelor of Technology (B.Tech) in Computer Science and Engineering — Cyber Security Specialization
Currently pursuing 2nd year, with hands-on experience in React, JavaScript, and modern web development practices. Actively building projects focused on performance, security, and user experience, while strengthening core concepts in data structures, algorithms, and database systems. </h3>
      <p className="italic bold text-gray-400">Dr. B. C. Roy Engineering College Fuljhor,Durgapur,West Bengal • 2024 – 2028</p>
      <p className="mt-2 text-gray-300">
       Focused on developing scalable full-stack web applications with an emphasis on performance and user experience. Academic foundation includes Data Structures & Algorithms, Database Management Systems, and Cyber Security fundamentals, complemented by practical project experience.
      </p>
    </div>
  </section>

  {/* SKILLS */}
  <section className="mb-20">
    <h2 className="text-4xl font-[font2] mb-8">Skills</h2>

    <div className="flex flex-wrap gap-4">
     {["React", "JavaScript", "Tailwind", "GSAP", "HTML", "CSS","Python","Node.js"].map((skill) => (
  <span
    key={skill}
    className="px-4 py-2 rounded-full bg-white/10 
               hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500
               hover:text-white
               transition-all duration-300 hover:scale-110
               cursor-pointer"
  >
    {skill}
  </span>
))}
    </div>
  </section>

  {/* PROFILES */}
  <section className="mb-20">
    <h2 className="text-4xl font-[font2] mb-8">Profiles</h2>

    <div className="flex gap-6">
      <a href="//github.com/shyamhkb" target="_blank"
        className="px-6 py-3 rounded-xl border border-white/20
             transition-all duration-300
             hover:bg-white hover:text-black
             hover:scale-110 hover:shadow-xl">
        GitHub
      </a>

      <a href="https://www.linkedin.com/in/arpit-kumar-95928222a" target="_blank"
        className="px-6 py-3 rounded-xl bg-blue-600
             transition-all duration-300
             hover:bg-blue-500
             hover:scale-110 hover:shadow-xl">
        LinkedIn
      </a>
    </div>
  </section>

  {/* CONTACT */}
  <section>
    <h2 className="text-4xl font-[font2] mb-8">Contact</h2>

    <p className="text-gray-300 mb-2">Email: kumarshyams345@gmail.com</p>
    <p className="text-gray-400">Open for internships & projects</p>
  </section>

</div>
    </div>
  )
}

export default Agence