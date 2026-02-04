import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const CorporateBankruptcy = () => {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
        setFormData({ name: '', phone: '' });
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <Icon name="Scale" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold text-gradient">БезДолгов59</span>
            </button>
            <div className="flex items-center gap-3">
              <Button asChild variant="outline">
                <a href="tel:+79026444201">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (902) 64-44-201
                </a>
              </Button>
              <Button onClick={() => setDialogOpen(true)} className="gradient-primary hover:opacity-90">
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button onClick={() => navigate('/')} variant="ghost" className="mb-6">
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Назад на главную
          </Button>

          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Badge className="gradient-accent text-white border-0">Услуги</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">
                Банкротство <span className="text-gradient">юридических лиц</span>
              </h1>
              <p className="text-lg text-gray-600">
                Профессиональное сопровождение процедуры банкротства компаний любых форм собственности
              </p>
            </div>

            <Card className="p-8">
              <CardContent className="space-y-6 p-0">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Что такое банкротство юридических лиц?</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Банкротство юридического лица — это признанная арбитражным судом неспособность должника в полном объеме удовлетворить требования кредиторов по денежным обязательствам и исполнить обязанность по уплате обязательных платежей. Процедура регулируется Федеральным законом №127-ФЗ «О несостоятельности (банкротстве)» и представляет собой комплекс мероприятий по защите прав кредиторов и восстановлению платежеспособности или ликвидации компании.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Банкротство компании может быть как вынужденной мерой при невозможности погашения долгов, так и стратегическим решением для оптимизации бизнеса. В процессе банкротства происходит инвентаризация имущества должника, формирование конкурсной массы, удовлетворение требований кредиторов в порядке очередности, установленной законом, и при необходимости — ликвидация компании с исключением из ЕГРЮЛ.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Важно понимать, что процедура банкротства юридического лица имеет несколько стадий: наблюдение, финансовое оздоровление, внешнее управление, конкурсное производство и мировое соглашение. Каждая стадия имеет свои особенности и сроки, а переход от одной к другой зависит от конкретной ситуации компании и решений арбитражного суда.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Процедура может быть инициирована как самой компанией через уполномоченный орган управления, так и кредиторами или уполномоченными органами. Руководитель компании обязан подать заявление о банкротстве в течение месяца с момента возникновения признаков банкротства, в противном случае он может быть привлечен к субсидиарной ответственности по долгам компании. Признаками банкротства считаются неисполнение денежных обязательств на сумму от 300 000 рублей в течение трех месяцев.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Когда необходимо банкротство компании?</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0">
                      <CardContent className="p-4 space-y-2">
                        <Icon name="DollarSign" className="text-primary" size={24} />
                        <h3 className="font-semibold">Долги от 300 000 ₽</h3>
                        <p className="text-sm text-gray-600">Неоплаченные обязательства более 3 месяцев</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0">
                      <CardContent className="p-4 space-y-2">
                        <Icon name="TrendingDown" className="text-primary" size={24} />
                        <h3 className="font-semibold">Убыточная деятельность</h3>
                        <p className="text-sm text-gray-600">Отсутствие перспектив восстановления платежеспособности</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0">
                      <CardContent className="p-4 space-y-2">
                        <Icon name="Building" className="text-primary" size={24} />
                        <h3 className="font-semibold">Арест имущества</h3>
                        <p className="text-sm text-gray-600">Блокировка счетов и ограничения деятельности</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0">
                      <CardContent className="p-4 space-y-2">
                        <Icon name="AlertTriangle" className="text-primary" size={24} />
                        <h3 className="font-semibold">Требования кредиторов</h3>
                        <p className="text-sm text-gray-600">Множественные иски и исполнительные производства</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Преимущества процедуры</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Check" className="text-green-600" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Законная ликвидация</h4>
                        <p className="text-sm text-gray-600">Прозрачное закрытие компании с минимальными налоговыми рисками</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Check" className="text-green-600" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Защита от претензий</h4>
                        <p className="text-sm text-gray-600">Мораторий на удовлетворение требований кредиторов</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Check" className="text-green-600" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Оптимизация долгов</h4>
                        <p className="text-sm text-gray-600">Возможность оспаривания необоснованных требований</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Check" className="text-green-600" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Защита руководителя</h4>
                        <p className="text-sm text-gray-600">Грамотная защита от субсидиарной ответственности</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
              <CardContent className="space-y-6 p-0">
                <h2 className="text-3xl font-bold">Этапы работы</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Анализ ситуации</h3>
                      <p className="text-gray-300">
                        Проводим комплексный аудит финансового состояния компании, анализируем долги и активы, оцениваем риски привлечения руководителей к субсидиарной ответственности. Разрабатываем оптимальную стратегию банкротства.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Подготовка документации</h3>
                      <p className="text-gray-300">
                        Собираем полный пакет документов: бухгалтерскую отчетность, реестры кредиторов и дебиторов, документы на имущество, договоры и акты сверок. Готовим обоснование признаков банкротства и заявление в арбитражный суд.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Инициирование процедуры</h3>
                      <p className="text-gray-300">
                        Подаем заявление о признании должника банкротом в арбитражный суд. Оплачиваем госпошлину и депозит арбитражного управляющего. Публикуем сообщения в Едином федеральном реестре сведений о банкротстве.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">4</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Наблюдение</h3>
                      <p className="text-gray-300">
                        На этапе наблюдения анализируется финансовое состояние должника, формируется реестр требований кредиторов, проводится первое собрание кредиторов. Защищаем интересы компании и контролируем действия временного управляющего.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">5</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Конкурсное производство</h3>
                      <p className="text-gray-300">
                        Формирование конкурсной массы, оценка и продажа имущества должника, расчеты с кредиторами в порядке очередности. Оспариваем сомнительные сделки, защищаем от необоснованного включения требований в реестр.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">6</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Завершение</h3>
                      <p className="text-gray-300">
                        Получаем определение о завершении конкурсного производства, компания исключается из ЕГРЮЛ. Защищаем руководителей и учредителей от привлечения к субсидиарной ответственности. Помогаем с оформлением всех закрывающих документов.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="space-y-6 p-0">
                <h2 className="text-2xl font-bold mb-4">Стоимость услуг</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Консультация</div>
                    <div className="text-2xl font-bold text-gradient">Бесплатно</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Ведение дела</div>
                    <div className="text-2xl font-bold text-gradient">от 100 000 ₽</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Срок процедуры</div>
                    <div className="text-2xl font-bold text-gradient">12-18 месяцев</div>
                  </div>
                </div>
                <div className="pt-6 border-t">
                  <p className="text-sm text-gray-600 mb-4">
                    Дополнительные расходы: госпошлина 6 000 ₽, депозит арбитражного управляющего от 200 000 ₽, публикации в ЕФРСБ, экспертизы
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button onClick={() => setDialogOpen(true)} size="lg" className="gradient-primary hover:opacity-90">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      Получить консультацию
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="tel:+79026444201">
                        <Icon name="Phone" size={20} className="mr-2" />
                        Позвонить
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Бесплатная консультация</DialogTitle>
            <DialogDescription>
              Оставьте заявку и мы свяжемся с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Имя</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Ваше имя"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Телефон</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+7 (___) ___-__-__"
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full gradient-primary hover:opacity-90">
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CorporateBankruptcy;
