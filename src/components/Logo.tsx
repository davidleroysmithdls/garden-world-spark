import React from 'react';
import { Hammer, Leaf } from 'lucide-react';
interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}
const Logo = ({
  size = 'md',
  showText = true
}: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
  };
  const iconSizeClasses = {
    sm: 16,
    md: 20,
    lg: 32
  };
  return <div className="flex items-center space-x-3">
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center relative shadow-lg`}>
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-700 rounded-xl opacity-90"></div>
        
        {/* Icons */}
        <div className="relative z-10 flex items-center justify-center">
          <Leaf size={iconSizeClasses[size] * 0.6} className="text-green-200 absolute -top-0.5 -left-0.5" fill="currentColor" />
          <Hammer size={iconSizeClasses[size] * 0.7} className="text-white relative z-20" />
        </div>
        
        {/* Subtle shine effect */}
        <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-30"></div>
      </div>
      
      {showText && <div>
          <h1 className={`${textSizeClasses[size]} font-bold text-gray-900 leading-tight`}>Contractor Pros</h1>
          <p className="text-sm text-gray-600 font-medium">Professional Contractors UK</p>
        </div>}
    </div>;
};
export default Logo;