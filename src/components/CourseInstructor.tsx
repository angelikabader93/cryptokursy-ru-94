
import React from 'react';
import { Award, Briefcase, Check } from 'lucide-react';

interface InstructorProps {
  name: string;
  position: string;
  bio: string;
  experience: string[];
  avatar?: string;
}

const CourseInstructor: React.FC<InstructorProps> = ({
  name,
  position,
  bio,
  experience,
  avatar
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-crypto-purple/10 to-crypto-lightPurple/10 p-6">
        <h2 className="text-2xl font-bold mb-6 text-crypto-blue">Преподаватель курса</h2>
        
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">
                {name.charAt(0)}
              </div>
            )}
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-crypto-blue mb-1">{name}</h3>
            <div className="text-gray-600 mb-3 flex items-center justify-center md:justify-start">
              <Briefcase className="w-4 h-4 mr-1" />
              {position}
            </div>
            
            <p className="text-gray-700 mb-4">{bio}</p>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-2">
                <Award className="text-crypto-purple mr-2" size={18} />
                <h4 className="font-semibold text-gray-800">Опыт и достижения</h4>
              </div>
              
              <ul className="space-y-2">
                {experience.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructor;
