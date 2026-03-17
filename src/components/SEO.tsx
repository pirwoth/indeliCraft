import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: string;
}

const SITE = "https://indelicraft.com";
const BRAND = "IndeliCraft & Works Ltd";

const SEO = ({ title, description, path, type = "website" }: SEOProps) => {
  const fullTitle = path === "/" ? title : `${title} | ${BRAND}`;
  const url = `${SITE}${path}`;

  // Override the document title on the client so the browser tab shows only the favicon.
  // We keep the `<title>` element for crawlers/SEO but hide it visually in the tab.
  useEffect(() => {
    try {
      document.title = '\u200B';
    } catch (e) {
      // ignore in environments without document
    }
  }, [fullTitle]);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={BRAND} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
