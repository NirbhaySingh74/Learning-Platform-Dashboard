import { HomeIcon, BookOpenIcon, CalendarIcon, DocumentTextIcon, AcademicCapIcon, ChatBubbleLeftIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  return (
    <div className="w-20 bg-[#1C1917] h-screen fixed left-0 flex flex-col items-center py-6 text-gray-400">
      <div className="mb-8">
        <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
      </div>
      <nav className="flex flex-col gap-6 items-center flex-1">
        <button className="p-2 rounded-lg hover:bg-gray-800 group">
          <HomeIcon className="w-6 h-6 group-hover:text-white" />
          <span className="text-xs mt-1 block">Main</span>
        </button>
        <button className="p-2 rounded-lg bg-gray-800 text-white group">
          <BookOpenIcon className="w-6 h-6" />
          <span className="text-xs mt-1 block">Courses</span>
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800 group">
          <CalendarIcon className="w-6 h-6 group-hover:text-white" />
          <span className="text-xs mt-1 block">Schedule</span>
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800 group">
          <DocumentTextIcon className="w-6 h-6 group-hover:text-white" />
          <span className="text-xs mt-1 block">Materials</span>
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800 group">
          <AcademicCapIcon className="w-6 h-6 group-hover:text-white" />
          <span className="text-xs mt-1 block">Certificates</span>
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800 group">
          <ChatBubbleLeftIcon className="w-6 h-6 group-hover:text-white" />
          <span className="text-xs mt-1 block">Messages</span>
        </button>
      </nav>
      <div className="mt-auto">
        <button className="p-2 rounded-lg hover:bg-gray-800 group">
          <Cog6ToothIcon className="w-6 h-6 group-hover:text-white" />
          <span className="text-xs mt-1 block">Settings</span>
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800 mt-4 group">
          <ArrowRightOnRectangleIcon className="w-6 h-6 group-hover:text-white" />
          <span className="text-xs mt-1 block">Log out</span>
        </button>
      </div>
    </div>
  );
}