import Image from 'next/image';
import Link from 'next/link';

interface ProjectShowcaseProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: any;
  imageAlt: string;
  link: string;
  gradientFrom: string;
  gradientTo: string;
  avatarGradients: {
    from: string;
    to: string;
  }[];
}

const ProjectShowcase = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  link,
  gradientFrom = "indigo-500",
  gradientTo = "purple-500",
  avatarGradients = [
    { from: "indigo-500", to: "violet-500" },
    { from: "purple-500", to: "pink-500" }
  ]
}: ProjectShowcaseProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden mb-8 sm:mb-12 group">
        <div className={`absolute inset-0 bg-gradient-to-br from-${gradientFrom}/20 to-${gradientTo}/20 z-0 
          group-hover:from-${gradientFrom}/30 group-hover:to-${gradientTo}/30 transition-all duration-500`} />
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
          priority
        />
      </div>

      <div className="flex flex-col gap-6 sm:gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
            {title}
            <br />
            <span className={`bg-clip-text text-transparent bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}>
              {subtitle}
            </span>
          </h2>
        </div>

        <div className="max-w-xl">
          
          
          <p className="text-base sm:text-lg text-gray-400 mb-4">
            {description}
          </p>

          <Link 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center text-base sm:text-lg font-medium
              relative after:absolute after:bottom-0 after:left-0 after:h-[2px] 
              after:w-full after:origin-left after:scale-x-0 
              after:bg-gradient-to-r after:from-${gradientFrom} after:to-${gradientTo}
              hover:after:scale-x-100 after:transition-transform after:duration-300
              text-white/90 hover:text-white
              transition-colors duration-300 group`}
          >
            Visit Project
            <svg 
              className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transform -translate-x-1 opacity-0 
                group-hover:translate-x-0 group-hover:opacity-100 
                transition-all duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase; 