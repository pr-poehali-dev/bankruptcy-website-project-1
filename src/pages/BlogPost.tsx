import { useParams, Link, Navigate } from 'react-router-dom';
import { getBlogPostBySlug } from '@/data/blogPosts';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | БанкротЭксперт`;
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

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="max-w-4xl mx-auto mb-8">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-purple-600 transition-colors">
                Главная
              </Link>
              <Icon name="ChevronRight" size={16} />
              <Link to="/blog" className="hover:text-purple-600 transition-colors">
                Блог
              </Link>
              <Icon name="ChevronRight" size={16} />
              <span className="text-gray-900">{post.title}</span>
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
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
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
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-xl text-gray-700 leading-relaxed">
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ключевые темы:</h3>
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
              <Link
                to="/#consultation"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Получить консультацию
                <Icon name="ArrowRight" size={20} />
              </Link>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
              >
                <Icon name="ArrowLeft" size={20} />
                Вернуться к списку статей
              </Link>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
