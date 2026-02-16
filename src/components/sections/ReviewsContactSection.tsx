import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ReviewsContactSectionProps {
  formData: {
    name: string;
    phone: string;
    debt_amount: string;
    comment: string;
    honeypot: string;
  };
  isSubmitting: boolean;
  onFormChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ReviewsContactSection = ({ 
  formData, 
  isSubmitting, 
  onFormChange, 
  onSubmit 
}: ReviewsContactSectionProps) => {
  const reviewsRef = useIntersectionObserver();

  return (
    <>
      <section id="reviews" className="py-12 sm:py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50" ref={reviewsRef.ref}>
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-8 sm:mb-16 space-y-3 sm:space-y-4 transition-all duration-700 ${reviewsRef.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Badge className="gradient-accent text-white border-0 text-xs sm:text-sm">Отзывы клиентов</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Что говорят <span className="text-gradient">наши клиенты</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
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

      <section id="contact" className="py-12 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4">
              <Badge className="gradient-primary text-white border-0 text-xs sm:text-sm">Контакты</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Свяжитесь <span className="text-gradient">с нами</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 px-4">
                Получите бесплатную консультацию и анализ вашей ситуации
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <a href="tel:+79026444201" className="text-primary hover:underline">+7 (902) 64-44-201</a>
                      <div className="text-sm text-gray-600 mt-1">Пн-Пт: 9:00 - 20:00, Сб-Вс: 10:00 - 18:00</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:infofaq@bezdolgov59.ru" className="text-primary hover:underline">infofaq@bezdolgov59.ru</a>
                      <div className="text-sm text-gray-600 mt-1">Ответим в течение часа</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Офис</div>
                      <div className="text-gray-700">г. Пермь, ул. Екатерининская 109А, оф. 305</div>
                      <div className="text-sm text-gray-600 mt-1">Приём по предварительной записи</div>
                    </div>
                  </div>

                  <div className="pt-6 border-t space-y-3">
                    <div className="font-semibold mb-3">Свяжитесь с менеджером</div>
                    
                    <a 
                      href="https://vk.me/bezdolgov59" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 hover:opacity-90 transition-opacity group"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.45 14.8c-.43.46-1.23.72-2.38.76-.39.01-.82.02-1.28.02-1.18 0-2.04-.08-2.56-.23-.69-.2-1.23-.54-1.65-1.03-.42-.49-.74-1.18-1.01-2.09l-.01-.04c-.15-.51-.28-.99-.4-1.43-.37-1.36-.56-2.05-1.16-2.05-.06 0-.16.02-.32.08-.15.06-.32.15-.51.28l-.39-.49c.24-.21.48-.42.72-.62.42-.36.77-.61 1.02-.74.45-.24.88-.36 1.28-.38.85-.04 1.37.5 1.58 1.61.22 1.21.37 1.97.45 2.27.24 1.07.5 1.61.8 1.61.23 0 .58-.36 1.04-1.09.46-.72.71-1.27.75-1.64.07-.61-.18-0.92-.74-.92-.26 0-.53.06-.82.17.54-1.77 1.58-2.63 3.11-2.59 1.13.03 1.66.77 1.6 2.21-.04.89-.35 1.86-0.94 2.91-.56 1-.84 1.64-.84 1.93 0 .19.08.38.25.57.17.19.47.43.91.72.43.29.76.51.98.66.85.57 1.29 1.08 1.32 1.54.04.7-.31 1.05-1.05 1.05-.22 0-.49-.08-.82-.25z" />
                      </svg>
                      <span className="text-white font-medium">Написать в ВК</span>
                    </a>

                    <a 
                      href="https://t.me/Bez_Dolgov_All" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 hover:opacity-90 transition-opacity group"
                    >
                      <Icon name="Send" size={20} className="text-white" />
                      <span className="text-white font-medium">Написать в ТГ</span>
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => onFormChange('name', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => onFormChange('phone', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сумма долга (необязательно)</label>
                    <input 
                      type="text"
                      value={formData.debt_amount}
                      onChange={(e) => onFormChange('debt_amount', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Примерная сумма"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий (необязательно)</label>
                    <textarea 
                      value={formData.comment}
                      onChange={(e) => onFormChange('comment', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Опишите вашу ситуацию"
                    />
                  </div>
                  <input 
                    type="text"
                    name="website"
                    value={formData.honeypot}
                    onChange={(e) => onFormChange('honeypot', e.target.value)}
                    style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full gradient-primary hover:opacity-90 transition-opacity"
                  >
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <Link to="/privacy-policy" className="text-primary hover:underline">политикой конфиденциальности</Link>
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};