import Icon from "@/components/ui/icon";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiesPolicy = () => {
  useEffect(() => {
    document.title = "Политика использования файлов cookie | БезДолгов59";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <section className="pt-28 pb-12 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto max-w-4xl">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-6"
              >
                <Icon name="ArrowLeft" size={16} />
                На главную
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                Политика использования файлов cookie
              </h1>
              <p className="mt-4 text-gray-600">
                Обновлено: 01 февраля 2025 года
              </p>
            </div>
          </section>

          <section className="py-12 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="prose prose-slate prose-lg max-w-none">

                <h2>1. Что такое файлы cookie</h2>
                <p>
                  Файлы cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве
                  (компьютере, планшете или мобильном телефоне) при посещении сайта bezdolgov59.ru
                  (далее — Сайт). Они позволяют Сайту запоминать ваши действия и предпочтения
                  (например, язык, размер шрифта и другие параметры отображения) в течение определённого
                  времени, чтобы вам не приходилось вводить их заново при каждом посещении Сайта
                  или переходе с одной страницы на другую.
                </p>

                <h2>2. Какие файлы cookie мы используем</h2>
                <p>На нашем Сайте используются следующие типы файлов cookie:</p>

                <h3>2.1. Строго необходимые cookie</h3>
                <p>
                  Эти файлы cookie необходимы для корректной работы Сайта. Они обеспечивают базовые
                  функции, такие как навигация по страницам, доступ к защищённым разделам Сайта
                  и отправка форм обратной связи. Без этих файлов cookie Сайт не сможет работать
                  надлежащим образом. Данные файлы cookie не собирают информацию о вас, которая
                  может быть использована в маркетинговых целях.
                </p>

                <h3>2.2. Аналитические cookie</h3>
                <p>
                  Эти файлы cookie позволяют нам подсчитывать количество посетителей и источники
                  трафика, чтобы оценивать и улучшать работу Сайта. Они помогают нам понять,
                  какие страницы наиболее и наименее популярны, и видеть, как посетители
                  перемещаются по Сайту. Вся информация, собираемая с помощью этих файлов cookie,
                  является агрегированной и анонимной.
                </p>
                <p>Мы используем следующие аналитические сервисы:</p>
                <ul>
                  <li>
                    <strong>Яндекс.Метрика</strong> — сервис веб-аналитики, предоставляемый
                    ООО «ЯНДЕКС» (119021, Россия, г. Москва, ул. Льва Толстого, д. 16).
                    Яндекс.Метрика использует файлы cookie для анализа поведения пользователей
                    на Сайте. Подробнее:{" "}
                    <a
                      href="https://yandex.ru/legal/confidential/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Политика конфиденциальности Яндекса
                    </a>
                    .
                  </li>
                </ul>

                <h3>2.3. Функциональные cookie</h3>
                <p>
                  Эти файлы cookie позволяют Сайту запоминать сделанный вами выбор (например,
                  согласие с использованием cookie, данные форм) и предоставлять улучшенные,
                  более персонализированные функции. Информация, которую собирают эти файлы cookie,
                  может быть анонимизирована, и они не могут отслеживать вашу активность
                  на других сайтах.
                </p>

                <h2>3. Перечень используемых cookie</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Название</th>
                        <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Тип</th>
                        <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Назначение</th>
                        <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Срок хранения</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">_ym_uid</td>
                        <td className="border border-gray-200 px-4 py-2">Аналитический</td>
                        <td className="border border-gray-200 px-4 py-2">Идентификатор пользователя Яндекс.Метрики</td>
                        <td className="border border-gray-200 px-4 py-2">1 год</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">_ym_d</td>
                        <td className="border border-gray-200 px-4 py-2">Аналитический</td>
                        <td className="border border-gray-200 px-4 py-2">Дата первого визита пользователя</td>
                        <td className="border border-gray-200 px-4 py-2">1 год</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">_ym_isad</td>
                        <td className="border border-gray-200 px-4 py-2">Аналитический</td>
                        <td className="border border-gray-200 px-4 py-2">Определение наличия блокировщика рекламы</td>
                        <td className="border border-gray-200 px-4 py-2">2 дня</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">_ym_visorc</td>
                        <td className="border border-gray-200 px-4 py-2">Аналитический</td>
                        <td className="border border-gray-200 px-4 py-2">Запись действий пользователя (Вебвизор)</td>
                        <td className="border border-gray-200 px-4 py-2">30 минут</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">cookies_accepted</td>
                        <td className="border border-gray-200 px-4 py-2">Функциональный</td>
                        <td className="border border-gray-200 px-4 py-2">Сохранение согласия на использование cookie</td>
                        <td className="border border-gray-200 px-4 py-2">1 год</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2>4. Управление файлами cookie</h2>
                <p>
                  Вы можете контролировать и/или удалять файлы cookie по своему усмотрению.
                  Вы можете удалить все файлы cookie, уже сохранённые на вашем устройстве,
                  а также настроить большинство браузеров так, чтобы они не сохранялись.
                </p>
                <p>Инструкции по управлению cookie в популярных браузерах:</p>
                <ul>
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/ru/kb/udalenie-kukov-dlya-udaleniya-informacii-kotoruyu-"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/ru-ru/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Safari
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/ru-ru/microsoft-edge/удаление-файлов-cookie-в-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://help.opera.com/ru/latest/web-preferences/#cookies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Opera
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://browser.yandex.ru/help/personal-data-protection/cookies.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Яндекс.Браузер
                    </a>
                  </li>
                </ul>
                <p>
                  Обратите внимание, что если вы решите отключить файлы cookie, некоторые
                  функции Сайта могут работать некорректно или стать недоступными.
                </p>

                <h2>5. Согласие на использование cookie</h2>
                <p>
                  При первом посещении Сайта вам будет показано уведомление об использовании
                  файлов cookie. Продолжая использовать Сайт или нажав кнопку «Принять»,
                  вы даёте согласие на использование файлов cookie в соответствии с настоящей
                  Политикой.
                </p>
                <p>
                  Вы можете отозвать своё согласие в любое время, удалив файлы cookie
                  из вашего браузера и очистив localStorage. После этого при следующем
                  посещении Сайта уведомление будет показано повторно.
                </p>

                <h2>6. Изменения в политике cookie</h2>
                <p>
                  Мы оставляем за собой право вносить изменения в настоящую Политику
                  использования файлов cookie. Обновлённая версия Политики вступает
                  в силу с момента её размещения на Сайте, если иное не предусмотрено
                  новой редакцией Политики.
                </p>
                <p>
                  Рекомендуем периодически проверять эту страницу, чтобы быть в курсе
                  любых изменений.
                </p>

                <h2>7. Контактная информация</h2>
                <p>
                  Если у вас есть вопросы относительно использования файлов cookie
                  на нашем Сайте, вы можете связаться с нами:
                </p>
                <ul>
                  <li>ИП Хабибрахманов А.Ф. (ОГРНИП: 323595800035942)</li>
                  <li>
                    Адрес: г. Пермь, ул. Екатерининская 109А, оф. 305
                  </li>
                  <li>
                    Телефон:{" "}
                    <a href="tel:+79026444201" className="text-primary hover:underline">
                      +7 (902) 64-44-201
                    </a>
                  </li>
                  <li>
                    Email:{" "}
                    <a href="mailto:infofaq@bezdolgov59.ru" className="text-primary hover:underline">
                      infofaq@bezdolgov59.ru
                    </a>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-sm text-gray-600">
                    См. также:{" "}
                    <Link to="/privacy-policy" className="text-primary hover:underline">
                      Политика конфиденциальности
                    </Link>
                  </p>
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

export default CookiesPolicy;
