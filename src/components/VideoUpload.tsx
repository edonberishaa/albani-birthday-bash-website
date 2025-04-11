
import React from 'react';

const VideoUpload = () => {
  return (
    <section className="my-16 video-section p-6 bg-albani-black">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Mesazhi Special</h2>
      
      <div className="flex flex-col items-center">
        <div className="w-full max-w-2xl mb-6">
          <video 
            controls 
            autoPlay 
            loop 
            className="w-full rounded-md border-2 border-albani-red"
          >
            <source src="/special-message.mp4" type="video/mp4" />
            Shfletuesi juaj nuk mbështet elementin video.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoUpload;
