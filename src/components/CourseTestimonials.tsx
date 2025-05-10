
import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  position?: string;
  content: string;
  rating: number;
  avatar?: string;
}

interface CourseTestimonialsProps {
  testimonials: Testimonial[];
}

const CourseTestimonials: React.FC<CourseTestimonialsProps> = ({ testimonials }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-yellow-300 fill-yellow-300'}`}
      />
    ));
  };

  return (
    <div className="py-12 bg-crypto-light/30 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-crypto-blue">Что говорят наши студенты</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Отзывы от реальных людей, которые прошли наш курс и применили полученные знания на практике
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-2">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 italic mb-4">{testimonial.content}</p>
              
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full mr-3 bg-gray-200 overflow-hidden flex items-center justify-center text-gray-500 font-semibold`}>
                  {testimonial.avatar ? (
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  ) : (
                    testimonial.name.charAt(0)
                  )}
                </div>
                <div>
                  <div className="font-medium text-gray-800">{testimonial.name}</div>
                  {testimonial.position && (
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseTestimonials;
