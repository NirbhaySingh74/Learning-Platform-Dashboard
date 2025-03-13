import { BsPlay } from 'react-icons/bs';
import { SpeakerWaveIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline';

export default function VideoPlayer() {
  return (
    <div className="relative rounded-xl overflow-hidden bg-black">
      <img 
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
        alt="Course video"
        className="w-full h-[400px] object-cover opacity-90"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-t from-black/50">
        <div className="flex items-center gap-4 text-white">
          <span className="text-sm">00:15</span>
          <div className="w-80 h-1 bg-white/30 rounded-full">
            <div className="w-1/4 h-full bg-white rounded-full"></div>
          </div>
          <span className="text-sm">01:38</span>
        </div>
        <div className="flex items-center gap-3 text-white">
          <button className="p-2 hover:bg-white/20 rounded-full">
            <BsPlay className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-white/20 rounded-full">
            <SpeakerWaveIcon className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-white/20 rounded-full">
            <ArrowsPointingOutIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}