
import React, { useState } from 'react';
import { Check, ChevronDown, ChevronRight, Clock, FileText, Play } from 'lucide-react';
import { Button } from './ui/button';

interface Module {
  title: string;
  description: string;
  duration: string;
  lessons: {
    title: string;
    type: "video" | "text" | "test";
    duration?: string;
  }[];
  color?: string;
}

interface CourseModulesProps {
  modules: Module[];
}

const CourseModules: React.FC<CourseModulesProps> = ({ modules }) => {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const getIconByType = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'test':
        return <Check className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6 text-crypto-blue">Программа курса</h2>
      
      {modules.map((module, index) => {
        const isExpanded = expandedModule === index;
        const moduleColor = module.color || 'bg-blue-500';
        
        return (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
            <button
              onClick={() => toggleModule(index)}
              className={`w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors`}
            >
              <div className="flex items-center">
                <div className={`w-2 h-12 ${moduleColor} rounded-r-full mr-4`}></div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Модуль {index + 1}: {module.title}</h3>
                  <div className="text-sm text-gray-500 flex items-center mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    {module.duration}
                  </div>
                </div>
              </div>
              {isExpanded ? (
                <ChevronDown className="text-gray-500" />
              ) : (
                <ChevronRight className="text-gray-500" />
              )}
            </button>
            
            {isExpanded && (
              <div className="p-4 pt-0 border-t border-gray-100">
                <p className="px-4 py-3 text-gray-600">{module.description}</p>
                
                <div className="mt-4 space-y-2">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} 
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full ${
                          lesson.type === 'video' ? 'bg-blue-100 text-blue-600' :
                          lesson.type === 'test' ? 'bg-green-100 text-green-600' :
                          'bg-purple-100 text-purple-600'
                        } flex items-center justify-center mr-3`}>
                          {getIconByType(lesson.type)}
                        </div>
                        <span>{lesson.title}</span>
                      </div>
                      {lesson.duration && (
                        <span className="text-xs text-gray-500">{lesson.duration}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
      
      <div className="flex justify-center mt-8">
        <Button 
          className="bg-gradient-to-r from-crypto-purple to-crypto-lightPurple hover:from-crypto-lightPurple hover:to-crypto-purple text-white font-semibold px-8 py-6 rounded-lg shadow-md hover:shadow-lg transition-all"
          onClick={() => document.getElementById('signup-form-course')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Записаться на курс
        </Button>
      </div>
    </div>
  );
};

export default CourseModules;
