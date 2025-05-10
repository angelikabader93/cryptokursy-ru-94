
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface CourseFAQProps {
  faqItems: FAQItem[];
  theme?: 'light' | 'dark';
}

const CourseFAQ: React.FC<CourseFAQProps> = ({ 
  faqItems,
  theme = 'light' 
}) => {
  return (
    <div className={`rounded-xl ${theme === 'light' ? 'bg-white' : 'bg-crypto-light'} p-6 shadow-md`}>
      <h2 className="text-2xl font-bold mb-6 text-crypto-blue">Часто задаваемые вопросы</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100">
            <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-crypto-purple">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CourseFAQ;
