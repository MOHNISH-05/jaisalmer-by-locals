'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Destinations', href: '/destinations/jaisalmer' },
  { label: 'Packages', href: '/jaisalmer-packages' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Travel Guides', href: '/travel-guides' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

import { folkMilesContact } from '@/lib/contact';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner wrap">
        <Link className="logo" href="/" aria-label="FolkMiles home">
          <Image src="/logo.svg" width={105} height={105} alt="FolkMiles — Explore India by Locals" priority />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="button nav-cta" data-event="plan_trip_click">
          Plan My Trip <ArrowUpRight size={16} />
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
          onKeyDown={(e) => {
            if (e.key === 'Escape') setOpen(false);
          }}
        >
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="button"
            data-event="plan_trip_click"
            onClick={() => setOpen(false)}
            style={{ marginTop: '12px' }}
          >
            Plan My Trip <ArrowUpRight size={16} />
          </Link>
          <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a
              href={folkMilesContact.whatsappUrl}
              className="button secondary"
              target="_blank"
              rel="noopener noreferrer"
              data-event="whatsapp_click"
              onClick={() => setOpen(false)}
            >
              WhatsApp FolkMiles
            </a>
            <a
              href={folkMilesContact.telUrl}
              className="text-link"
              data-event="phone_click"
              onClick={() => setOpen(false)}
              style={{ alignSelf: 'center', marginTop: '6px' }}
            >
              Call {folkMilesContact.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

