import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface BlogPostEditorProps {
  isCreating: boolean;
  formData: {
    title: string;
    slug: string;
    description: string;
    content: string;
    image: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    keywords: string;
  };
  uploadingImage: boolean;
  onFormChange: (field: string, value: string) => void;
  onGenerateSlug: () => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onCancel: () => void;
}

export const BlogPostEditor = ({
  isCreating,
  formData,
  uploadingImage,
  onFormChange,
  onGenerateSlug,
  onImageUpload,
  onSave,
  onCancel
}: BlogPostEditorProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{isCreating ? 'Новая статья' : 'Редактирование'}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Заголовок</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => onFormChange('title', e.target.value)}
            placeholder="Заголовок статьи"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="slug">URL (slug)</Label>
          <Input
            id="slug"
            value={formData.slug}
            onChange={(e) => onFormChange('slug', e.target.value)}
            placeholder="nazvanie-statyi-latinicey"
          />
          <Button
            size="sm"
            variant="outline"
            onClick={onGenerateSlug}
          >
            Сгенерировать из заголовка
          </Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Описание</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => onFormChange('description', e.target.value)}
            placeholder="Краткое описание для превью"
            rows={2}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Контент (HTML)</Label>
          <Textarea
            id="content"
            value={formData.content}
            onChange={(e) => onFormChange('content', e.target.value)}
            placeholder="<h2>Заголовок</h2><p>Текст...</p>"
            rows={8}
            className="font-mono text-sm"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="image">Изображение</Label>
          <div className="flex gap-2">
            <Input
              id="image"
              value={formData.image}
              onChange={(e) => onFormChange('image', e.target.value)}
              placeholder="https://images.unsplash.com/..."
              className="flex-1"
            />
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={onImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                disabled={uploadingImage}
              />
              <Button type="button" variant="outline" disabled={uploadingImage} className="gap-2">
                {uploadingImage ? (
                  <Icon name="Loader2" size={16} className="animate-spin" />
                ) : (
                  <Icon name="Upload" size={16} />
                )}
                {uploadingImage ? 'Загрузка...' : 'Загрузить'}
              </Button>
            </div>
          </div>
          {formData.image && (
            <div className="mt-2">
              <img src={formData.image} alt="Preview" className="w-full h-32 object-cover rounded-lg" />
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="author">Автор</Label>
            <Input
              id="author"
              value={formData.author}
              onChange={(e) => onFormChange('author', e.target.value)}
              placeholder="Имя автора"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Дата</Label>
            <Input
              id="date"
              value={formData.date}
              onChange={(e) => onFormChange('date', e.target.value)}
              placeholder="25 января 2026"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="readTime">Время чтения</Label>
            <Input
              id="readTime"
              value={formData.readTime}
              onChange={(e) => onFormChange('readTime', e.target.value)}
              placeholder="5 мин"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Категория</Label>
            <Input
              id="category"
              value={formData.category}
              onChange={(e) => onFormChange('category', e.target.value)}
              placeholder="Советы"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="keywords">Ключевые слова (через запятую)</Label>
          <Input
            id="keywords"
            value={formData.keywords}
            onChange={(e) => onFormChange('keywords', e.target.value)}
            placeholder="банкротство, финансы, долги"
          />
        </div>

        <div className="flex gap-2">
          <Button onClick={onSave} className="flex-1 gap-2">
            <Icon name="Copy" size={20} />
            Скопировать код
          </Button>
          <Button variant="outline" onClick={onCancel}>
            Отмена
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
