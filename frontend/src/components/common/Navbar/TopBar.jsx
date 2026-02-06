import { Phone, Mail, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-topbar-bg text-topbar-text border-b border-primary-dark/20 animate-fade-in py-1">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-8 text-xs font-medium">
          {/* Contact Info */}
          <div className="flex items-center gap-6">
            {/* Phone */}
            <a
              href="tel:+977-14981034"
              className="flex items-center gap-2 hover:text-topbar-text/80 transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">+977-14981034, 9841575609</span>
              <span className="sm:hidden">Call</span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@paramountacademy.edu.np"
              className="flex items-center gap-2 hover:text-topbar-text/80 transition-colors"
            >
              <Mail className="h-3 w-3" />
              <span className="hidden md:inline">info@paramountacademy.edu.np</span>
              <span className="md:hidden hidden sm:inline">Email</span>
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3" />
            <span className="hidden lg:inline">Tokha-8, Gongabu, Baniyatar, Kathmandu, Nepal</span>
            <span className="hidden sm:inline lg:hidden">Tokha-8, Kathmandu</span>
            <span className="sm:hidden">Location</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
