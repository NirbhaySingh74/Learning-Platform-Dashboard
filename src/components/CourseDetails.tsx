import { AiFillStar } from 'react-icons/ai';
import { BsPlayFill } from 'react-icons/bs';
import { ClockIcon } from '@heroicons/react/24/outline';
import VideoPlayer from './VideoPlayer';

export default function CourseDetails() {
  return (
    <div>
      <VideoPlayer />
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-2">
          {[...Array(4)].map((_, i) => (
            <AiFillStar key={i} className="w-5 h-5 text-yellow-400" />
          ))}
          <span className="text-gray-500">4</span>
          <span className="text-gray-500">(2,891)</span>
          <span className="text-gray-500 ml-4">Intermediate</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">English for career development</h2>
        <p className="text-gray-600 leading-relaxed">
          In this course, you will learn about the job search, application, and interview process in the United States,
          while comparing and contrasting the same process in your home country. This course will also give you the
          opportunity to explore your global career path, while building your vocabulary and improving your language
          skills to achieve your professional goals.
        </p>
        
        <div className="flex items-center gap-4 mt-6">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" 
            alt="Teacher" 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold">Cortney Mc Gregor</h4>
            <p className="text-gray-500">Professional English Teacher</p>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Course's content</h3>
            <span className="text-gray-500">12 lectures • 2 hours</span>
          </div>
          <div className="space-y-4">
            <div className="bg-[#E97451] text-white p-4 rounded-xl flex items-center">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm mb-1">
                  <ClockIcon className="w-4 h-4" />
                  <span>03:29 min</span>
                </div>
                <h4 className="font-semibold">Intro</h4>
                <p className="text-sm opacity-80">Meet your teacher and see what you are going to learn in this course</p>
              </div>
              <button className="p-2 hover:bg-white/20 rounded-full">
                <BsPlayFill className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}