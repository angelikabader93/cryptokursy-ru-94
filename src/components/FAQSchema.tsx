
import React from 'react';
import StructuredData from './StructuredData';

const FAQSchema = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Что такое криптовалюта?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Криптовалюта — это цифровая валюта, которая использует криптографию для обеспечения безопасности транзакций и контроля создания новых единиц. Самая известная криптовалюта — биткоин."
        }
      },
      {
        "@type": "Question", 
        "name": "Нужны ли специальные знания для обучения?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Нет, наши курсы разработаны для людей с любым уровнем подготовки. Мы начинаем с самых основ и постепенно переходим к более сложным темам."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько времени займет обучение?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Продолжительность зависит от выбранного курса. Базовый курс можно пройти за 2-3 недели, более продвинутые программы могут занять до 2-3 месяцев."
        }
      },
      {
        "@type": "Question",
        "name": "Выдается ли сертификат?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, по окончании курса вы получите сертификат о прохождении обучения, который подтверждает ваши знания в области криптовалют и блокчейна."
        }
      }
    ]
  };

  return <StructuredData data={faqData} />;
};

export default FAQSchema;
