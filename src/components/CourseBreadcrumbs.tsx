
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface Breadcrumb {
  name: string;
  href?: string;
}

interface CourseBreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const CourseBreadcrumbs: React.FC<CourseBreadcrumbsProps> = ({ breadcrumbs }) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      ...(crumb.href && { "item": `https://cryptokursy.ru${crumb.href}` })
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <nav className="text-left mb-8 text-white/80 text-sm" aria-label="Хлебные крошки">
        {breadcrumbs.map((crumb, index) => (
          <span key={index}>
            {crumb.href ? (
              <Link to={crumb.href} className="hover:text-white transition-colors">
                {crumb.name}
              </Link>
            ) : (
              <span>{crumb.name}</span>
            )}
            {index < breadcrumbs.length - 1 && <span className="mx-2">›</span>}
          </span>
        ))}
      </nav>
    </>
  );
};

export default CourseBreadcrumbs;
