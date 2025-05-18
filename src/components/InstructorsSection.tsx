
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Award, Users } from "lucide-react";
import { Link } from 'react-router-dom';

interface Instructor {
  id: string;
  name: string;
  position: string;
  bio: string;
  experience: string[];
  avatar?: string;
  courses: {
    id: string;
    title: string;
    url: string;
  }[];
}

const instructors: Instructor[] = [
  {
    id: "efimov",
    name: "Александр Ефимов",
    position: "Крипто-аналитик",
    bio: "Александр — опытный крипто-аналитик с 7-летним стажем. Автор многочисленных исследований рынка криптовалют.",
    experience: [
      "7+ лет опыта в анализе криптовалют",
      "Консультант по инвестициям в криптовалюты",
      "Участник международных конференций",
      "Разработчик инвестиционных стратегий"
    ],
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    courses: [
      {
        id: "beginners",
        title: "Криптовалюта для чайников",
        url: "/courses/crypto-for-beginners"
      },
      {
        id: "premium",
        title: "Премиальная криптошкола",
        url: "/courses/premium-crypto-school"
      }
    ]
  },
  {
    id: "zubkov",
    name: "Александр Зубков",
    position: "Трейдер криптовалют",
    bio: "Профессиональный трейдер с опытом работы на различных криптовалютных биржах более 8 лет. Специалист по техническому анализу.",
    experience: [
      "8+ лет опыта трейдинга криптовалют",
      "Разработчик торговых стратегий",
      "Технический аналитик",
      "Эксперт по блокчейн-технологиям"
    ],
    avatar: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    courses: [
      {
        id: "bitcoin",
        title: "Биткоин и альткоины",
        url: "/courses/bitcoin-and-altcoins"
      },
      {
        id: "blockchain",
        title: "Блокчейн и криптовалюты",
        url: "/courses/blockchain-and-crypto"
      }
    ]
  }
];

const InstructorsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="instructors">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-2">
          <Users className="text-crypto-purple mr-2" />
          <span className="text-crypto-purple font-medium">Наша команда</span>
        </div>
        <h2 className="section-title mb-12 text-center text-3xl font-bold text-crypto-blue">Наши преподаватели</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {instructors.map((instructor) => (
            <Card key={instructor.id} className="border border-gray-200 transition-all duration-200 hover:shadow-md">
              <CardHeader className="text-center pb-2">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-crypto-purple/20">
                  {instructor.avatar ? (
                    <AvatarImage src={instructor.avatar} alt={instructor.name} />
                  ) : (
                    <AvatarFallback className="text-2xl font-bold bg-gray-200 text-gray-400">
                      {instructor.name.charAt(0)}
                    </AvatarFallback>
                  )}
                </Avatar>
                <CardTitle className="text-xl text-crypto-blue">{instructor.name}</CardTitle>
                <CardDescription className="text-gray-600 font-medium">
                  {instructor.position}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-4 text-center">
                <p className="text-gray-700 mb-4">{instructor.bio}</p>
                <div className="mb-4">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="text-crypto-purple mr-2" size={16} />
                    <span className="font-medium text-sm text-gray-700">Ключевые навыки</span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {instructor.experience.slice(0, 2).map((exp, i) => (
                      <span 
                        key={i} 
                        className="text-xs py-1 px-2 bg-crypto-light rounded-full text-crypto-purple"
                      >
                        {exp.split(' ').slice(0, 3).join(' ')}
                      </span>
                    ))}
                  </div>
                </div>
                {instructor.courses.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Ведёт курсы:</p>
                    <ul className="space-y-1">
                      {instructor.courses.map(course => (
                        <li key={course.id}>
                          <Link 
                            to={course.url} 
                            className="text-sm text-crypto-purple hover:underline"
                          >
                            {course.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
export { instructors };
