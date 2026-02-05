import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted px-4">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-[180px] md:text-[240px] font-bold leading-none bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent animate-pulse">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Страница не найдена
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            К сожалению, запрашиваемая страница не существует или была удалена. 
            Возможно, вы перешли по устаревшей ссылке.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Icon name="Home" size={20} />
            Вернуться на главную
          </Link>
          
          <a 
            href="https://t.me/Bez_Dolgov_All"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Icon name="MessageCircle" size={20} />
            Связаться с нами
          </a>
        </div>

        <div className="pt-8 opacity-50">
          <Icon name="AlertCircle" size={64} className="mx-auto text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}
