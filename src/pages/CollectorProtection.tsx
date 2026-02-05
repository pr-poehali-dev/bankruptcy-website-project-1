import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const CollectorProtection = () => {
  return (
    <>
      <Helmet>
        <title>Защита от коллекторов в Перми - БезДолгов59</title>
        <meta name="description" content="Юридическая защита от незаконных действий коллекторов. Остановим звонки, угрозы и давление. Законные способы противодействия коллекторским агентствам. Бесплатная консультация." />
        <meta name="keywords" content="защита от коллекторов, незаконные действия коллекторов, противодействие коллекторам, права должника, юридическая помощь, Пермь" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <section className="relative py-20 px-4 bg-gradient-to-br from-slate-50 via-red-50 to-orange-50">
            <div className="container mx-auto max-w-4xl">
              <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
                <Icon name="ArrowLeft" size={20} />
                <span>Вернуться на главную</span>
              </Link>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                    <Icon name="ShieldCheck" className="text-white" size={32} />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Защита от коллекторов
                  </h1>
                </div>

                <div className="prose prose-slate max-w-none">
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Что такое защита от коллекторов?</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Защита от коллекторов — это комплекс юридических мер, направленных на пресечение незаконных действий коллекторских агентств в отношении должников. Несмотря на то, что коллекторская деятельность регулируется законом, на практике многие агентства превышают свои полномочия, используя угрозы, психологическое давление и другие запрещенные методы воздействия.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Профессиональная юридическая защита позволяет не только остановить противоправные действия коллекторов, но и привлечь их к ответственности, получить компенсацию морального вреда и восстановить свои законные права. Важно понимать, что наличие долга не дает коллекторам права нарушать закон и ваши конституционные права.
                  </p>

                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Незаконные действия коллекторов</h2>
                  <div className="bg-red-50 rounded-xl p-6 mb-6">
                    <p className="font-semibold text-slate-900 mb-4">Коллекторам ЗАПРЕЩЕНО:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Icon name="XCircle" className="text-red-500 mt-1 flex-shrink-0" size={20} />
                        <span className="text-slate-700">Звонить более одного раза в сутки, двух раз в неделю или восьми раз в месяц</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="XCircle" className="text-red-500 mt-1 flex-shrink-0" size={20} />
                        <span className="text-slate-700">Звонить в ночное время (с 22:00 до 8:00 в будни, с 20:00 до 9:00 в выходные)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="XCircle" className="text-red-500 mt-1 flex-shrink-0" size={20} />
                        <span className="text-slate-700">Применять физическое насилие, угрозы, оскорбления или психологическое давление</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="XCircle" className="text-red-500 mt-1 flex-shrink-0" size={20} />
                        <span className="text-slate-700">Обращаться к должнику лично в нерабочее время без его согласия</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="XCircle" className="text-red-500 mt-1 flex-shrink-0" size={20} />
                        <span className="text-slate-700">Раскрывать информацию о долге третьим лицам (родственникам, соседям, работодателю)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="XCircle" className="text-red-500 mt-1 flex-shrink-0" size={20} />
                        <span className="text-slate-700">Требовать погашения долга с родственников или третьих лиц</span>
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Когда нужна защита от коллекторов?</h2>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
                      <div className="flex items-start gap-3">
                        <Icon name="Phone" className="text-red-500 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Постоянные звонки</h4>
                          <p className="text-sm text-slate-600">Коллекторы звонят вам или вашим родственникам по несколько раз в день</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
                      <div className="flex items-start gap-3">
                        <Icon name="MessageSquare" className="text-red-500 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Угрозы и оскорбления</h4>
                          <p className="text-sm text-slate-600">В ваш адрес звучат угрозы физической расправы или унижающие высказывания</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
                      <div className="flex items-start gap-3">
                        <Icon name="Users" className="text-red-500 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Давление на близких</h4>
                          <p className="text-sm text-slate-600">Коллекторы контактируют с вашими родственниками, друзьями или коллегами</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
                      <div className="flex items-start gap-3">
                        <Icon name="Home" className="text-red-500 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Визиты по месту жительства</h4>
                          <p className="text-sm text-slate-600">Коллекторы приходят к вам домой или на работу без предварительного согласования</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Как мы защищаем от коллекторов</h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Фиксация нарушений</h4>
                        <p className="text-slate-600 text-sm">Собираем доказательства незаконных действий коллекторов: записи звонков, скриншоты сообщений, показания свидетелей. Каждое нарушение документируется для последующего использования в суде</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Официальные претензии</h4>
                        <p className="text-slate-600 text-sm">Направляем юридически грамотные претензии коллекторскому агентству и кредитору с требованием прекратить противоправные действия и соблюдать законодательство</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Жалобы в надзорные органы</h4>
                        <p className="text-slate-600 text-sm">Подаем обращения в Роспотребнадзор, ФССП, Прокуратуру и ЦБ РФ. Инициируем проверки деятельности коллекторского агентства и кредитной организации</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Судебная защита</h4>
                        <p className="text-slate-600 text-sm">При необходимости подаем иски о взыскании компенсации морального вреда, запрете на действия коллекторов и привлечении их к административной или уголовной ответственности</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Полное сопровождение</h4>
                        <p className="text-slate-600 text-sm">Контролируем выполнение требований, отвечаем на новые попытки незаконного воздействия, консультируем вас по всем возникающим вопросам до полного решения проблемы</p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Ваши права при общении с коллекторами</h2>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-slate-700"><strong>Право на уведомление:</strong> Коллектор обязан представиться, назвать организацию и цель обращения</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-slate-700"><strong>Право на отказ:</strong> Вы можете отказаться от личных встреч и телефонных разговоров</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-slate-700"><strong>Право на запись:</strong> Вы имеете право записывать разговоры с коллекторами</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-slate-700"><strong>Право на жалобу:</strong> При нарушениях можете обратиться в полицию и надзорные органы</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-slate-700"><strong>Право на защиту:</strong> Вы можете требовать компенсации морального вреда за незаконные действия</span>
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Ответственность коллекторов</h2>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="border border-red-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-3 mx-auto">
                        <Icon name="FileText" className="text-red-600" size={24} />
                      </div>
                      <h4 className="font-semibold text-slate-900 text-center mb-2">Административная</h4>
                      <p className="text-sm text-slate-600 text-center">Штрафы до 500 000 рублей за нарушение закона о коллекторской деятельности</p>
                    </div>
                    <div className="border border-red-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-3 mx-auto">
                        <Icon name="Scale" className="text-red-600" size={24} />
                      </div>
                      <h4 className="font-semibold text-slate-900 text-center mb-2">Гражданская</h4>
                      <p className="text-sm text-slate-600 text-center">Компенсация морального вреда должнику до 500 000 рублей</p>
                    </div>
                    <div className="border border-red-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-3 mx-auto">
                        <Icon name="AlertTriangle" className="text-red-600" size={24} />
                      </div>
                      <h4 className="font-semibold text-slate-900 text-center mb-2">Уголовная</h4>
                      <p className="text-sm text-slate-600 text-center">Лишение свободы до 5 лет за угрозы, вымогательство и насилие</p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Почему важно действовать немедленно</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Чем дольше вы терпите противоправные действия коллекторов, тем больший стресс испытываете и тем сложнее доказать систематический характер нарушений. Незаконное давление может привести к серьезным психологическим проблемам, конфликтам в семье, потере работы и другим негативным последствиям.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Наши юристы помогли сотням клиентов остановить коллекторский террор и получить заслуженную компенсацию. Мы знаем все уловки недобросовестных взыскателей и эффективно противодействуем их методам. Не позволяйте коллекторам нарушать ваши права — обратитесь за профессиональной защитой прямо сейчас.
                  </p>

                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 text-center mt-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Остановите коллекторов сегодня</h3>
                    <p className="text-slate-700 mb-6">Получите бесплатную консультацию и узнайте, как защитить себя и своих близких от незаконных действий</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="tel:+79026444201">
                        <Button size="lg" className="w-full sm:w-auto">
                          <Icon name="Phone" size={20} className="mr-2" />
                          Позвонить сейчас
                        </Button>
                      </a>
                      <Link to="/#contact">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto">
                          <Icon name="Shield" size={20} className="mr-2" />
                          Получить защиту
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

export default CollectorProtection;