
import React from 'react';

const NoScriptStyles = () => {
  return (
    <noscript>
      <style>
        {`
          /* Базовые стили для работы без JavaScript */
          .crypto-card {
            background: white;
            padding: 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
            border: 1px solid #e5e7eb;
            margin-bottom: 1rem;
          }
          
          .section-title {
            font-size: 2rem;
            font-weight: bold;
            color: #1e40af;
            margin-bottom: 2rem;
            text-align: center;
          }
          
          .text-gradient {
            background: linear-gradient(to right, #8b5cf6, #a855f7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          /* Скрываем элементы, требующие JavaScript */
          [data-requires-js] {
            display: none !important;
          }
          
          /* Показываем альтернативный контент */
          .noscript-alternative {
            display: block !important;
          }
          
          /* Базовые цвета темы */
          .text-crypto-blue { color: #1e40af; }
          .text-crypto-purple { color: #8b5cf6; }
          .text-crypto-orange { color: #f97316; }
          .bg-crypto-light { background-color: #f1f5f9; }
          .bg-crypto-purple { background-color: #8b5cf6; }
          .bg-crypto-orange { background-color: #f97316; }
          
          /* Навигация без JavaScript */
          .nav-link {
            display: inline-block;
            padding: 0.5rem 1rem;
            color: #374151;
            text-decoration: none;
            border-radius: 0.25rem;
            transition: background-color 0.2s;
          }
          .nav-link:hover {
            background-color: #f3f4f6;
          }
          
          /* Формы без JavaScript */
          .form-field {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #d1d5db;
            border-radius: 0.375rem;
            font-size: 1rem;
            margin-bottom: 1rem;
          }
          
          .form-button {
            background-color: #8b5cf6;
            color: white;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 0.375rem;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
          }
          
          .form-button:hover {
            background-color: #7c3aed;
          }
          
          /* Сетка без JavaScript */
          .grid-noscript {
            display: grid;
            gap: 1.5rem;
          }
          
          @media (min-width: 768px) {
            .grid-noscript {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (min-width: 1024px) {
            .grid-noscript {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}
      </style>
    </noscript>
  );
};

export default NoScriptStyles;
