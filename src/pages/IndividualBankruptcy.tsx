import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const IndividualBankruptcy = () => {
  useEffect(() => {
    document.title = "Банкротство физических лиц в Перми и Пермском крае | БезДолгов59";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Банкротство физических лиц в Пермском крае ⚖️ БезДолгов59 — списание долгов, защита от коллекторов, работа с судами. Бесплатная консультация. Опыт 5+ лет.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Банкротство физических лиц в Пермском крае ⚖️ БезДолгов59 — списание долгов, защита от коллекторов, работа с судами. Бесплатная консультация. Опыт 5+ лет.';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'банкротство физических лиц Пермь, банкротство в Пермском крае, списание долгов Пермь, БезДолгов59, защита от коллекторов, работа с коллекторами, списать долги Пермь, банкротство граждан, процедура банкротства Пермь');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'банкротство физических лиц Пермь, банкротство в Пермском крае, списание долгов Пермь, БезДолгов59, защита от коллекторов, работа с коллекторами, списать долги Пермь, банкротство граждан, процедура банкротства Пермь';
      document.head.appendChild(meta);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Банкротство физических лиц в Перми | БезДолгов59');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = 'Банкротство физических лиц в Перми | БезДолгов59';
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Профессиональная помощь в банкротстве физических лиц в Пермском крае. Списание долгов, защита от коллекторов, бесплатная консультация.');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = 'Профессиональная помощь в банкротстве физических лиц в Пермском крае. Списание долгов, защита от коллекторов, бесплатная консультация.';
      document.head.appendChild(meta);
    }
  }, []);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
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
              <Badge className="gradient-primary text-white border-0">Услуги</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">
                Банкротство <span className="text-gradient">физических лиц</span> в Перми и Пермском крае
              </h1>
              <p className="text-lg text-gray-600">
                Списание долгов, защита от коллекторов и законное освобождение от финансовых обязательств с БезДолгов59
              </p>
            </div>

            <Card className="p-8">
              <CardContent className="space-y-6 p-0">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Банкротство физических лиц в Пермском крае — что это?</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Банкротство физических лиц в Пермском крае — это законная процедура списания долгов, позволяющая гражданам, которые не могут расплатиться с долгами перед банками и коллекторами, получить освобождение от финансовых обязательств. БезДолгов59 предоставляет полное сопровождение процедуры банкротства в Перми. Процедура регулируется Федеральным законом №127-ФЗ «О несостоятельности (банкротстве)» и дает возможность списать долги перед банками, микрофинансовыми организациями, коллекторами и другими кредиторами.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Основная цель процедуры — предоставить добросовестному должнику возможность начать финансовую жизнь заново, освободившись от непосильного долгового бремени. При этом процедура защищает интересы как должника, так и кредиторов, обеспечивая справедливое распределение имущества и соблюдение прав всех сторон.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Важно понимать, что банкротство — это не способ избежать ответственности за взятые обязательства, а легальный механизм решения финансовых проблем в ситуации, когда человек объективно не может погасить долги. Процедура требует полной прозрачности финансового положения и готовности сотрудничать с финансовым управляющим и судом.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Процедура банкротства может быть инициирована как самим должником, так и его кредиторами. Однако в большинстве случаев инициатором выступает сам гражданин, который осознает невозможность погашения долгов и стремится легально разрешить ситуацию. Согласно закону, гражданин обязан подать на банкротство, если сумма его долгов превышает 500 000 рублей, а просрочка составляет более трех месяцев.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Когда стоит обращаться?</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
                      <CardContent className="p-4 space-y-2">
                        <Icon name="AlertCircle" className="text-primary" size={24} />
                        <h3 className="font-semibold">Долги от 500 000 ₽</h3>
                        <p className="text-sm text-gray-600">С просрочкой более 3 месяцев</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
                      <CardContent className="p-4 space-y-2">
                        <Icon name="TrendingDown" className="text-primary" size={24} />
                        <h3 className="font-semibold">Нет доходов</h3>
                        <p className="text-sm text-gray-600">Или доходы не покрывают долги</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
                      <CardContent className="p-4 space-y-2">
                        <Icon name="Home" className="text-primary" size={24} />
                        <h3 className="font-semibold">Риск потери жилья</h3>
                        <p className="text-sm text-gray-600">Угроза изъятия единственного жилья</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
                      <CardContent className="p-4 space-y-2">
                        <Icon name="Users" className="text-primary" size={24} />
                        <h3 className="font-semibold">Давление кредиторов</h3>
                        <p className="text-sm text-gray-600">Звонки коллекторов и судебные иски</p>
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
                        <h4 className="font-semibold">Полное списание долгов</h4>
                        <p className="text-sm text-gray-600">Все непогашенные долги списываются по решению суда</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Check" className="text-green-600" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Прекращение начисления процентов</h4>
                        <p className="text-sm text-gray-600">С момента подачи заявления проценты и пени не начисляются</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Check" className="text-green-600" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Защита от коллекторов</h4>
                        <p className="text-sm text-gray-600">Кредиторы не могут взыскивать долги напрямую</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Check" className="text-green-600" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Сохранение единственного жилья</h4>
                        <p className="text-sm text-gray-600">Единственная квартира не подлежит реализации</p>
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
                      <h3 className="text-xl font-bold">Бесплатная консультация</h3>
                      <p className="text-gray-300">
                        Анализируем вашу ситуацию, оцениваем перспективы банкротства, рассчитываем сроки и стоимость. Проверяем наличие оснований для признания банкротом и разрабатываем индивидуальную стратегию.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Подготовка документов</h3>
                      <p className="text-gray-300">
                        Собираем полный пакет документов: выписки из банков, справки о доходах, документы на имущество, кредитные договоры. Готовим заявление о банкротстве с обоснованием невозможности погашения долгов.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Подача заявления в суд</h3>
                      <p className="text-gray-300">
                        Подаем заявление в арбитражный суд по месту вашей регистрации. Оплачиваем госпошлину и вознаграждение финансового управляющего. Публикуем сообщение о начале процедуры в Едином федеральном реестре.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">4</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Судебные заседания</h3>
                      <p className="text-gray-300">
                        Представляем ваши интересы на всех судебных заседаниях. Взаимодействуем с финансовым управляющим и кредиторами. Оспариваем необоснованные требования и защищаем ваше имущество от неправомерных притязаний.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">5</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Реализация имущества</h3>
                      <p className="text-gray-300">
                        При наличии имущества, подлежащего реализации, контролируем процесс оценки и продажи. Следим за соблюдением ваших прав и защищаем от занижения стоимости имущества. Обеспечиваем сохранение единственного жилья.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">6</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Завершение процедуры</h3>
                      <p className="text-gray-300">
                        Получаем решение суда о завершении процедуры банкротства и освобождении от долгов. Помогаем восстановить кредитную историю. Консультируем по вопросам финансового планирования на будущее.
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
                    <div className="text-2xl font-bold text-gradient">от 30 000 ₽</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Срок процедуры</div>
                    <div className="text-2xl font-bold text-gradient">6-12 месяцев</div>
                  </div>
                </div>
                <div className="pt-6 border-t">
                  <p className="text-sm text-gray-600 mb-4">
                    Дополнительные расходы: госпошлина 300 ₽, вознаграждение финансового управляющего 25 000 ₽, публикация в ЕФРСБ от 430 ₽
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

export default IndividualBankruptcy;