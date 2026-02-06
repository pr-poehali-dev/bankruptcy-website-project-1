import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export const ServicesSection = () => {
  const navigate = useNavigate();
  const servicesRef = useIntersectionObserver();

  return (
    <section id="services" className="py-12 sm:py-20 px-4 bg-white" ref={servicesRef.ref}>
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-8 sm:mb-16 space-y-3 sm:space-y-4 transition-all duration-700 ${servicesRef.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Badge className="gradient-accent text-white border-0 text-xs sm:text-sm">Наши услуги</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Что мы <span className="text-gradient">предлагаем</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Полный спектр услуг по банкротству с гарантией результата
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
            <CardContent className="p-8 space-y-4">
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="User" className="text-white" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Банкротство физических лиц</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Полное сопровождение процедуры банкротства от анализа ситуации до списания долгов. Расчет сроков и прозрачный процесс на каждом этапе.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm">Анализ финансовой ситуации и подбор оптимальной стратегии</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm">Подготовка документов и представительство в суде</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm">Взаимодействие с финансовым управляющим</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm">Защита имущества от необоснованных претензий</span>
                </li>
              </ul>
              <Button onClick={() => navigate('/individual-bankruptcy')} className="w-full gradient-primary hover:opacity-90">
                Подробнее
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
            <CardContent className="p-8 space-y-4">
              <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Building2" className="text-white" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Банкротство юридических лиц</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Профессиональное ведение процедур несостоятельности компаний. Сохранение активов и минимизация рисков для учредителей.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm">Досудебная санация и реструктуризация долгов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm">Наблюдение, внешнее управление, конкурсное производство</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm">Защита интересов кредиторов и должников</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm">Ликвидация компаний с минимальными издержками</span>
                </li>
              </ul>
              <Button onClick={() => navigate('/corporate-bankruptcy')} className="w-full gradient-accent hover:opacity-90">
                Подробнее
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 space-y-3">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto">
                <Icon name="Gift" className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-base sm:text-lg">Бесплатная консультация</h4>
              <p className="text-sm text-gray-600">Первичный анализ ситуации и оценка перспектив без оплаты</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 space-y-3">
              <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center mx-auto">
                <Icon name="Shield" className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-base sm:text-lg">Гарантия результата</h4>
              <p className="text-sm text-gray-600">Возврат средств, если не достигнем поставленных целей</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto">
                <Icon name="Clock" className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-base sm:text-lg">Прозрачные сроки</h4>
              <p className="text-sm text-gray-600">Четкий план действий с расчетом временных рамок</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};