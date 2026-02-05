import { useParams, Link, Navigate } from 'react-router-dom';
import { getBlogPostBySlug } from '@/data/blogPosts';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SafeImage from '@/components/SafeImage';
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | БезДолгов59`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.description);
      }
      
      // SEO: keywords meta tag
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', post.keywords.join(', '));

      // Scroll to top
      window.scrollTo(0, 0);
    }
  }, [post]);

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

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="max-w-4xl mx-auto mb-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">
                Главная
              </Link>
              <Icon name="ChevronRight" size={16} />
              <Link to="/blog" className="hover:text-primary transition-colors">
                Блог
              </Link>
              <Icon name="ChevronRight" size={16} />
              <span className="text-foreground">{post.title}</span>
            </nav>
          </div>

          {/* Article */}
          <article className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-8">
              <div className="mb-4">
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Icon name="User" size={18} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={18} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={18} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                <SafeImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[400px] object-cover"
                  fallbackIcon="FileText"
                  fallbackGradient="from-purple-100 to-blue-100"
                />
              </div>

              {/* Description */}
              <p className="text-xl text-foreground leading-relaxed">
                {post.description}
              </p>
            </header>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75',
                color: '#374151'
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-foreground mb-4">Ключевые темы:</h3>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Нужна помощь с банкротством?
              </h2>
              <p className="text-lg mb-6 opacity-90">
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

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                <Icon name="ArrowLeft" size={20} />
                Вернуться к списку статей
              </Link>
            </div>
          </article>
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

export default BlogPost;