import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Footer from "@/components/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const DebtRestructuring = () => {
  return (
    <>
      <Helmet>
        <title>Реструктуризация долгов в Перми - БезДолгов59</title>
        <meta name="description" content="Профессиональная помощь в реструктуризации долгов физических и юридических лиц. Легальные способы снижения долговой нагрузки, рассрочка платежей, защита от коллекторов. Консультация юриста бесплатно." />
        <meta name="keywords" content="реструктуризация долгов, рассрочка платежей, снижение долговой нагрузки, реструктуризация кредитов, помощь должникам, Пермь" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <section className="relative py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <div className="container mx-auto max-w-4xl">
              <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
                <Icon name="ArrowLeft" size={20} />
                <span>Вернуться на главную</span>
              </Link>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                    <Icon name="RefreshCw" className="text-white" size={32} />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Реструктуризация долгов
                  </h1>
                </div>

                <div className="prose prose-slate max-w-none">
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Что такое реструктуризация долгов?</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Реструктуризация долгов — это легальный способ пересмотра условий кредитных обязательств, который позволяет должнику избежать банкротства и сохранить финансовую стабильность. Суть процедуры заключается в изменении графика погашения задолженности, снижении процентной ставки или частичном списании долга по согласованию с кредиторами.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    В отличие от банкротства, реструктуризация не влечет за собой продажу имущества и не накладывает ограничения на финансовую деятельность. Это оптимальное решение для тех, кто временно испытывает финансовые трудности, но планирует восстановить платежеспособность.
                  </p>

                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Когда необходима реструктуризация?</h2>
                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-slate-700">Временная потеря дохода из-за болезни, увольнения или форс-мажорных обстоятельств</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-slate-700">Накопление просрочек по нескольким кредитам одновременно</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-slate-700">Ежемесячные платежи превышают 50% от совокупного дохода семьи</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-slate-700">Активное давление коллекторских агентств и угроза судебного взыскания</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-slate-700">Желание сохранить имущество и избежать процедуры банкротства</span>
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Виды реструктуризации долгов</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Icon name="User" className="text-primary" size={20} />
                        </div>
                        <h3 className="font-semibold text-lg text-slate-900">Для физических лиц</h3>
                      </div>
                      <p className="text-slate-600 text-sm">
                        Пересмотр условий кредитов, рассрочка платежей, снижение процентной ставки, объединение долгов в один с более выгодными условиями
                      </p>
                    </div>

                    <div className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Icon name="Building" className="text-primary" size={20} />
                        </div>
                        <h3 className="font-semibold text-lg text-slate-900">Для юридических лиц</h3>
                      </div>
                      <p className="text-slate-600 text-sm">
                        Переговоры с кредиторами, отсрочка платежей, пересмотр графика погашения займов, реструктуризация корпоративных обязательств
                      </p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Преимущества реструктуризации</h2>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <Icon name="TrendingDown" className="text-primary mt-1 flex-shrink-0" size={24} />
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Снижение долговой нагрузки</h4>
                          <p className="text-sm text-slate-600">Уменьшение ежемесячных платежей до комфортного уровня</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Shield" className="text-primary mt-1 flex-shrink-0" size={24} />
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Защита имущества</h4>
                          <p className="text-sm text-slate-600">Сохранение квартиры, автомобиля и другой собственности</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Ban" className="text-primary mt-1 flex-shrink-0" size={24} />
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Остановка коллекторов</h4>
                          <p className="text-sm text-slate-600">Прекращение звонков и давления со стороны взыскателей</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Clock" className="text-primary mt-1 flex-shrink-0" size={24} />
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Увеличение срока погашения</h4>
                          <p className="text-sm text-slate-600">Растяжение долга на более длительный период</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Этапы реструктуризации долгов</h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Анализ финансовой ситуации</h4>
                        <p className="text-slate-600 text-sm">Наши специалисты проводят детальный аудит всех долговых обязательств, изучают кредитные договоры и оценивают реальные возможности погашения задолженности</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Разработка плана реструктуризации</h4>
                        <p className="text-slate-600 text-sm">Формируем индивидуальную стратегию с учетом вашего дохода, количества кредиторов и размера задолженности. Определяем оптимальные условия для переговоров</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Переговоры с кредиторами</h4>
                        <p className="text-slate-600 text-sm">Наши юристы ведут переговоры с банками и микрофинансовыми организациями, добиваясь снижения процентной ставки, отсрочки платежей или частичного списания долга</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Заключение соглашений</h4>
                        <p className="text-slate-600 text-sm">Оформляем документальные соглашения о реструктуризации с каждым кредитором, фиксируем новые условия погашения задолженности</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Сопровождение и контроль</h4>
                        <p className="text-slate-600 text-sm">Помогаем соблюдать новый график платежей, контролируем выполнение обязательств со стороны кредиторов, консультируем по возникающим вопросам</p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Почему выбирают нас?</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Команда БезДолгов59 обладает успешным опытом проведения реструктуризации долгов для сотен клиентов. Мы знаем, как договориться даже с самыми жесткими кредиторами и добиться максимально выгодных условий для должника. Наш подход основан на глубоком знании законодательства, многолетней практике переговоров и индивидуальном подходе к каждому случаю.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Мы не используем шаблонные решения — каждая ситуация уникальна и требует персональной стратегии. Доверьте свои финансовые проблемы профессионалам и получите шанс на новый старт без долгового бремени.
                  </p>

                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 text-center mt-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Начните путь к финансовой свободе</h3>
                    <p className="text-slate-700 mb-6">Запишитесь на бесплатную консультацию и узнайте, как реструктуризация может решить ваши проблемы с долгами</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="tel:+79026444201">
                        <Button size="lg" className="w-full sm:w-auto">
                          <Icon name="Phone" size={20} className="mr-2" />
                          Позвонить сейчас
                        </Button>
                      </a>
                      <Link to="/#contact">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto">
                          <Icon name="MessageCircle" size={20} className="mr-2" />
                          Записаться на консультацию
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DebtRestructuring;
