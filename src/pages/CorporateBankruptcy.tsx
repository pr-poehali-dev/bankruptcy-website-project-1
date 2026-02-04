import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CorporateBankruptcy = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-purple-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-accent hover:opacity-70 transition-opacity mb-8">
              <Icon name="ArrowLeft" size={20} />
              <span>На главную</span>
            </Link>
            
            <Badge className="gradient-accent text-white border-0 mb-4">Услуга</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Банкротство <span className="text-gradient">юридических лиц</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Профессиональное ведение процедур несостоятельности компаний. 
              Сохранение активов и минимизация рисков для учредителей и руководителей.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Этапы банкротства юридического лица</h2>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Анализ финансового состояния</h3>
                    <p className="text-gray-600">
                      Оценка активов и пассивов компании, анализ возможности восстановления платежеспособности, 
                      выбор оптимальной процедуры банкротства с учетом целей собственников.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Досудебная санация (при необходимости)</h3>
                    <p className="text-gray-600">
                      Попытка восстановления платежеспособности без суда: переговоры с кредиторами, 
                      реструктуризация долгов, поиск инвесторов для оздоровления бизнеса.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Подача заявления в арбитражный суд</h3>
                    <p className="text-gray-600">
                      Подготовка пакета документов, подача заявления о признании должника банкротом, 
                      представительство интересов на первом судебном заседании.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Наблюдение</h3>
                    <p className="text-gray-600">
                      Первая процедура банкротства длительностью до 7 месяцев. 
                      Временный управляющий анализирует финансовое состояние и проводит первое собрание кредиторов.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Внешнее управление (опционально)</h3>
                    <p className="text-gray-600">
                      Если есть шанс восстановить платежеспособность, суд может ввести внешнее управление на срок до 18 месяцев. 
                      Внешний управляющий руководит компанией для восстановления бизнеса.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">6</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Конкурсное производство</h3>
                    <p className="text-gray-600">
                      Завершающая стадия — реализация имущества должника и расчеты с кредиторами. 
                      Конкурсный управляющий продает активы, формирует конкурсную массу и удовлетворяет требования кредиторов.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">7</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Завершение процедуры</h3>
                    <p className="text-gray-600">
                      После распределения конкурсной массы суд выносит определение о завершении процедуры. 
                      Компания исключается из ЕГРЮЛ, непогашенные требования кредиторов считаются погашенными.
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
          <h2 className="text-3xl font-bold mb-8">Что включает наше сопровождение?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Финансовый анализ</h4>
                    <p className="text-sm text-gray-600">Аудит финансового состояния и оценка перспектив восстановления</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Юридическое сопровождение</h4>
                    <p className="text-sm text-gray-600">Представительство на всех судебных заседаниях</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Работа с кредиторами</h4>
                    <p className="text-sm text-gray-600">Переговоры и защита от необоснованных требований</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Контроль управляющего</h4>
                    <p className="text-sm text-gray-600">Проверка действий арбитражного управляющего</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Защита учредителей</h4>
                    <p className="text-sm text-gray-600">Минимизация субсидиарной ответственности</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Сохранение активов</h4>
                    <p className="text-sm text-gray-600">Законные способы защиты имущества компании</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Когда нужно банкротство юридического лица?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center mx-auto">
                  <Icon name="AlertTriangle" className="text-white" size={24} />
                </div>
                <h4 className="font-bold">Долги более 300 000 ₽</h4>
                <p className="text-sm text-gray-600">Обязательства превышают 300 тысяч рублей</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center mx-auto">
                  <Icon name="Clock" className="text-white" size={24} />
                </div>
                <h4 className="font-bold">Просрочка 3+ месяца</h4>
                <p className="text-sm text-gray-600">Неисполнение обязательств более 3 месяцев</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center mx-auto">
                  <Icon name="XCircle" className="text-white" size={24} />
                </div>
                <h4 className="font-bold">Нет выхода</h4>
                <p className="text-sm text-gray-600">Невозможность погасить долги из текущих доходов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-purple-50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-gray-700 mb-8">
            Запишитесь на бесплатную встречу для анализа ситуации вашей компании
          </p>
          <Button onClick={() => setDialogOpen(true)} size="lg" className="gradient-accent hover:opacity-90 transition-opacity">
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
              <Input placeholder="Название компании" />
            </div>
            <div>
              <Textarea placeholder="Опишите ситуацию компании (необязательно)" rows={4} />
            </div>
            <Button type="submit" className="w-full gradient-accent hover:opacity-90">
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

export default CorporateBankruptcy;
