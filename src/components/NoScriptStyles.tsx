
import React from 'react';

const NoScriptStyles = () => {
  return (
    <noscript>
      <style>
        {`
          /* Enhanced styles for no-JavaScript fallback */
          .crypto-card {
            background: white;
            padding: 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
            border: 1px solid #e5e7eb;
            margin-bottom: 1rem;
            transition: none;
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
            color: #8b5cf6; /* Fallback for browsers that don't support background-clip */
          }
          
          /* Hide elements that require JavaScript */
          [data-requires-js] {
            display: none !important;
          }
          
          /* Show alternative content */
          .noscript-alternative {
            display: block !important;
          }
          
          /* Enhanced color scheme */
          .text-crypto-blue { color: #1e40af !important; }
          .text-crypto-purple { color: #8b5cf6 !important; }
          .text-crypto-orange { color: #f97316 !important; }
          .bg-crypto-light { background-color: #f1f5f9 !important; }
          .bg-crypto-purple { background-color: #8b5cf6 !important; }
          .bg-crypto-orange { background-color: #f97316 !important; }
          
          /* Navigation without JavaScript */
          .nav-link {
            display: inline-block;
            padding: 0.5rem 1rem;
            color: #374151;
            text-decoration: none;
            border-radius: 0.25rem;
            transition: none;
          }
          .nav-link:hover {
            background-color: #f3f4f6;
            color: #8b5cf6;
          }
          
          /* Enhanced form styles */
          .form-field {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #d1d5db;
            border-radius: 0.375rem;
            font-size: 1rem;
            margin-bottom: 1rem;
            box-sizing: border-box;
          }
          
          .form-field:focus {
            outline: none;
            border-color: #8b5cf6;
            box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
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
            font-size: 1rem;
            transition: none;
          }
          
          .form-button:hover {
            background-color: #7c3aed;
          }
          
          .form-button:active {
            background-color: #6d28d9;
          }
          
          /* Enhanced grid layout */
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
          
          /* Button styles */
          .btn-primary-noscript {
            background: linear-gradient(to right, #f97316, #ea580c);
            color: white;
            padding: 0.75rem 1.5rem;
            text-decoration: none;
            border-radius: 0.375rem;
            font-weight: 600;
            display: inline-block;
            text-align: center;
            border: none;
            cursor: pointer;
            transition: none;
          }
          
          .btn-primary-noscript:hover {
            background: linear-gradient(to right, #ea580c, #dc2626);
          }
          
          .btn-secondary-noscript {
            background: linear-gradient(to right, #8b5cf6, #7c3aed);
            color: white;
            padding: 0.75rem 1.5rem;
            text-decoration: none;
            border-radius: 0.375rem;
            font-weight: 600;
            display: inline-block;
            text-align: center;
            border: none;
            cursor: pointer;
            transition: none;
          }
          
          .btn-secondary-noscript:hover {
            background: linear-gradient(to right, #7c3aed, #6d28d9);
          }
          
          /* Hero section */
          .hero-noscript {
            background: linear-gradient(to right, #8b5cf6, #a855f7);
            color: white;
            padding: 4rem 0;
            text-align: center;
          }
          
          .hero-noscript h1 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            line-height: 1.2;
          }
          
          .hero-noscript p {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }
          
          /* Card enhancements */
          .card-noscript {
            background: white;
            border-radius: 0.5rem;
            padding: 1.5rem;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
            border: 1px solid #e5e7eb;
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          
          .card-noscript h3 {
            color: #1e40af;
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }
          
          .card-noscript p {
            color: #6b7280;
            margin-bottom: 1rem;
            flex-grow: 1;
          }
          
          /* Price display */
          .price-noscript {
            font-size: 1.5rem;
            font-weight: bold;
            color: #1e40af;
            margin: 1rem 0;
          }
          
          /* Mobile responsiveness */
          @media (max-width: 768px) {
            .hero-noscript h1 {
              font-size: 2rem;
            }
            
            .hero-noscript p {
              font-size: 1rem;
            }
            
            .grid-noscript {
              grid-template-columns: 1fr;
            }
          }
          
          /* Accessibility improvements */
          .sr-only-noscript {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }
          
          /* Focus styles */
          a:focus,
          button:focus,
          input:focus,
          select:focus {
            outline: 2px solid #8b5cf6;
            outline-offset: 2px;
          }
        `}
      </style>
    </noscript>
  );
};

export default NoScriptStyles;
