import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Analytics } from '@/components/analytics';
import {brand} from '@/lib/config';
import {JsonLd} from '@/lib/seo';
import './globals.css';
export const metadata:Metadata={title:{default:'FolkMiles | Explore by Locals',template:'%s | FolkMiles'},description:'Local-led journeys across India, beginning with private Jaisalmer trips, desert experiences and heritage walks.',...(brand.domain?{metadataBase:new URL(brand.domain)}:{}),icons:{icon:'/logo.svg'},robots:{index:process.env.PUBLIC_LAUNCH_READY==='true',follow:true},verification:{google:process.env.GOOGLE_SITE_VERIFICATION||undefined}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-IN"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><Analytics/><JsonLd value={{'@context':'https://schema.org','@type':['TravelAgency','Organization'],name:'FolkMiles',slogan:'Explore by Locals',...(brand.domain?{url:brand.domain,logo:`${brand.domain}/logo.svg`}:{}),...(brand.email?{email:brand.email}:{}),areaServed:{'@type':'City',name:'Jaisalmer'}}}/></body></html>}
