import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Award, Users } from "lucide-react";
import SEOOptimizedLink from './SEOOptimizedLink';

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
    avatar: `/lovable-uploads/e1a3ec33-181e-4a61-8b04-dc41cdaadf84.png?v=${Date.now()}`,
    courses: [
      {
        id: "beginners",
        title: "Криптовалюта для чайников",
        url: "/courses/crypto-for-beginners"
      },
      {
        id: "bitcoin",
        title: "Биткоин и альткоины",
        url: "/courses/bitcoin-and-altcoins"
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
    avatar: `/lovable-uploads/855b84c6-1a09-4f43-bba5-e8241fd1331b.png?v=${Date.now()}`,
    courses: [
      {
        id: "beginners",
        title: "Криптовалюта для чайников",
        url: "/courses/crypto-for-beginners"
      },
      {
        id: "blockchain",
        title: "Блокчейн и криптовалюты",
        url: "/courses/blockchain-and-crypto"
      }
    ]
  },
  {
    id: "gromov",
    name: "Алексей Громов",
    position: "Блокчейн-архитектор",
    bio: "Алексей — ведущий специалист по блокчейн-технологиям с 6-летним опытом. Разработчик DeFi-протоколов и эксперт по смарт-контрактам.",
    experience: [
      "6+ лет опыта в блокчейн-разработке",
      "Архитектор DeFi-проектов",
      "Разработчик смарт-контрактов",
      "Консультант по токеномике"
    ],
    avatar: `/lovable-uploads/1dbf4abc-bae2-4700-990c-ccd769aa7dee.png?v=${Date.now()}`,
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
  },
  {
    id: "seleznev",
    name: "Владимир Селезнёв",
    position: "Стратег криптоинвестиций",
    bio: "Владимир — профессиональный инвестиционный стратег с 5-летним опытом в сфере криптовалют. Специалист по портфельному менеджменту и рисковому анализу.",
    experience: [
      "5+ лет опыта в криптоинвестициях",
      "Портфельный менеджер",
      "Эксперт по управлению рисками",
      "Консультант по диверсификации"
    ],
    avatar: `/lovable-uploads/be9c2565-06f6-45e4-be7b-6195f5863033.png?v=${Date.now()}`,
    courses: [
      {
        id: "premium",
        title: "Премиальная криптошкола",
        url: "/courses/premium-crypto-school"
      }
    ]
  }
];

const InstructorsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="instructors" itemScope itemType="https://schema.org/ItemList">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-2">
          <Users className="text-crypto-purple mr-2" />
          <span className="text-crypto-purple font-medium">Наша команда</span>
        </div>
        <h2 className="section-title mb-12 text-center text-3xl font-bold text-crypto-blue" itemProp="name">Наши преподаватели</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {instructors.map((instructor, index) => (
            <article 
              key={instructor.id} 
              itemScope 
              itemType="https://schema.org/Person" 
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <Card className="border border-gray-200 transition-all duration-200 hover:shadow-md">
                <CardHeader className="text-center pb-2">
                  <Avatar 
                    className="w-24 h-24 mx-auto mb-4 border-2 border-crypto-purple/20"
                    key={`avatar-${instructor.id}-${Date.now()}`}
                  >
                    {instructor.avatar ? (
                      <AvatarImage 
                        src={instructor.avatar} 
                        alt={`Фото преподавателя ${instructor.name}`}
                        itemProp="image"
                        onError={(e) => console.error('Image loading error for', instructor.name, ':', e)}
                      />
                    ) : (
                      <AvatarFallback className="text-2xl font-bold bg-gray-200 text-gray-400">
                        {instructor.name.charAt(0)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <CardTitle className="text-xl text-crypto-blue" itemProp="name">{instructor.name}</CardTitle>
                  <CardDescription className="text-gray-600 font-medium" itemProp="jobTitle">
                    {instructor.position}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-4 text-center">
                  <p className="text-gray-700 mb-4" itemProp="description">{instructor.bio}</p>
                  <div className="mb-4">
                    <div className="flex items-center justify-center mb-2">
                      <Award className="text-crypto-purple mr-2" size={16} />
                      <span className="font-medium text-sm text-gray-700">Ключевые навыки</span>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center" itemProp="knowsAbout">
                      {instructor.experience.slice(0, 2).map((exp, i) => (
                        <span 
                          key={i} 
                          className="text-xs py-1 px-2 bg-crypto-light rounded-full text-crypto-purple"
                          itemProp="hasCredential"
                        >
                          {exp.split(' ').slice(0, 3).join(' ')}
                        </span>
                      ))}
                    </div>
                  </div>
                  {instructor.courses.length > 0 && (
                    <div itemScope itemType="https://schema.org/ItemList">
                      <p className="text-sm font-medium text-gray-700 mb-2">Ведёт курсы:</p>
                      <nav aria-label={`Курсы преподавателя ${instructor.name}`}>
                        <ul className="space-y-1" itemProp="itemListElement">
                          {instructor.courses.map((course, courseIndex) => (
                            <li key={course.id} itemScope itemType="https://schema.org/Course">
                              <meta itemProp="position" content={String(courseIndex + 1)} />
                              <SEOOptimizedLink 
                                to={course.url}
                                className="text-sm text-crypto-purple hover:underline"
                                title={`Перейти к курсу "${course.title}"`}
                              >
                                <span itemProp="name">{course.title}</span>
                              </SEOOptimizedLink>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  )}
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
export { instructors };
