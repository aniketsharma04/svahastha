import { Link } from "react-router-dom";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12", 
    lg: "h-16 w-16",
    xl: "h-20 w-20"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl", 
    xl: "text-3xl"
  };

  const subtextSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg"
  };

  return (
    <Link to="/" className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Circle */}
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 flex items-center justify-center shadow-lg relative overflow-hidden`}>
        {/* Decorative swirls */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1 left-1 w-2 h-2 bg-amber-600 rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-amber-600 rounded-full"></div>
        </div>
        
        {/* Main Logo Text */}
        <div className="text-center relative z-10">
          <div className={`font-heading font-bold text-amber-800 ${textSizeClasses[size]} tracking-wide`}>
            S
          </div>
        </div>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <h1 className={`font-heading font-bold text-primary ${textSizeClasses[size]} tracking-wide`}>
            Svahastha
          </h1>
          <p className={`text-muted-foreground font-medium ${subtextSizeClasses[size]} tracking-wide`}>
            The Pottery Studio
          </p>
        </div>
      )}
    </Link>
  );
};

export default Logo;
