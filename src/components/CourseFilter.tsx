import { BiSearch } from 'react-icons/bi';

export default function CourseFilter() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Courses</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg bg-white border-0 focus:ring-2 focus:ring-gray-200"
          />
          <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="flex gap-4 mb-6">
        <button className="px-4 py-2 rounded-lg bg-gray-900 text-white">All</button>
        <button className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-50">Active</button>
        <button className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-50">Completed</button>
      </div>
    </>
  );
}