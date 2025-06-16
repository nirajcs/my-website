/* eslint-disable react/no-unknown-property */
import newimage from '../assets/nirajcs.png'
import cv from '../assets/Niraj C S-Resume.pdf'

const Home = () => {
  /* UNCOMMENT FOR TYPING EFFECT */
  // const [text,setText] = useState('')
  // const [charIndex, setCharIndex] = useState(0);
  // const content = "MERN Stack Developer"
  // useEffect(() => {
  //   const typingTimer = setTimeout(() => {
  //     if (charIndex < content.length) {
  //       setText(content.substring(0, charIndex + 1));
  //       setCharIndex(charIndex + 1);
  //     }
  //   }, 50); // Adjust the typing speed (e.g., 100ms per character)

  //   return () => clearTimeout(typingTimer);
  // }, [charIndex, content]);

  return (
    <>
      <div className='gap-10 h-1/2 w-full lg:h-full lg:w-1/2 order-2 text-center lg:text-left lg:order-1 flex flex-col justify-center items-center'>
        <div className='animate-onscroll-trigger w-5/6 flex justify-center lg:justify-start'>
          <div animation-settings="animate__fadeInDown lg:animate__fadeInLeft" className='animate__onscroll flex flex-col gap-3 justify-center lg:w-full'>
            <div className="w-full">
              <h1 className='md:text-5xl text-3xl text-white lg:text-7xl font-bold w-full'>I am <span className='text-textColor'>Niraj C S</span></h1>
            </div>
            <div className='w-full'>
              <h3 className='text-white font-medium md:text-2xl text-lg lg:text-4xl w-full'>MERN Stack Developer</h3>
            </div>
          </div>
        </div>
        <div className='animate-onscroll-trigger flex w-5/6 justify-center lg:justify-start'>
          <a animation-settings="animate__fadeInDown" className='animate__onscroll' href={cv} target='_blank' rel="noreferrer">
            <button className="bg-transparent hover:bg-white text-white lg:text-lg font-semibold hover:text-primaryColor py-1 px-4 border border-white hover:border-transparent rounded mt-5">
              View CV
            </button>
          </a>
        </div>
      </div>
      <div className='animate-onscroll-trigger lg:w-1/2 order-1 lg:order-1 w-full h-1/2 lg:h-full flex flex-col justify-end items-center pt-10 md:p-3'>
        <img src={newimage} alt="niraj-c-s" animation-settings="animate__fadeInDown" className='animate__onscroll lg:hidden h-full rounded-full border-4 border-white'/>
        <div animation-settings="animate__fadeInRight" className='animate__onscroll md:w-5/6 md:h-5/6 lg:w-full lg:h-full flex justify-center'>
          <img src={newimage} alt="niraj-cs" className='h-full hidden lg:block'/>
        </div>
      </div>
    </>
  )
}

export default Home