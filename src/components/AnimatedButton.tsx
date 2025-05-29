
import { Link } from "react-router-dom";

interface AnimatedButtonProps {
  to: string;
  text?: string;
  onClick?: () => void;
}

const AnimatedButton = ({ to, text = "Let's Talk", onClick }: AnimatedButtonProps) => {
  return (
    <Link 
      to={to}
      onClick={onClick}
      className="relative flex items-center gap-1 py-2 px-4 bg-transparent text-white font-medium text-base rounded-full overflow-hidden transition-all duration-600 ease-cubic-bezier shadow-[0_0_0_2px_#622bff] hover:shadow-[0_0_0_12px_transparent] hover:rounded-xl group"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute w-5 h-5 fill-white z-10 right-4 transition-all duration-800 ease-cubic-bezier" 
        viewBox="0 0 24 24"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute w-5 h-5 fill-white z-10 -left-1/4 transition-all duration-800 ease-cubic-bezier group-hover:left-4" 
        viewBox="0 0 24 24"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
      <span className="relative z-10 -translate-x-3 transition-all duration-800 ease-cubic-bezier group-hover:translate-x-3">{text}</span>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#622bff] rounded-full opacity-0 transition-all duration-800 ease-cubic-bezier group-hover:w-[180px] group-hover:h-[180px] group-hover:opacity-100"></span>
    </Link>
  );
};

export default AnimatedButton;
