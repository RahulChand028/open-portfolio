'use client'
import Image from "next/image";
import Aurora from './components/Aurora/Aurora';
import Dock from './components/Dock/Dock';
import { LinkPreview } from "./components/Linkpreview/Linkpreview";
import RotatingText from './components/RotatingText/RotatingText'
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';
import { TextHoverEffect } from "./components/TextHoverEffect/TextHoverEffect";
import incommImg from '../assets/InComm Benefits - A New Way to HSA.png';
import clefillImg from '../assets/clefill-image.jpg';


export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.3}
        amplitude={1.0}
        speed={1}
      />




      <div className="flex justify-center items-center flex-col px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-4xl mx-auto py-8 sm:py-12 md:py-16">

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight">
            <RotatingText
              texts={['React', 'Nodejs', 'Full-Stack', 'Cool!']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"first"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            /> Engineer
            <br />
            and Builder
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl text-gray-400 mt-4 sm:mt-6">
            Design-driven. Code-deep.
            Building digital products that just work.
          </p>
        </div>

        <div className="flex justify-center items-center h-auto sm:h-[40rem] flex-col w-full max-w-4xl mx-auto py-8 sm:py-12 md:py-16">
          <div className="text-neutral-400 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-4">
            <span className="text-white font-medium">I'm a software developer</span> who loves building cool stuff with{" "}
            <LinkPreview
              url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 to-yellow-600"
            >
              JavaScript
            </LinkPreview>,
            <LinkPreview
              url="https://react.dev/"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-cyan-500"
            >
              React
            </LinkPreview>,
            <LinkPreview
              url="https://nodejs.org/en"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-500 to-emerald-500"
            >
              Node.js
            </LinkPreview>,{" "}
            <LinkPreview
              url="https://nextjs.org/"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-pink-600"
            >
              Next.js
            </LinkPreview>,{" "}
            <LinkPreview
              url="https://expressjs.com/"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-yellow-500 to-orange-500"
            >
              Express.js
            </LinkPreview>
            . I've worked with {" "}
            <LinkPreview
              url="https://www.mysql.com/"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-indigo-600"
            >
              MySql
            </LinkPreview>,{" "}
            <LinkPreview
              url="https://www.postgresql.org/"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-500 to-blue-600"
            >
              PostgresSQL
            </LinkPreview>,{" "}  and {" "}
            <LinkPreview
              url="https://www.mongodb.com/"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-600 to-emerald-600"
            >
              MongoDB
            </LinkPreview>{" "}
            to create <span className="text-white font-medium">scalable and efficient applications</span>.
          </div>

          <p className="text-neutral-400 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-4">
            Beyond coding, I love <span className="text-white font-medium">designing product architectures</span> that optimize performance and scalability. And when I'm not deep in tech, you'll find me enjoying anime, drawing inspiration from storytelling and creativity.
          </p>

          <p className="text-neutral-400 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed px-4">
            <span className="text-white font-medium">Let's create something awesome together!</span> 🚀
          </p>
        </div>

      </div>



      <div className="min-h-[20rem] sm:h-[40rem] flex items-center justify-center py-12 sm:py-0">
        <TextHoverEffect text="Projects" />
      </div>



      <div className="space-y-16 sm:space-y-32 px-4 sm:px-6 md:px-8 pb-16 sm:pb-24">
        <ProjectShowcase
          title="Clefill,"
          subtitle="Refillable Home Care Products"
          description="Clefill provides a range of personal hygiene and home care products, including hand wash, toilet cleaner, and laundry detergent. Their unique service allows customers to refill any empty bottle be it a detergent container or a water bottle through doorstep delivery, promoting sustainability and reducing plastic waste"
          imageSrc={clefillImg}
          imageAlt="Clefill Interface Screenshot"
          link="https://clefill.com"
          gradientFrom="indigo-500"
          gradientTo="purple-500"
          avatarGradients={[
            { from: "indigo-500", to: "violet-500" },
            { from: "purple-500", to: "pink-500" }
          ]}
        />

        <ProjectShowcase
          title="IncommBenefits,"
          subtitle="Employee Benefits Platform"
          description="A comprehensive employee benefits management platform built with modern web technologies. Streamlining benefits administration with an intuitive interface and powerful features."
          imageSrc={incommImg}
          imageAlt="IncommBenefits Platform Interface"
          link="https://incommbenefits.com"
          gradientFrom="blue-600"
          gradientTo="cyan-500"
          avatarGradients={[
            { from: "blue-600", to: "sky-500" },
            { from: "cyan-500", to: "teal-400" }
          ]}
        />
      </div>
    </div>

  );
}
