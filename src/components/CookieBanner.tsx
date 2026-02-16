import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const COOKIE_CONSENT_KEY = "cookies_accepted";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
              <Icon name="Cookie" fallback="CircleAlert" size={20} className="text-amber-600" />
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Мы используем файлы cookie для аналитики и улучшения работы сайта. Подробнее
              в{" "}
              <Link
                to="/cookies"
                className="text-primary font-medium hover:underline"
              >
                политике использования cookies
              </Link>
              .
            </p>
          </div>
          <button
            onClick={handleAccept}
            className="shrink-0 px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm sm:text-base whitespace-nowrap"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
