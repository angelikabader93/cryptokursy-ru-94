
import React from 'react';
import { Button } from '@/components/ui/button';

interface SEOOptimizedButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "crypto" | "cryptoOrange";
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  title?: string;
}

const SEOOptimizedButton: React.FC<SEOOptimizedButtonProps> = ({ 
  href,
  onClick,
  children,
  className = "",
  variant = "default",
  type = "button",
  ariaLabel,
  title
}) => {
  // Если есть href, рендерим как ссылку для SEO
  if (href) {
    return (
      <a 
        href={href}
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${className}`}
        aria-label={ariaLabel}
        title={title}
        style={{
          height: '2.5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          backgroundColor: variant === 'crypto' ? '#8b5cf6' : variant === 'cryptoOrange' ? '#f97316' : '#0f172a',
          color: 'white',
          textDecoration: 'none'
        }}
      >
        {children}
      </a>
    );
  }

  // Обычная кнопка с JavaScript
  return (
    <Button 
      variant={variant}
      className={className}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      title={title}
    >
      {children}
    </Button>
  );
};

export default SEOOptimizedButton;
