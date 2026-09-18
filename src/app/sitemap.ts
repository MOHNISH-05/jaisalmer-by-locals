import type {MetadataRoute} from 'next';
import {brand} from '@/lib/config';
import {paths} from '@/lib/content';
export default function sitemap():MetadataRoute.Sitemap{if(!brand.domain)return [];return paths.map(url=>({url:`${brand.domain}${url}`,lastModified:new Date('2026-09-18'),changeFrequency:url==='/'?'weekly':'monthly',priority:url==='/'?1:url.includes('jaisalmer')?0.8:0.6}))}
