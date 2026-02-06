import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import SafeImage from "@/components/SafeImage";
import { IMAGES } from "@/config/images";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export const AboutCasesSection = () => {
  const aboutRef = useIntersectionObserver();
  const casesRef = useIntersectionObserver();

  return (
    <>
      <section id="about" className="py-12 sm:py-20 px-4 bg-gradient-to-br from-purple-50 to-orange-50" ref={aboutRef.ref}>
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={`space-y-4 sm:space-y-6 transition-all duration-700 ${aboutRef.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <Badge className="gradient-primary text-white border-0 text-xs sm:text-sm">О компании</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Более <span className="text-gradient">5 лет опыта</span> в банкротстве
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Мы специализируемся на процедурах банкротства физических и юридических лиц. За годы работы успешно провели сотни дел, помогая людям и компаниям освободиться от долговых обязательств.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Наша команда состоит из опытных юристов, финансовых аналитиков и арбитражных управляющих. Мы знаем все тонкости законодательства и используем проверенные стратегии для достижения результата.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-6 pt-2 sm:pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                      <Icon name="Award" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-xl sm:text-2xl text-gradient">100+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Успешных дел</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center">
                      <Icon name="Users" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-xl sm:text-2xl text-gradient">15+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Специалистов</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <Icon name="TrendingUp" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-xl sm:text-2xl text-gradient">98%</div>
                      <div className="text-xs sm:text-sm text-gray-600">Успешности</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                      <Icon name="BadgeCheck" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-xl sm:text-2xl text-gradient">5+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Лет опыта</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 gradient-accent rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <Card className="relative overflow-hidden border-0 shadow-2xl">
                <SafeImage
                  src={IMAGES.about.main}
                  alt="О компании БезДолгов59"
                  className="aspect-square w-full h-full object-cover"
                  fallbackIcon="TrendingUp"
                  fallbackGradient="from-orange-100 to-purple-100"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-12 sm:py-20 px-4 bg-white" ref={casesRef.ref}>
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-8 sm:mb-16 space-y-3 sm:space-y-4 transition-all duration-700 ${casesRef.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Badge className="gradient-primary text-white border-0 text-xs sm:text-sm">Успешные кейсы</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Наши <span className="text-gradient">результаты</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Реальные истории клиентов, которым мы помогли
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-primary text-primary">Физ. лицо</Badge>
                  <Icon name="CheckCircle2" className="text-green-500" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Списание 2.8 млн ₽</h3>
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
                <h3 className="text-lg sm:text-xl font-bold">Ликвидация ООО</h3>
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
                <h3 className="text-lg sm:text-xl font-bold">Реструктуризация 1.5 млн ₽</h3>
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
    </>
  );
};