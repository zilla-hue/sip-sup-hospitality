import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      {/* <div className="border-b border-white/10">
        <div className="container px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/80 max-w-md">
                Subscribe to our newsletter for the latest hospitality insights,
                trends, and course updates.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-gold focus:ring-1 focus:ring-gold"
                />
                <Button className="bg-gold hover:bg-gold/90 text-primary whitespace-nowrap group">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <p className="text-xs text-white/60 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/images/sip-sup-logo.png"
                alt="SIP-SUP Hospitality Logo"
                width={60}
                height={60}
                className="mr-3"
              />
              <span className="text-xl font-bold">SIP-SUP Hospitality</span>
            </div>
            <p className="text-white/80 mb-6">
              Professional hotel and hospitality management solutions to help
              your business thrive in the competitive hospitality industry.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/sipsup_hospitality?igsh=eXRhcXdsYWY1b2k4"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Courses", href: "/courses" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-colors inline-flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gold mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                {
                  label: "Business Operations",
                  href: "/services/business-operations",
                },

                { label: "HR Services", href: "/services/hr-services" },
                { label: "Training & Development", href: "/services/training" },
                { label: "Professional Courses", href: "/courses" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-colors inline-flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-white/80">
                  502 Dalaba Street, Wuse Zone 5, Abuja, Nigeria
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-white/80">+234 813 800 8337</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-white/80">
                  sipsuphospitality@gmail.com
                </span>
              </li>
            </ul>
            <Button
              className="mt-6 bg-gold hover:bg-gold/90 text-primary"
              asChild
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} SIP-SUP Hospitality. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Separator orientation="vertical" className="h-4 bg-white/20" />
              <Link
                href="/terms-of-service"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Separator orientation="vertical" className="h-4 bg-white/20" />
              <Link
                href="/sitemap"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
