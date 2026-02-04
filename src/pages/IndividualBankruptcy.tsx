import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const IndividualBankruptcy = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:opacity-70 transition-opacity mb-8">
              <Icon name="ArrowLeft" size={20} />
              <span>На главную</span>
            </Link>
            
            <Badge className="gradient-primary text-white border-0 mb-4">Услуга</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Банкротство <span className="text-gradient">физических лиц</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Полное сопровождение процедуры банкротства от анализа ситуации до полного списания долгов. 
              Законный способ избавиться от долговых обязательств с прозрачным процессом на каждом этапе.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Как проходит процедура банкротства?</h2>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Бесплатная консультация</h3>
                    <p className="text-gray-600">
                      Анализ вашей финансовой ситуации, оценка перспектив банкротства, расчет сроков и стоимости. 
                      Подбор оптимальной стратегии с учетом всех особенностей вашей ситуации.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Подготовка документов</h3>
                    <p className="text-gray-600">
                      Сбор необходимых документов, составление заявления о банкротстве, формирование реестра кредиторов. 
                      Мы берем на себя всю бумажную работу.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Подача заявления в суд</h3>
                    <p className="text-gray-600">
                      Подача заявления в арбитражный суд, представительство на судебных заседаниях, 
                      взаимодействие с финансовым управляющим от вашего имени.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Процедура реструктуризации (при возможности)</h3>
                    <p className="text-gray-600">
                      Если есть стабильный доход, суд может назначить реструктуризацию долгов — 
                      возможность погасить обязательства по измененному графику за 3 года.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Реализация имущества</h3>
                    <p className="text-gray-600">
                      Финансовый управляющий оценивает и продает имущество должника (кроме единственного жилья). 
                      Мы контролируем процесс и защищаем ваши интересы.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">6</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Завершение процедуры</h3>
                    <p className="text-gray-600">
                      Суд выносит определение о завершении процедуры банкротства. 
                      Все оставшиеся долги списываются — вы свободны от финансовых обязательств.
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
          <h2 className="text-3xl font-bold mb-8">Что входит в услугу?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Анализ финансовой ситуации</h4>
                    <p className="text-sm text-gray-600">Детальный разбор ваших доходов, расходов и долговых обязательств</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Подготовка документов</h4>
                    <p className="text-sm text-gray-600">Сбор всех необходимых справок и составление заявления</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Представительство в суде</h4>
                    <p className="text-sm text-gray-600">Участие во всех судебных заседаниях от вашего имени</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Работа с управляющим</h4>
                    <p className="text-sm text-gray-600">Взаимодействие с финансовым управляющим на всех этапах</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Защита имущества</h4>
                    <p className="text-sm text-gray-600">Сохранение единственного жилья и других защищенных активов</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Консультации 24/7</h4>
                    <p className="text-sm text-gray-600">Поддержка и ответы на вопросы на всех этапах процедуры</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Кому подходит банкротство?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto">
                  <Icon name="CreditCard" className="text-white" size={24} />
                </div>
                <h4 className="font-bold">Долги более 500 000 ₽</h4>
                <p className="text-sm text-gray-600">Сумма задолженности превышает полмиллиона рублей</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto">
                  <Icon name="Calendar" className="text-white" size={24} />
                </div>
                <h4 className="font-bold">Просрочка 3+ месяца</h4>
                <p className="text-sm text-gray-600">Неспособность платить по кредитам более 3 месяцев</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto">
                  <Icon name="TrendingDown" className="text-white" size={24} />
                </div>
                <h4 className="font-bold">Нет средств</h4>
                <p className="text-sm text-gray-600">Доходы не покрывают минимальные платежи</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-gray-700 mb-8">
            Запишитесь на бесплатную консультацию, и мы проанализируем вашу ситуацию
          </p>
          <Button onClick={() => setDialogOpen(true)} size="lg" className="gradient-primary hover:opacity-90 transition-opacity">
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
            <Button type="submit" className="w-full gradient-primary hover:opacity-90">
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

export default IndividualBankruptcy;
