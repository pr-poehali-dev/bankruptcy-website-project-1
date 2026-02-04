import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Restructuring = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:opacity-70 transition-opacity mb-8">
              <Icon name="ArrowLeft" size={20} />
              <span>На главную</span>
            </Link>
            
            <Badge className="bg-gradient-to-r from-blue-500 to-teal-500 text-white border-0 mb-4">Услуга</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Реструктуризация <span className="text-gradient">долгов</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Альтернатива банкротству для тех, кто хочет сохранить репутацию и избежать судебных процессов. 
              Перестройка графика платежей и снижение долговой нагрузки.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Как проходит реструктуризация?</h2>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Анализ финансовой ситуации</h3>
                    <p className="text-gray-600">
                      Детальное изучение всех ваших долгов: кредиты, займы, задолженности перед поставщиками. 
                      Оценка доходов и расходов для определения возможности реструктуризации.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Разработка плана реструктуризации</h3>
                    <p className="text-gray-600">
                      Составление индивидуального плана погашения долгов с учетом ваших финансовых возможностей. 
                      Расчет новых сроков и размеров платежей.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Переговоры с кредиторами</h3>
                    <p className="text-gray-600">
                      Профессиональные переговоры от вашего имени с банками и кредиторами. 
                      Согласование новых условий: увеличение срока, снижение процентной ставки, списание части долга.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Оформление соглашений</h3>
                    <p className="text-gray-600">
                      Юридическое оформление всех договоренностей с кредиторами. 
                      Подписание дополнительных соглашений к кредитным договорам с новыми условиями.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Сопровождение выплат</h3>
                    <p className="text-gray-600">
                      Контроль за соблюдением нового графика платежей. 
                      Консультации и поддержка на весь период реструктуризации.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Преимущества реструктуризации</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Без суда</h4>
                    <p className="text-sm text-gray-600">Все решается переговорами, без судебных разбирательств</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Сохранение репутации</h4>
                    <p className="text-sm text-gray-600">Кредитная история не портится, нет статуса банкрота</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Снижение нагрузки</h4>
                    <p className="text-sm text-gray-600">Уменьшение ежемесячных платежей до приемлемого уровня</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Остановка роста долга</h4>
                    <p className="text-sm text-gray-600">Часто удается договориться о заморозке процентов и штрафов</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Сохранение имущества</h4>
                    <p className="text-sm text-gray-600">Ваша собственность остается при вас</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Быстрое решение</h4>
                    <p className="text-sm text-gray-600">Процесс занимает 1-3 месяца вместо года банкротства</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Кому подходит реструктуризация?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-2 border-green-200 bg-green-50">
              <CardContent className="p-0">
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="ThumbsUp" className="text-green-600 flex-shrink-0" size={28} />
                  <h3 className="font-bold text-xl">Подходит, если:</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Есть стабильный доход</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Долг меньше 1-2 млн рублей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Хотите сохранить кредитную историю</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Готовы платить, но нужны более мягкие условия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Важна конфиденциальность процесса</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-red-200 bg-red-50">
              <CardContent className="p-0">
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="ThumbsDown" className="text-red-600 flex-shrink-0" size={28} />
                  <h3 className="font-bold text-xl">Не подходит, если:</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="X" className="text-red-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Нет стабильного дохода</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" className="text-red-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Долг превышает 3-5 млн рублей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" className="text-red-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Кредиторы уже обращались в суд</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" className="text-red-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Нет возможности платить даже минимум</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" className="text-red-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Нужно полное списание долгов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-l-blue-500">
            <div className="flex items-start gap-3">
              <Icon name="Info" className="text-blue-600 mt-1 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-2">Важно знать</h4>
                <p className="text-sm text-gray-700">
                  Если реструктуризация не подходит вам, мы можем предложить процедуру банкротства. 
                  На консультации мы детально разберем оба варианта и выберем оптимальный путь решения проблемы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Узнайте, подходит ли вам реструктуризация</h2>
          <p className="text-gray-700 mb-8">
            Запишитесь на бесплатную консультацию — мы проанализируем ситуацию и предложим лучший вариант
          </p>
          <Button onClick={() => setDialogOpen(true)} size="lg" className="bg-gradient-to-r from-blue-500 to-teal-500 hover:opacity-90 transition-opacity">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </section>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Бесплатная консультация</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <div>
              <Input placeholder="Ваше имя" />
            </div>
            <div>
              <Input placeholder="Телефон" type="tel" />
            </div>
            <div>
              <Textarea placeholder="Опишите вашу ситуацию (необязательно)" rows={4} />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:opacity-90">
              Отправить заявку
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

export default Restructuring;
