import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactDialog } from "@/components/layout/ContactDialog";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutCasesSection } from "@/components/sections/AboutCasesSection";
import { ReviewsContactSection } from "@/components/sections/ReviewsContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (dialogOpen) {
      setFormOpenTime(Date.now());
    }
  }, [dialogOpen]);
  const [formData, setFormData] = useState({ name: '', phone: '', debt_amount: '', comment: '', honeypot: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formOpenTime, setFormOpenTime] = useState<number>(0);
  const { toast } = useToast();


  useEffect(() => {
    document.title = "БезДолгов59 — Банкротство в Пермском крае | Списание долгов в Перми";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'БезДолгов59 — банкротство физических и юридических лиц в Перми и Пермском крае. Списание долгов, защита от коллекторов, работа с судами. Опыт 5+ лет, 100+ успешных дел. Бесплатная консультация ☎️ +7 (902) 64-44-201');
    }
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (formData.honeypot) {
        setIsSubmitting(false);
        return;
      }

      const timeDiff = Date.now() - formOpenTime;
      if (timeDiff < 2000) {
        toast({
          title: "⏳ Подождите",
          description: "Заполните форму внимательнее",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('https://functions.poehali.dev/b2aab1e1-13c8-4208-97f7-e6a22b37b6f3', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: formData.name, 
          phone: formData.phone,
          debt_amount: formData.debt_amount,
          comment: formData.comment,
          timestamp: formOpenTime
        })
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "✅ Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время",
        });
        setFormData({ name: '', phone: '', debt_amount: '', comment: '', honeypot: '' });
        setDialogOpen(false);
      } else {
        toast({
          title: "❌ Ошибка",
          description: data.error || "Не удалось отправить заявку",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "❌ Ошибка сети",
        description: "Проверьте подключение к интернету",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-x-hidden">
      <Header 
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
        onContactClick={() => setDialogOpen(true)}
      />

      <HeroSection onContactClick={() => setDialogOpen(true)} />

      <ServicesSection />

      <AboutCasesSection />

      <ReviewsContactSection 
        formData={formData}
        isSubmitting={isSubmitting}
        onFormChange={handleFormChange}
        onSubmit={handleSubmit}
      />

      <Footer />

      <ContactDialog 
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        formData={formData}
        isSubmitting={isSubmitting}
        onFormChange={handleFormChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Index;