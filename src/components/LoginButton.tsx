
import { UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link 
      to="/login"
      aria-label="User Login Button" 
      className="relative group overflow-hidden rounded-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-aeron-purple to-aeron-blue opacity-20 group-hover:opacity-70 transition-opacity duration-300"></div>
      <div className="relative bg-background/90 m-[2px] rounded-full py-2 px-4 flex items-center justify-center gap-2 transition-all duration-300">
        <UserRound className="w-5 h-5" />
        <span className="font-medium">Log In</span>
      </div>
    </Link>
  );
};

export default LoginButton;
