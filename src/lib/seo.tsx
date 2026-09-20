import type {Metadata} from 'next';
import {brand} from './config';
export function metadata(
  title: string,
  description: string,
  path: string,
  image = '/images/jaisalmer/hero-folkmiles.png'
): Metadata {
  const ogTitle = title.includes('FolkMiles') ? title : `${title} | FolkMiles`;
  const canonicalUrl = brand.domain ? `${brand.domain}${path}` : undefined;
  const imageUrl = brand.domain ? `${brand.domain}${image}` : image;

  return {
    title,
    description,
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
    openGraph: {
      title: ogTitle,
      description,
      type: 'website',
      url: canonicalUrl,
      siteName: 'FolkMiles',
      locale: 'en_IN',
      images: [
        {
          url: imageUrl,
          width: 1916,
          height: 821,
          alt: `${title} — FolkMiles`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [imageUrl],
    },
  };
}
export function JsonLd({value}:{value:unknown}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(value).replace(/</g,'\\u003c')}}/>}
export function BreadcrumbSchema({items}:{items:{label:string;path:string}[]}){if(!brand.domain)return null;return <JsonLd value={{'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{label:'Home',path:'/'},...items].map((x,i)=>({'@type':'ListItem',position:i+1,name:x.label,item:brand.domain+x.path}))}}/>}
