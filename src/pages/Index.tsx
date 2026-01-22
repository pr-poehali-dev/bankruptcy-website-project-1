import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
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
            <Button className="gradient-primary hover:opacity-90 transition-opacity">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
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
                <Button size="lg" className="gradient-primary hover:opacity-90 transition-opacity">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Бесплатная консультация
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
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

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
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

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
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

      <section id="cases" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
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

      <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
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
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сумма задолженности</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Укажите примерную сумму"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий</label>
                    <textarea 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      rows={3}
                      placeholder="Опишите вашу ситуацию"
                    />
                  </div>
                  <Button type="submit" className="w-full gradient-primary hover:opacity-90 text-white">
                    Получить консультацию
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
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 БанкротЭксперт. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
