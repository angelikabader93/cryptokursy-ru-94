
import React from 'react';
import CourseLayout from '@/components/CourseLayout';
import { Check, Users, Award, BookOpen, Clock, Zap, AlertCircle } from 'lucide-react';
import CourseModules from '@/components/CourseModules';
import CourseTestimonials from '@/components/CourseTestimonials';
import CourseFAQ from '@/components/CourseFAQ';
import CourseInstructor from '@/components/CourseInstructor';

const BitcoinCoursePage = () => {
  // Course modules data
  const modules = [
    {
      title: "Основы Bitcoin",
      description: "История создания, принципы работы, техническая архитектура.",
      duration: "90 минут",
      color: "bg-orange-500",
      lessons: [
        { title: "История создания Bitcoin", type: "video" as const, duration: "18 мин" },
        { title: "Белая книга Сатоши Накамото", type: "video" as const, duration: "22 мин" },
        { title: "Архитектура сети Bitcoin", type: "video" as const, duration: "25 мин" },
        { title: "Как работают транзакции", type: "video" as const, duration: "25 мин" },
        { title: "Проверочный тест", type: "test" as const }
      ]
    },
    {
      title: "Майнинг и консенсус",
      description: "Процесс майнинга, алгоритмы консенсуса Proof-of-Work, сложность сети.",
      duration: "120 минут",
      color: "bg-yellow-500",
      lessons: [
        { title: "Что такое майнинг", type: "video" as const, duration: "20 мин" },
        { title: "Алгоритм Proof-of-Work", type: "video" as const, duration: "25 мин" },
        { title: "Сложность сети и хешрейт", type: "video" as const, duration: "20 мин" },
        { title: "Энергопотребление Bitcoin", type: "video" as const, duration: "25 мин" },
        { title: "Альтернативные алгоритмы", type: "video" as const, duration: "30 мин" },
        { title: "Тест по майнингу", type: "test" as const }
      ]
    },
    {
      title: "Безопасность и анонимность",
      description: "Криптография, приватные и публичные ключи, защита от атак.",
      duration: "90 минут",
      color: "bg-red-500",
      lessons: [
        { title: "Основы криптографии", type: "video" as const, duration: "15 мин" },
        { title: "Приватные и публичные ключи", type: "video" as const, duration: "20 мин" },
        { title: "Адреса Bitcoin", type: "video" as const, duration: "15 мин" },
        { title: "Анонимность в Bitcoin", type: "video" as const, duration: "20 мин" },
        { title: "Защита от атак", type: "video" as const, duration: "20 мин" },
        { title: "Практическое задание", type: "test" as const }
      ]
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Иван П.",
      position: "Инженер",
      content: "Курс помог разобраться в технических деталях Bitcoin. Особенно полезны модули про майнинг и безопасность.",
      rating: 5
    },
    {
      name: "Светлана М.",
      position: "Финансист",
      content: "Отличный курс для понимания основ Bitcoin. Рекомендую всем, кто хочет разобраться в криптовалютах.",
      rating: 4
    },
    {
      name: "Алексей К.",
      position: "Предприниматель",
      content: "Курс дал понимание, как работает Bitcoin изнутри. Теперь я увереннее принимаю решения об инвестициях.",
      rating: 5
    }
  ];

  // FAQ data
  const faqItems = [
    {
      question: "Нужны ли специальные знания для прохождения курса?",
      answer: "Нет, курс предназначен для начинающих и не требует специальных знаний."
    },
    {
      question: "Сколько времени занимает прохождение курса?",
      answer: "Курс рассчитан на 3-4 недели, в зависимости от вашего темпа обучения."
    },
    {
      question: "Будет ли поддержка от преподавателей?",
      answer: "Да, вы можете задавать вопросы преподавателям в течение всего курса."
    },
    {
      question: "Предоставляется ли сертификат по окончании курса?",
      answer: "Да, после успешного завершения курса вы получите сертификат."
    },
    {
      question: "Можно ли скачать материалы курса?",
      answer: "Да, все материалы курса доступны для скачивания."
    }
  ];

  return (
    <CourseLayout
      courseTitle="Bitcoin для начинающих"
      courseImage="https://images.unsplash.com/photo-1606143509433-949c317f3905?q=80&w=2070"
      courseSlug="bitcoin-for-beginners"
      level="Новичок"
      price="Бесплатно"
    >
      <div className="space-y-12 bg-white p-6 rounded-lg shadow-md">
        {/* Introduction Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-crypto-blue flex items-center gap-2">
            <BookOpen className="inline-block text-crypto-purple" size={24} />
            О чем этот курс?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Курс <strong className="text-gradient bg-gradient-to-r from-crypto-purple to-crypto-lightPurple">"Bitcoin для начинающих"</strong>
            — это ваш первый шаг в мир криптовалют. Вы узнаете историю создания Bitcoin, принципы его работы
            и основные понятия, необходимые для понимания этой технологии.
          </p>

          {/* Highlighted Box */}
          <div className="bg-gradient-to-r from-orange-50 to-white mt-6 p-6 rounded-lg border-l-4 border-orange-500 shadow-sm">
            <div className="font-medium text-orange-700 mb-2 text-lg">Что вы получите, пройдя этот курс:</div>
            <p className="text-gray-700">
              Понимание основ Bitcoin, умение безопасно хранить и использовать криптовалюту, а также знания
              для дальнейшего изучения мира блокчейна.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Check className="text-orange-500" />
                </div>
                <span className="text-sm text-gray-700">15 видео-уроков</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Check className="text-orange-500" />
                </div>
                <span className="text-sm text-gray-700">5 практических заданий</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Check className="text-orange-500" />
                </div>
                <span className="text-sm text-gray-700">3 часа контента</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Check className="text-orange-500" />
                </div>
                <span className="text-sm text-gray-700">Сертификат о прохождении</span>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Learn Section */}
        <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-crypto-blue flex items-center gap-2">
            <Award className="inline-block text-orange-600" size={24} />
            Что вы изучите:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-orange-500 mt-1 flex-shrink-0 bg-orange-100 p-1 rounded-full" />
                <span className="text-gray-700">История создания Bitcoin и его основные принципы</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-orange-500 mt-1 flex-shrink-0 bg-orange-100 p-1 rounded-full" />
                <span className="text-gray-700">Как работает сеть Bitcoin и процесс майнинга</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-orange-500 mt-1 flex-shrink-0 bg-orange-100 p-1 rounded-full" />
                <span className="text-gray-700">Как безопасно хранить и использовать Bitcoin</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-orange-500 mt-1 flex-shrink-0 bg-orange-100 p-1 rounded-full" />
                <span className="text-gray-700">Основные понятия и термины, связанные с Bitcoin</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-orange-500 mt-1 flex-shrink-0 bg-orange-100 p-1 rounded-full" />
                <span className="text-gray-700">Как защитить себя от мошенничества и кражи Bitcoin</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-orange-500 mt-1 flex-shrink-0 bg-orange-100 p-1 rounded-full" />
                <span className="text-gray-700">Перспективы развития Bitcoin и его влияние на финансовый мир</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Course Modules */}
        <CourseModules modules={modules} />

        {/* Who This Course Is For */}
        <div className="bg-orange-50 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-orange-700 flex items-center gap-2">
            <Users className="inline-block text-orange-600" size={24} />
            Для кого этот курс?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-orange-500 mt-1 flex-shrink-0 bg-orange-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-orange-800 text-lg">Для новичков</h4>
                  <p className="text-gray-600">Для тех, кто только начинает знакомиться с криптовалютами</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-orange-500 mt-1 flex-shrink-0 bg-orange-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-orange-800 text-lg">Для инвесторов</h4>
                  <p className="text-gray-600">Для тех, кто хочет понять, стоит ли инвестировать в Bitcoin</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-orange-500 mt-1 flex-shrink-0 bg-orange-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-orange-800 text-lg">Для энтузиастов</h4>
                  <p className="text-gray-600">Для тех, кто интересуется технологией блокчейн и ее применением</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-orange-500 mt-1 flex-shrink-0 bg-orange-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-orange-800 text-lg">Для всех</h4>
                  <p className="text-gray-600">Для тех, кто хочет быть в курсе современных финансовых технологий</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Testimonials */}
        <CourseTestimonials testimonials={testimonials} />

        {/* Course Instructor */}
        <CourseInstructor
          name="Екатерина Смирнова"
          position="Крипто-аналитик"
          bio="Екатерина — опытный крипто-аналитик с 5-летним стажем. Автор популярного блога о криптовалютах и блокчейне."
          experience={[
            "5+ лет опыта в анализе криптовалют",
            "Автор статей о Bitcoin и блокчейне",
            "Участник международных конференций",
            "Консультант по инвестициям в криптовалюты"
          ]}
        />

        {/* Course Advantages */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-crypto-blue flex items-center gap-2">
            <Zap className="inline-block text-crypto-purple" size={24} />
            Преимущества нашего курса:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-crypto-purple/5 to-white p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">1</div>
                Простота изложения
              </h3>
              <p className="text-gray-700">Материал изложен простым и понятным языком, без сложных технических терминов</p>
            </div>

            <div className="bg-gradient-to-r from-crypto-purple/5 to-white p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">2</div>
                Практические примеры
              </h3>
              <p className="text-gray-700">Каждый урок содержит практические примеры и задания для закрепления материала</p>
            </div>

            <div className="bg-gradient-to-r from-crypto-purple/5 to-white p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">3</div>
                Актуальная информация
              </h3>
              <p className="text-gray-700">Курс содержит самую актуальную информацию о Bitcoin и блокчейне на сегодняшний день</p>
            </div>

            <div className="bg-gradient-to-r from-crypto-purple/5 to-white p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">4</div>
                Поддержка экспертов
              </h3>
              <p className="text-gray-700">Вы всегда можете задать вопросы преподавателям и получить квалифицированную помощь</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <CourseFAQ faqItems={faqItems} />

        {/* Warning Box */}
        <div className="bg-orange-50 border-l-4 border-crypto-orange p-5 rounded-r-lg">
          <div className="flex items-start">
            <AlertCircle className="text-crypto-orange mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-crypto-orange">Важно помнить</h4>
              <p className="text-sm text-gray-700 mt-1">
                Инвестиции в криптовалюты сопряжены с риском. Всегда проводите собственное исследование перед
                инвестированием.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CourseLayout>
  );
};

export default BitcoinCoursePage;
