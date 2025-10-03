interface Artwork {
  id: number;
  title: string;
  year: string;
  dimensions: string;
  medium: string;
  source: any;
}

interface InteractiveGalleryGridProps {
  artworks: Artwork[];
}

export default function InteractiveGalleryGrid({
  artworks,
}: InteractiveGalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="group relative">
          <div className="relative aspect-square md:aspect-[4/5] mb-3 md:mb-4 bg-neutral-900 overflow-hidden rounded-sm">
            <img
              src={artwork.source}
              alt={artwork.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title and details */}
          <div className="px-1">
            <h3 className="text-lg md:text-xl font-normal mb-1">
              {artwork.title}
            </h3>
            <p className="text-neutral-400 text-xs md:text-sm">
              {artwork.year} • {artwork.medium}
            </p>
            <p className="text-neutral-500 text-xs mt-1 md:hidden">
              {artwork.dimensions}
            </p>
            <p className="text-neutral-500 text-xs mt-1 hidden md:block">
              {artwork.dimensions}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
