import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

interface HeaderProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
  onContactClick: () => void;
}

export const Header = ({ 
  activeSection, 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  scrollToSection, 
  onContactClick 
}: HeaderProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <Icon name="Scale" className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold text-gradient">БезДолгов59</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("hero")} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">О компании</button>
            <button onClick={() => scrollToSection("cases")} className="text-sm font-medium hover:text-primary transition-colors">Кейсы</button>
            <button onClick={() => scrollToSection("reviews")} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
            <a href="/blog" className="text-sm font-medium hover:text-primary transition-colors">Блог</a>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://t.me/Bez_Dolgov_All" target="_blank" rel="noopener noreferrer" className="hidden sm:flex w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 hover:opacity-80 transition-opacity items-center justify-center">
              <Icon name="Send" size={18} className="text-white" />
            </a>
            <a href="https://vk.com/bezdolgov59" target="_blank" rel="noopener noreferrer" className="hidden sm:flex w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 hover:opacity-80 transition-opacity items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.45 14.8c-.43.46-1.23.72-2.38.76-.39.01-.82.02-1.28.02-1.18 0-2.04-.08-2.56-.23-.69-.2-1.23-.54-1.65-1.03-.42-.49-.74-1.18-1.01-2.09l-.01-.04c-.15-.51-.28-.99-.4-1.43-.37-1.36-.56-2.05-1.16-2.05-.06 0-.16.02-.32.08-.15.06-.32.15-.51.28l-.39-.49c.24-.21.48-.42.72-.62.42-.36.77-.61 1.02-.74.45-.24.88-.36 1.28-.38.85-.04 1.37.5 1.58 1.61.22 1.21.37 1.97.45 2.27.24 1.07.5 1.61.8 1.61.23 0 .58-.36 1.04-1.09.46-.72.71-1.27.75-1.64.07-.61-.18-0.92-.74-.92-.26 0-.53.06-.82.17.54-1.77 1.58-2.63 3.11-2.59 1.13.03 1.66.77 1.6 2.21-.04.89-.35 1.86-0.94 2.91-.56 1-.84 1.64-.84 1.93 0 .19.08.38.25.57.17.19.47.43.91.72.43.29.76.51.98.66.85.57 1.29 1.08 1.32 1.54.04.7-.31 1.05-1.05 1.05-.22 0-.49-.08-.82-.25z"/>
              </svg>
            </a>
            <Button onClick={onContactClick} className="hidden sm:flex gradient-primary hover:opacity-90 transition-opacity">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <button onClick={() => scrollToSection("hero")} className="text-left text-lg font-medium hover:text-primary transition-colors py-3 border-b">Главная</button>
                  <button onClick={() => scrollToSection("services")} className="text-left text-lg font-medium hover:text-primary transition-colors py-3 border-b">Услуги</button>
                  <button onClick={() => scrollToSection("about")} className="text-left text-lg font-medium hover:text-primary transition-colors py-3 border-b">О компании</button>
                  <button onClick={() => scrollToSection("cases")} className="text-left text-lg font-medium hover:text-primary transition-colors py-3 border-b">Кейсы</button>
                  <button onClick={() => scrollToSection("reviews")} className="text-left text-lg font-medium hover:text-primary transition-colors py-3 border-b">Отзывы</button>
                  <a href="/blog" className="text-left text-lg font-medium hover:text-primary transition-colors py-3 border-b">Блог</a>
                  <button onClick={() => scrollToSection("contact")} className="text-left text-lg font-medium hover:text-primary transition-colors py-3 border-b">Контакты</button>
                  <Button onClick={() => { setMobileMenuOpen(false); onContactClick(); }} className="gradient-primary hover:opacity-90 w-full mt-4">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Связаться
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};