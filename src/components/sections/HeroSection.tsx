import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import SafeImage from "@/components/SafeImage";
import { IMAGES } from "@/config/images";

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section id="hero" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <Badge className="gradient-accent text-white border-0 text-xs sm:text-sm">Более 5 лет успешной практики</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Банкротство <span className="text-gradient">физических</span> и <span className="text-gradient">юридических</span> лиц в Пермском крае
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              БезДолгов59 — списание долгов, защита от коллекторов и работа с судами в Перми. Гарантия результата и возврат средств при неудаче. Бесплатная консультация и анализ ситуации.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button onClick={onContactClick} size="lg" className="gradient-primary hover:opacity-90 transition-opacity w-full sm:w-auto">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                <span className="text-sm sm:text-base">Бесплатная консультация</span>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors w-full sm:w-auto">
                <a href="tel:+79026444201" className="flex items-center justify-center">
                  <Icon name="Phone" size={18} className="mr-2" />
                  <span className="text-sm sm:text-base">Позвонить</span>
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 sm:pt-6">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-gradient">5+</div>
                <div className="text-xs sm:text-sm text-gray-600">лет опыта</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-gradient">100+</div>
                <div className="text-xs sm:text-sm text-gray-600">успешных дел</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-gradient">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">гарантия</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <Card className="relative overflow-hidden border-0 shadow-2xl">
              <SafeImage
                src={IMAGES.hero.main}
                alt="Банкротство физических и юридических лиц в Перми"
                className="aspect-square w-full h-full object-cover"
                fallbackIcon="Scale"
                fallbackGradient="from-purple-100 to-orange-100"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};