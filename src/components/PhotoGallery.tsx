
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Photo {
  id: number;
  src: string;
  alt: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: "/lovable-uploads/12b3c92b-af8e-48a3-b271-94662b8442ba.png",
    alt: "Photo of Albani with a friend"
  },
  {
    id: 2,
    src: "/lovable-uploads/9fe9dd9a-c42c-432e-804a-a3aa795d6213.png",
    alt: "Albani and friend at a cafe"
  },
  {
    id: 3,
    src: "/lovable-uploads/5c09cccf-646c-411a-b313-c12fa24b8927.png",
    alt: "Albani and friends making peace signs"
  },
  {
    id: 4,
    src: "/lovable-uploads/397056a6-0afa-4e3b-8eb6-6e96f614ef1d.png",
    alt: "Albani and friend at a restaurant"
  },
  {
    id: 5,
    src: "/lovable-uploads/49417195-612a-4358-8be3-4a48c2b2fc83.png",
    alt: "Albani with two friends at a cafe"
  }
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openPhotoModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <section className="my-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Kujtimet Tona</h2>
      
      <div className="photo-grid">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="photo-frame cursor-pointer" 
            onClick={() => openPhotoModal(photo)}
          >
            <img src={photo.src} alt={photo.alt} className="h-64 w-full object-cover" />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={closePhotoModal}>
        <DialogContent className="max-w-3xl bg-albani-black border-albani-red">
          {selectedPhoto && (
            <img 
              src={selectedPhoto.src} 
              alt={selectedPhoto.alt} 
              className="w-full h-auto rounded-md"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PhotoGallery;
