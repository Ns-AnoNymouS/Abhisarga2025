
// import React, { useState, useEffect } from 'react';
// import { carouselData } from './data/carouselData';
// import ProgressBar from './ProgressBar';
// import Timeline from './Timeline';
// import CarouselSlide from './CarouselSlide';
// import Thumbnails from './Thumbnails';
// import NavigationArrows from './NavigationArrows';
// import Navigation from './Navigation';
// export default function ImageCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           setCurrentIndex((current) => (current + 1) % carouselData.length);
//           return 0;
//         }
//         return prev + 1;
//       });
//     }, 70);

//     return () => clearInterval(interval);
//   }, []);

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % carouselData.length);
//     setProgress(0);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
//     setProgress(0);
//   };

//   const handleThumbnailClick = (index) => {
//     setCurrentIndex(index);
//     setProgress(0);
//   };

//   return (
//     <div className="h-screen relative overflow-hidden">
//       {/* Progress bar - full width on all screens */}
//       <ProgressBar progress={progress} />

//       {/* Navigation - responsive padding */}
//       {/* <div className="px-4 sm:px-6 lg:px-8">
//         <Navigation />
//       </div> */}

//       {/* Timeline - adjusts position based on screen size */}
//       <div className="hidden sm:block">
//         <Timeline 
//           total={carouselData.length}
//           currentIndex={currentIndex}
//           onSelect={handleThumbnailClick}
//           className="absolute top-1/4 right-4 sm:right-6 lg:right-8 z-30"
//         />
//       </div>

//       {/* Main carousel content */}
//       <div className="relative h-full">
//         {carouselData.map((item, index) => (
//           <CarouselSlide
//             key={item.id}
//             item={item}
//             isActive={index === currentIndex}
//           />
//         ))}
//       </div>

//       {/* Thumbnails - hidden on mobile, shown on larger screens */}
//       <div className="hidden md:block">
//         <Thumbnails
//           items={carouselData}
//           currentIndex={currentIndex}
//           onSelect={handleThumbnailClick}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
//         />
//       </div>

//       {/* Navigation arrows - adjusted padding for different screen sizes */}
//       <NavigationArrows
//         onPrev={handlePrev}
//         onNext={handleNext}
//         className="absolute inset-y-0 w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 z-20"
//       />

//       {/* Mobile-only indicators */}
//       <div className="flex md:hidden justify-center absolute bottom-4 left-0 right-0 z-30">
//         {carouselData.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleThumbnailClick(index)}
//             className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
//               currentIndex === index ? 'bg-orange-500 w-4' : 'bg-white/50'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';
import { carouselData } from './data/carouselData';
import Navigation from './Navigation';
import ProgressBar from './ProgressBar';
import Timeline from './Timeline';
import CarouselSlide from './CarouselSlide';
import Thumbnails from './Thumbnails';
import NavigationArrows from './NavigationArrows';

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => (current + 1) % carouselData.length);
          return 0;
        }
        return prev + 1;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    setProgress(0);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Progress bar - full width on all screens */}
      <ProgressBar progress={progress} />

      {/* Navigation - responsive padding */}
      {/* <div className="px-4 sm:px-6 lg:px-8">
        <Navigation />
      </div> */}

      {/* Timeline - adjusts position based on screen size */}
      <div className="hidden sm:block">
        <Timeline 
          total={carouselData.length}
          currentIndex={currentIndex}
          onSelect={handleThumbnailClick}
          className="absolute top-1/4 right-4 sm:right-6 lg:right-8 z-30"
        />
      </div>

      {/* Main carousel content */}
      <div className="relative h-full">
        {carouselData.map((item, index) => (
          <CarouselSlide
            key={item.id}
            item={item}
            isActive={index === currentIndex}
          />
        ))}
      </div>

      {/* Thumbnails - hidden on mobile, shown on larger screens */}
      <div className="hidden md:block">
        <Thumbnails
          items={carouselData}
          currentIndex={currentIndex}
          onSelect={handleThumbnailClick}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        />
      </div>

      {/* Navigation arrows - adjusted padding for different screen sizes */}
      <NavigationArrows
        onPrev={handlePrev}
        onNext={handleNext}
        className="absolute inset-y-0 w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 z-20"
      />

      {/* Mobile-only indicators */}
      <div className="flex md:hidden justify-center absolute bottom-4 left-0 right-0 z-30">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
              currentIndex === index ? 'bg-orange-500 w-4' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
