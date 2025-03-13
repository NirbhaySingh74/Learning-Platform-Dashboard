import CourseCard from './CourseCard';
import LanguageButton from './LanguageButton';
import { courses } from '../data/courses';

export default function CourseList() {
  return (
    <>
      <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
        <LanguageButton country="GB" language="English" flag="https://flagcdn.com/w40/gb.png" />
        <LanguageButton country="ES" language="Spanish" flag="https://flagcdn.com/w40/es.png" />
        <LanguageButton country="FR" language="French" flag="https://flagcdn.com/w40/fr.png" />
        <LanguageButton country="CN" language="Chinese" flag="https://flagcdn.com/w40/cn.png" />
      </div>
      <div className="space-y-4">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </>
  );
}