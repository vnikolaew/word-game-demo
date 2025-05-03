import React from "react";

interface ProgressBarProps {
   currentPage: number;
   totalPages: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
   currentPage,
   totalPages,
}) => {
   const progress = (currentPage / totalPages) * 100;

   return (
      <div className="w-full mx-auto flex items-center space-x-4 space-x-reverse mb-8">
         <div className="flex-grow relative h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
               className="absolute top-0 right-0 h-full bg-gradient-to-l from-neutral-400 to-neutral-600 rounded-full transition-all duration-500 ease-out flex items-center justify-start"
               style={{ width: `${progress}%` }}
            ></div>
         </div>
      </div>
   );
};

export default ProgressBar;
