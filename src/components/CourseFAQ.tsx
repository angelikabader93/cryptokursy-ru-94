
import React from 'react';
import { Link } from 'react-router-dom';
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
  showLink?: boolean;
}

// Function to format the answer text with proper HTML formatting
const formatAnswer = (text: string) => {
  // Replace numbered lists (e.g., "1) Item" or "1. Item")
  let formattedText = text.replace(/(\d+[\)\.])\s+([^\n]+)(?:\n|$)/g, '<div class="mb-1"><span class="font-medium">$1</span> $2</div>');
  
  // Replace bullet points (e.g., "- Item" or "• Item")
  formattedText = formattedText.replace(/[•\-]\s+([^\n]+)(?:\n|$)/g, '<div class="flex mb-1"><span class="mr-2">•</span><span>$1</span></div>');
  
  // Emphasis for important terms
  formattedText = formattedText.replace(/«([^»]+)»/g, '<em class="text-crypto-purple">$1</em>');
  
  // Add line breaks for paragraphs
  formattedText = formattedText.replace(/\n\n/g, '</p><p class="mb-2">');
  
  return <div dangerouslySetInnerHTML={{ __html: `<p class="mb-2">${formattedText}</p>` }} />;
};

const CourseFAQ: React.FC<CourseFAQProps> = ({ 
  faqItems,
  theme = 'light',
  showLink = true
}) => {
  return (
    <div className={`rounded-xl ${theme === 'light' ? 'bg-white' : 'bg-crypto-light'} p-6 shadow-md`}>
      <h2 className="text-2xl font-bold mb-6 text-crypto-blue">Часто задаваемые вопросы</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100">
            <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-crypto-purple py-4">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 bg-gray-50 rounded-md p-4 my-1">
              {formatAnswer(item.answer)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      {showLink && (
        <div className="mt-6 text-center">
          <Link 
            to="/faq" 
            className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-md text-crypto-purple border border-crypto-purple/20 hover:bg-crypto-light/50 hover:border-crypto-purple/30 transition-all duration-200"
          >
            Больше вопросов и ответов →
          </Link>
        </div>
      )}
    </div>
  );
};

export default CourseFAQ;
