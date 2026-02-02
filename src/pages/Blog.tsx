import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Blog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = 'Блог о банкротстве физических лиц | БезДолгов59';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Полезные статьи о банкротстве физических лиц: инструкции, советы экспертов, актуальная информация о законодательстве.');
    }
  }, []);

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
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Блог о банкротстве
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полезные статьи, инструкции и советы экспертов по банкротству физических лиц
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={16} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Нужна консультация по банкротству?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Получите бесплатную консультацию нашего специалиста
            </p>
            <Button
              onClick={() => setDialogOpen(true)}
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Получить консультацию
              <Icon name="ArrowRight" size={20} />
            </Button>
          </div>
        </div>
      </main>

      <Footer />

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gradient">Бесплатная консультация</DialogTitle>
            <DialogDescription>
              Оставьте свои контакты, и мы свяжемся с вами в течение 15 минут
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium mb-2">Ваше имя *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Иван Иванов"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Телефон *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+7 (___) ___-__-__"
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full gradient-primary hover:opacity-90 text-white disabled:opacity-50">
              {isSubmitting ? 'Отправка...' : 'Получить консультацию'}
              <Icon name="Send" size={16} className="ml-2" />
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

export default Blog;