
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Алексей Смирнов",
    position: "Начинающий инвестор",
    testimonial: "Я ничего не знал о криптовалютах до того, как нашел эти курсы. Теперь я уверенно инвестирую в биткоин и другие альткоины.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Елена Петрова",
    position: "Предприниматель",
    testimonial: "Благодаря премиальной криптошколе я смогла диверсифицировать свой бизнес и начать принимать криптовалюту как способ оплаты.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Дмитрий Козлов",
    position: "IT-специалист",
    testimonial: "Раздел о блокчейне был особенно полезным. Я смог глубже понять технологию и даже начал разрабатывать свои смарт-контракты.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Что говорят наши студенты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="crypto-card">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              
              <blockquote className="relative">
                <span className="text-6xl text-crypto-purple/20 absolute top-0 left-0">"</span>
                <p className="text-gray-700 italic pl-6 pt-3">
                  {testimonial.testimonial}
                </p>
              </blockquote>
              
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
