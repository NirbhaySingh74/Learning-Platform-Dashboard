import Sidebar from './components/Sidebar';
import CourseFilter from './components/CourseFilter';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F1EE]">
      <Sidebar />
      <div className="ml-20 p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-[1fr,1.5fr] gap-8">
          <div>
            <CourseFilter />
            <CourseList />
          </div>
          <CourseDetails />
        </div>
      </div>
    </div>
  );
}

export default App;