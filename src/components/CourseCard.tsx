import { AiFillStar } from 'react-icons/ai';

interface Course {
  title: string;
  description: string;
  rating: number;
  reviews: string;
  level: string;
  image: string;
}

export default function CourseCard({ title, description, rating, reviews, level, image }: Course) {
  return (
    <div className="flex gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-24 h-24 rounded-lg object-cover" />
      <img src={image} alt={title} className="w-24 h-24 rounded-lg object-cover" />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{description}</p>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`} />
            ))}
            <span className="ml-2 text-sm text-gray-500">{reviews}</span>
          </div>
          <span className="text-sm text-gray-500">{level}</span>
        </div>
      </div>
    </div>
  );
}