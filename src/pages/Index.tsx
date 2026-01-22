import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', debt_amount: '', comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();



  const servicesRef = useIntersectionObserver();
  const aboutRef = useIntersectionObserver();
  const casesRef = useIntersectionObserver();
  const reviewsRef = useIntersectionObserver();



  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/317eab41-f50d-4e4b-9f21-a9835e507bc7', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, phone: formData.phone })
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "✅ Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время",
        });
        setFormData({ name: '', phone: '', debt_amount: '', comment: '' });
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <Icon name="Scale" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold text-gradient">БанкротЭксперт</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("hero")} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">О компании</button>
              <button onClick={() => scrollToSection("cases")} className="text-sm font-medium hover:text-primary transition-colors">Кейсы</button>
              <button onClick={() => scrollToSection("reviews")} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="hidden sm:flex w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 hover:opacity-80 transition-opacity items-center justify-center">
                <Icon name="Send" size={18} className="text-white" />
              </a>
              <a href="https://vk.com/yourpage" target="_blank" rel="noopener noreferrer" className="hidden sm:flex w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 hover:opacity-80 transition-opacity items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.45 14.8c-.43.46-1.23.72-2.38.76-.39.01-.82.02-1.28.02-1.18 0-2.04-.08-2.56-.23-.69-.2-1.23-.54-1.65-1.03-.42-.49-.74-1.18-1.01-2.09l-.01-.04c-.15-.51-.28-.99-.4-1.43-.37-1.36-.56-2.05-1.16-2.05-.06 0-.16.02-.32.08-.15.06-.32.15-.51.28l-.39-.49c.24-.21.48-.42.72-.62.42-.36.77-.61 1.02-.74.45-.24.88-.36 1.28-.38.85-.04 1.37.5 1.58 1.61.22 1.21.37 1.97.45 2.27.24 1.07.5 1.61.8 1.61.23 0 .58-.36 1.04-1.09.46-.72.71-1.27.75-1.64.07-.61-.18-0.92-.74-.92-.26 0-.53.06-.82.17.54-1.77 1.58-2.63 3.11-2.59 1.13.03 1.66.77 1.6 2.21-.04.89-.35 1.86-0.94 2.91-.56 1-.84 1.64-.84 1.93 0 .19.08.38.25.57.17.19.47.43.91.72.43.29.76.51.98.66.85.57 1.29 1.08 1.32 1.54.04.7-.31 1.05-1.05 1.05-.22 0-.49-.08-.82-.25z"/>
                </svg>
              </a>
              <Button onClick={() => setDialogOpen(true)} className="hidden sm:flex gradient-primary hover:opacity-90 transition-opacity">
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
                    <button onClick={() => scrollToSection("contact")} className="text-left text-lg font-medium hover:text-primary transition-colors py-3 border-b">Контакты</button>
                    <Button onClick={() => { setMobileMenuOpen(false); setDialogOpen(true); }} className="gradient-primary hover:opacity-90 w-full mt-4">
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

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="gradient-accent text-white border-0">Более 5 лет успешной практики</Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Банкротство <span className="text-gradient">физических</span> и <span className="text-gradient">юридических</span> лиц
              </h1>
              <p className="text-lg text-gray-600">
                Профессиональная помощь в процедуре банкротства. Гарантия результата и возврат средств при неудаче. Бесплатная консультация и анализ ситуации.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => setDialogOpen(true)} size="lg" className="gradient-primary hover:opacity-90 transition-opacity">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Бесплатная консультация
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-gradient">5+</div>
                  <div className="text-sm text-gray-600">лет опыта</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-gradient">500+</div>
                  <div className="text-sm text-gray-600">успешных дел</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-gradient">100%</div>
                  <div className="text-sm text-gray-600">гарантия</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <Card className="relative overflow-hidden border-0 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-orange-100 flex items-center justify-center">
                  <Icon name="Scale" size={200} className="text-primary/20" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white" ref={servicesRef.ref}>
        <div className="container mx-auto">
          <div className={`text-center mb-16 space-y-4 transition-all duration-700 ${servicesRef.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Badge className="gradient-accent text-white border-0">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Что мы <span className="text-gradient">предлагаем</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по банкротству с гарантией результата
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="User" className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold">Банкротство физических лиц</h3>
                <p className="text-gray-600">
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
                <Button className="w-full gradient-primary hover:opacity-90">
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
                <h3 className="text-2xl font-bold">Банкротство юридических лиц</h3>
                <p className="text-gray-600">
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
                <Button className="w-full gradient-accent hover:opacity-90">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto">
                  <Icon name="Gift" className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-lg">Бесплатная консультация</h4>
                <p className="text-sm text-gray-600">Первичный анализ ситуации и оценка перспектив без оплаты</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center mx-auto">
                  <Icon name="Shield" className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-lg">Гарантия результата</h4>
                <p className="text-sm text-gray-600">Возврат средств, если не достигнем поставленных целей</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto">
                  <Icon name="Clock" className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-lg">Прозрачные сроки</h4>
                <p className="text-sm text-gray-600">Четкий план действий с расчетом временных рамок</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-orange-50" ref={aboutRef.ref}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-700 ${aboutRef.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <Badge className="gradient-primary text-white border-0">О компании</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Более <span className="text-gradient">5 лет опыта</span> в банкротстве
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Мы специализируемся на процедурах банкротства физических и юридических лиц. За годы работы успешно провели сотни дел, помогая людям и компаниям освободиться от долговых обязательств.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Наша команда состоит из опытных юристов, финансовых аналитиков и арбитражных управляющих. Мы знаем все тонкости законодательства и используем проверенные стратегии для достижения результата.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                      <Icon name="Award" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-2xl text-gradient">500+</div>
                      <div className="text-sm text-gray-600">Успешных дел</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center">
                      <Icon name="Users" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-2xl text-gradient">15+</div>
                      <div className="text-sm text-gray-600">Специалистов</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <Icon name="TrendingUp" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-2xl text-gradient">98%</div>
                      <div className="text-sm text-gray-600">Успешности</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                      <Icon name="BadgeCheck" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-2xl text-gradient">5+</div>
                      <div className="text-sm text-gray-600">Лет опыта</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 gradient-accent rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <Card className="relative overflow-hidden border-0 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-orange-100 to-purple-100 flex items-center justify-center">
                  <Icon name="TrendingUp" size={200} className="text-accent/20" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-white" ref={casesRef.ref}>
        <div className="container mx-auto">
          <div className={`text-center mb-16 space-y-4 transition-all duration-700 ${casesRef.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Badge className="gradient-primary text-white border-0">Успешные кейсы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Наши <span className="text-gradient">результаты</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Реальные истории клиентов, которым мы помогли
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-primary text-primary">Физ. лицо</Badge>
                  <Icon name="CheckCircle2" className="text-green-500" size={24} />
                </div>
                <h3 className="text-xl font-bold">Списание 2.8 млн ₽</h3>
                <p className="text-sm text-gray-600">
                  Клиент имел задолженность перед банками и МФО. Провели процедуру банкротства за 8 месяцев, долги полностью списаны.
                </p>
                <div className="pt-4 border-t space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Срок:</span>
                    <span className="font-semibold">8 месяцев</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Результат:</span>
                    <span className="font-semibold text-green-600">100% списание</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-accent text-accent">Юр. лицо</Badge>
                  <Icon name="CheckCircle2" className="text-green-500" size={24} />
                </div>
                <h3 className="text-xl font-bold">Ликвидация ООО</h3>
                <p className="text-sm text-gray-600">
                  Компания с долгами 5 млн ₽. Провели процедуру конкурсного производства, защитили имущество учредителей.
                </p>
                <div className="pt-4 border-t space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Срок:</span>
                    <span className="font-semibold">12 месяцев</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Результат:</span>
                    <span className="font-semibold text-green-600">Успешно</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-primary text-primary">Физ. лицо</Badge>
                  <Icon name="CheckCircle2" className="text-green-500" size={24} />
                </div>
                <h3 className="text-xl font-bold">Реструктуризация 1.5 млн ₽</h3>
                <p className="text-sm text-gray-600">
                  Долги по кредитам и налогам. Реструктуризировали долг, клиент выплачивает посильными платежами без процентов.
                </p>
                <div className="pt-4 border-t space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Срок:</span>
                    <span className="font-semibold">6 месяцев</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Результат:</span>
                    <span className="font-semibold text-green-600">Реструктуризация</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="gradient-primary text-white border-0">Прозрачный процесс</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Этапы <span className="text-gradient">работы</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Понятный и структурированный процесс от консультации до полного списания долгов
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <Card className="relative hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-6 space-y-4">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <div className="pt-4">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4">
                    <Icon name="MessageSquare" className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Бесплатная консультация</h3>
                  <p className="text-sm text-gray-600">
                    Экспертиза документов и анализ ситуации
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-6 space-y-4">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <div className="pt-4">
                  <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-4">
                    <Icon name="FileSignature" className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Заключение договора</h3>
                  <p className="text-sm text-gray-600">
                    Подписание договора, внесение клиентом предоплаты
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-6 space-y-4">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <div className="pt-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                    <Icon name="FileText" className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Сбор документов и подача</h3>
                  <p className="text-sm text-gray-600">
                    Формирование заявления о признании должника банкротом и подача в суд
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-6 space-y-4">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  4
                </div>
                <div className="pt-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                    <Icon name="Scale" className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Работа в суде</h3>
                  <p className="text-sm text-gray-600">
                    Работа арбитражного управляющего и работа Вашего юриста по защите Ваших прав в суде
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-6 space-y-4">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  5
                </div>
                <div className="pt-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mb-4">
                    <Icon name="CheckCircle2" className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Завершение процедуры</h3>
                  <p className="text-sm text-gray-600">
                    Получение решения суда и, как результат, полное списание долгов
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-br from-purple-50 to-orange-50 border-2 border-primary max-w-3xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Icon name="Clock" className="text-primary" size={32} />
                  <h3 className="text-2xl font-bold text-gradient">Средний срок процедуры</h3>
                </div>
                <p className="text-4xl font-bold text-primary mb-2">6-12 месяцев</p>
                <p className="text-gray-600">В зависимости от сложности дела и количества кредиторов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50" ref={reviewsRef.ref}>
        <div className="container mx-auto">
          <div className={`text-center mb-16 space-y-4 transition-all duration-700 ${reviewsRef.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Badge className="gradient-accent text-white border-0">Отзывы клиентов</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Что говорят <span className="text-gradient">наши клиенты</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "Огромное спасибо команде! Помогли избавиться от кредитов на 2.5 млн рублей. Процесс прошёл быстро и без проблем. Рекомендую!"
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <Icon name="User" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Анна М.</div>
                    <div className="text-sm text-gray-600">Москва</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "Профессионалы своего дела. Провели банкротство ООО, защитили личное имущество. Всё прозрачно, без скрытых платежей."
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                    <Icon name="User" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Дмитрий К.</div>
                    <div className="text-sm text-gray-600">Санкт-Петербург</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "Обратилась с долгами по микрозаймам. Бесплатная консультация помогла понять план действий. Результатом довольна на 100%!"
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <Icon name="User" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Елена С.</div>
                    <div className="text-sm text-gray-600">Екатеринбург</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <Badge className="gradient-primary text-white border-0">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Свяжитесь <span className="text-gradient">с нами</span>
              </h2>
              <p className="text-gray-600">
                Получите бесплатную консультацию и анализ вашей ситуации
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <a href="tel:+78001234567" className="text-primary hover:underline">+7 (800) 123-45-67</a>
                      <div className="text-sm text-gray-600 mt-1">Пн-Пт: 9:00 - 20:00, Сб-Вс: 10:00 - 18:00</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:info@bankrotexpert.ru" className="text-primary hover:underline">info@bankrotexpert.ru</a>
                      <div className="text-sm text-gray-600 mt-1">Ответим в течение часа</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Офис</div>
                      <div className="text-gray-700">г. Москва, ул. Пушкина, д. 10</div>
                      <div className="text-sm text-gray-600 mt-1">Приём по предварительной записи</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сумма задолженности</label>
                    <input 
                      type="text" 
                      value={formData.debt_amount}
                      onChange={(e) => setFormData({...formData, debt_amount: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Укажите примерную сумму"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий</label>
                    <textarea 
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      rows={3}
                      placeholder="Опишите вашу ситуацию"
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full gradient-primary hover:opacity-90 text-white disabled:opacity-50">
                    {isSubmitting ? 'Отправка...' : 'Получить консультацию'}
                    <Icon name="Send" size={16} className="ml-2" />
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <Icon name="Scale" className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">БанкротЭксперт</span>
              </div>
              <p className="text-sm text-gray-400">
                Профессиональная помощь в процедуре банкротства с 2019 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Банкротство физ. лиц</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Банкротство юр. лиц</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Реструктуризация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Консультации</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@bankrotexpert.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Пушкина, 10
                </li>
              </ul>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 hover:opacity-80 transition-opacity flex items-center justify-center">
                  <Icon name="Send" size={18} className="text-white" />
                </a>
                <a href="https://vk.com/yourpage" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 hover:opacity-80 transition-opacity flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.45 14.8c-.43.46-1.23.72-2.38.76-.39.01-.82.02-1.28.02-1.18 0-2.04-.08-2.56-.23-.69-.2-1.23-.54-1.65-1.03-.42-.49-.74-1.18-1.01-2.09l-.01-.04c-.15-.51-.28-.99-.4-1.43-.37-1.36-.56-2.05-1.16-2.05-.06 0-.16.02-.32.08-.15.06-.32.15-.51.28l-.39-.49c.24-.21.48-.42.72-.62.42-.36.77-.61 1.02-.74.45-.24.88-.36 1.28-.38.85-.04 1.37.5 1.58 1.61.22 1.21.37 1.97.45 2.27.24 1.07.5 1.61.8 1.61.23 0 .58-.36 1.04-1.09.46-.72.71-1.27.75-1.64.07-.61-.18-0.92-.74-.92-.26 0-.53.06-.82.17.54-1.77 1.58-2.63 3.11-2.59 1.13.03 1.66.77 1.6 2.21-.04.89-.35 1.86-0.94 2.91-.56 1-.84 1.64-.84 1.93 0 .19.08.38.25.57.17.19.47.43.91.72.43.29.76.51.98.66.85.57 1.29 1.08 1.32 1.54.04.7-.31 1.05-1.05 1.05-.22 0-.49-.08-.82-.25z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 БанкротЭксперт. Все права защищены.
          </div>
        </div>
      </footer>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gradient">Получить консультацию</DialogTitle>
            <DialogDescription>
              Заполните форму и мы свяжемся с вами в ближайшее время для бесплатной консультации
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium mb-2">Ваше имя *</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Иван Иванов"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Телефон *</label>
              <input 
                type="tel" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+7 (___) ___-__-__"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Сумма задолженности</label>
              <input 
                type="text" 
                value={formData.debt_amount}
                onChange={(e) => setFormData({...formData, debt_amount: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Укажите примерную сумму"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Комментарий</label>
              <textarea 
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                rows={3}
                placeholder="Опишите вашу ситуацию"
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full gradient-primary hover:opacity-90 text-white disabled:opacity-50">
              {isSubmitting ? 'Отправка...' : 'Получить консультацию'}
              <Icon name="Send" size={16} className="ml-2" />
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;