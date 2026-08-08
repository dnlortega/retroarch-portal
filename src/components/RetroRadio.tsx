"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";

export function RetroRadio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Aguardando arquivo bgm.mp3 na pasta public", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-card/90 backdrop-blur-md border border-primary/30 p-4 rounded-2xl shadow-[0_0_20px_rgba(255,0,255,0.2)] flex items-center gap-4 group hover:border-primary transition-colors"
      >
        <audio 
          ref={audioRef} 
          src="/bgm.mp3" 
          loop 
        />
        
        {/* Equalizer Animation */}
        <div className="flex items-end h-6 gap-1 w-6">
          {[...Array(4)].map((_, i) => (
            <motion.div 
              key={i}
              className="w-1 bg-primary rounded-t-sm"
              animate={isPlaying ? {
                height: ["20%", "100%", "40%", "80%", "20%"]
              } : { height: "20%" }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="flex flex-col border-r border-border pr-4 mr-1">
          <span className="text-xs font-bold text-primary flex items-center gap-1">
            <Music className="w-3 h-3" />
            Rádio Retrô
          </span>
          <span className="text-[10px] text-muted-foreground">BGM: bgm.mp3</span>
        </div>

        <button 
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform shadow-[0_0_10px_rgba(255,0,255,0.4)]"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
        </button>

        <div className="flex items-center gap-2">
          <button onClick={toggleMute} className="text-muted-foreground hover:text-white transition-colors">
            {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01" 
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-16 accent-primary h-1 bg-zinc-800 rounded-full appearance-none cursor-pointer"
          />
        </div>
      </motion.div>
    </div>
  );
}
