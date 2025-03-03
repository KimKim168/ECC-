"use client";

import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";


export default function MyVideos({ className, videos }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <div className={`grid grid-cols-12 gap-4 ${className}`}>
        {videos.map((video) => (
          <div
            key={video.id}
            className="overflow-hidden border rounded-md col-span-12 p-2 cursor-pointer group"
            onClick={() => {
              setSelectedVideo(video);
              setIsOpen(true);
            }}
          >
            <div className="relative w-full overflow-hidden rounded-md aspect-video object-cover">
              <img
                src={video.image}
                alt={video.title}
                className="object-cover w-full transition-all duration-300 transform aspect-video group-hover:scale-105"
              />
              <span className="absolute bg-black/50 border-[0.5px] -translate-x-1/2 group-hover:bg-primary bg-primary/80 rounded-full p-1.5 -translate-y-1/2 text-white top-[50%] left-[50%]">
                <Play size={24} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="flex flex-col w-full h-full max-w-full bg-black border-none px-14">
            <DialogTitle className="hidden" />
            <DialogDescription className="hidden" />
            <div className="relative flex-grow">
              <iframe
                src={`${selectedVideo.url}?&autoplay=1`}
                className="w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              size="icon"
              variant="ghost"
              className="absolute right-4 z-50 top-4 border-white text-white rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2"
            >
              <X className="w-8 h-8" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
