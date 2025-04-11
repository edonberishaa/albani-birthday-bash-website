
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const VideoUpload = () => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check if the file is a video
    if (!file.type.startsWith('video/')) {
      toast.error('Ju lutem ngarkoni vetëm video!');
      return;
    }

    // Check if the video duration is appropriate (client-side check)
    setIsUploading(true);
    
    const video = document.createElement('video');
    video.preload = 'metadata';
    
    video.onloadedmetadata = () => {
      window.URL.revokeObjectURL(video.src);
      
      // Check if the video is around 2 seconds long (with some tolerance)
      if (video.duration > 5) {
        toast.error('Video është tepër e gjatë! Ju lutem ngarkoni një video më të shkurtër (max 5 sekonda).');
        setIsUploading(false);
        return;
      }
      
      // Create object URL for preview
      const objectUrl = URL.createObjectURL(file);
      setVideoSrc(objectUrl);
      
      toast.success('Video u ngarkua me sukses!');
      setIsUploading(false);
    };
    
    video.src = URL.createObjectURL(file);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <section className="my-16 video-section p-6 bg-albani-black">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Shto një video urimi</h2>
      
      <div className="flex flex-col items-center">
        {videoSrc ? (
          <div className="w-full max-w-2xl mb-6">
            <video 
              controls 
              autoPlay 
              loop 
              className="w-full rounded-md border-2 border-albani-red"
            >
              <source src={videoSrc} type="video/mp4" />
              Shfletuesi juaj nuk mbështet elementin video.
            </video>
          </div>
        ) : (
          <div className="w-full max-w-2xl h-64 flex items-center justify-center mb-6 border-2 border-dashed border-albani-red rounded-md bg-albani-gray">
            <p className="text-center text-gray-400">
              Këtu do të shfaqet video juaj e urimit <br />
              (maksimumi 5 sekonda)
            </p>
          </div>
        )}
        
        <input
          type="file"
          accept="video/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        
        <Button
          onClick={handleButtonClick}
          disabled={isUploading}
          className="bg-albani-red hover:bg-red-700 text-white animate-pulse-red"
        >
          {isUploading ? 'Duke ngarkuar...' : videoSrc ? 'Ndrysho Videon' : 'Ngarko Video'}
        </Button>
      </div>
    </section>
  );
};

export default VideoUpload;
