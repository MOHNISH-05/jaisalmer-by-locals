import type {Metadata} from 'next';
import {brand} from './config';
export function metadata(title:string,description:string,path:string):Metadata{return {title,description,alternates:brand.domain?{canonical:`${brand.domain}${path}`}:undefined,openGraph:{title:`${title} | FolkMiles`,description,type:'website',...(brand.domain?{url:`${brand.domain}${path}`}:{})},twitter:{card:'summary',title:`${title} | FolkMiles`,description}}}
export function JsonLd({value}:{value:unknown}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(value).replace(/</g,'\\u003c')}}/>}
export function BreadcrumbSchema({items}:{items:{label:string;path:string}[]}){if(!brand.domain)return null;return <JsonLd value={{'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{label:'Home',path:'/'},...items].map((x,i)=>({'@type':'ListItem',position:i+1,name:x.label,item:brand.domain+x.path}))}}/>}
