import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../Theme/ThemeToggle";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Facilities", href: "/facilities" },
  { label: "Events & Notices", href: "/events-notices" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact-us" },
];

const Navbar = () => {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const path = location.pathname;
    const link = navLinks.find((link) => link.href === path);
    setActiveLink(link ? link.label : "Home");
  }, [location]);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 bg-navbar-bg transition-all duration-300",
        isScrolled ? "shadow-navbar animate-slide-down" : ""
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-105">
              <GraduationCap className="h-5 w-5 lg:h-6 lg:w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg lg:text-xl text-primary leading-tight">
                Paramount Academy
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Learning is Fun
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setActiveLink(link.label)}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 relative",
                  activeLink === link.label
                    ? "text-navbar-link-active"
                    : "text-navbar-link hover:text-navbar-link-hover",
                  "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-200",
                  "hover:after:w-4/5",
                  activeLink === link.label && "after:w-4/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button - Desktop */}
            <Button
              className="hidden sm:flex bg-cta-bg hover:bg-cta-bg-hover text-cta-text font-medium px-4 lg:px-6 h-10 rounded-full transition-all duration-200 hover:scale-[1.02] shadow-sm"
            >
              <Link to="/admissions">Apply for Admission</Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-10 w-10 text-navbar-link"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-navbar-bg border-t border-border",
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.label);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 animate-fade-in-up",
                  activeLink === link.label
                    ? "text-navbar-link-active bg-secondary"
                    : "text-navbar-link hover:text-navbar-link-hover hover:bg-secondary"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Button
              className="mt-4 w-full bg-cta-bg hover:bg-cta-bg-hover text-cta-text font-medium h-12 rounded-full transition-all duration-200 animate-fade-in-up"
              style={{ animationDelay: `${navLinks.length * 50}ms` }}
            >
              Apply for Admission
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
