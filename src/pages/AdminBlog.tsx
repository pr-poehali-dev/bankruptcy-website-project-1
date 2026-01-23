import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
import { blogPosts, type BlogPost } from '@/data/blogPosts';

const AdminBlog = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    content: '',
    image: '',
    author: '',
    date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }),
    readTime: '',
    category: '',
    keywords: ''
  });

  const handleLogin = () => {
    if (password === 'admin2026') {
      setIsAuthenticated(true);
      toast({
        title: 'Вход выполнен',
        description: 'Добро пожаловать в админ-панель!'
      });
    } else {
      toast({
        title: 'Ошибка',
        description: 'Неверный пароль',
        variant: 'destructive'
      });
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setIsCreating(false);
    setFormData({
      title: post.title,
      slug: post.slug,
      description: post.description,
      content: post.content,
      image: post.image,
      author: post.author,
      date: post.date,
      readTime: post.readTime,
      category: post.category,
      keywords: post.keywords.join(', ')
    });
  };

  const handleCreate = () => {
    setIsCreating(true);
    setEditingPost(null);
    setFormData({
      title: '',
      slug: '',
      description: '',
      content: '',
      image: '',
      author: '',
      date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }),
      readTime: '',
      category: '',
      keywords: ''
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, выберите изображение',
        variant: 'destructive'
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: 'Ошибка',
        description: 'Размер файла не должен превышать 5 МБ',
        variant: 'destructive'
      });
      return;
    }

    setUploadingImage(true);

    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64 = event.target?.result as string;

        const response = await fetch('https://functions.poehali.dev/292cddb3-7c44-41d9-8771-4cecdea6bff8', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            image: base64,
            filename: file.name
          })
        });

        if (!response.ok) {
          throw new Error('Ошибка загрузки изображения');
        }

        const data = await response.json();
        setFormData({ ...formData, image: data.url });
        
        toast({
          title: 'Успешно!',
          description: 'Изображение загружено'
        });
      };

      reader.readAsDataURL(file);
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось загрузить изображение',
        variant: 'destructive'
      });
    } finally {
      setUploadingImage(false);
    }
  };

  const generateSlug = (title: string) => {
    const translit: Record<string, string> = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh',
      'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
      'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts',
      'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
    };
    
    return title
      .toLowerCase()
      .split('')
      .map(char => translit[char] || char)
      .join('')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleSave = () => {
    const newPost: BlogPost = {
      id: isCreating ? String(blogPosts.length + 1) : editingPost!.id,
      title: formData.title,
      slug: formData.slug || generateSlug(formData.title),
      description: formData.description,
      content: formData.content,
      image: formData.image,
      author: formData.author,
      date: formData.date,
      readTime: formData.readTime,
      category: formData.category,
      keywords: formData.keywords.split(',').map(k => k.trim())
    };

    const code = `// Скопируйте этот код в src/data/blogPosts.ts
{
  id: '${newPost.id}',
  slug: '${newPost.slug}',
  title: '${newPost.title}',
  description: '${newPost.description}',
  content: \`${newPost.content}\`,
  image: '${newPost.image}',
  author: '${newPost.author}',
  date: '${newPost.date}',
  readTime: '${newPost.readTime}',
  category: '${newPost.category}',
  keywords: [${newPost.keywords.map(k => `'${k}'`).join(', ')}]
}`;

    navigator.clipboard.writeText(code);
    
    toast({
      title: isCreating ? 'Статья создана!' : 'Статья обновлена!',
      description: 'Код скопирован в буфер обмена. Вставьте его в src/data/blogPosts.ts'
    });

    setIsCreating(false);
    setEditingPost(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Админ-панель блога</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                placeholder="Введите пароль"
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              Войти
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Управление блогом</h1>
          <div className="flex gap-2">
            <Button onClick={handleCreate} className="gap-2">
              <Icon name="Plus" size={20} />
              Создать статью
            </Button>
            <Button onClick={() => navigate('/blog')} variant="outline" className="gap-2">
              <Icon name="ArrowLeft" size={20} />
              К блогу
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Статьи</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className={`p-4 rounded-lg border cursor-pointer transition ${
                      editingPost?.id === post.id ? 'bg-primary/10 border-primary' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleEdit(post)}
                  >
                    <h3 className="font-semibold">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">{post.category} • {post.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {(editingPost || isCreating) && (
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
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Заголовок статьи"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">URL (slug)</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="nazvanie-statyi-latinicey"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setFormData({ ...formData, slug: generateSlug(formData.title) })}
                  >
                    Сгенерировать из заголовка
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Описание</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Краткое описание для превью"
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Контент (HTML)</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      placeholder="https://images.unsplash.com/..."
                      className="flex-1"
                    />
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
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
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      placeholder="Имя автора"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Дата</Label>
                    <Input
                      id="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                      placeholder="5 мин"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Категория</Label>
                    <Input
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      placeholder="Советы"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keywords">Ключевые слова (через запятую)</Label>
                  <Input
                    id="keywords"
                    value={formData.keywords}
                    onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                    placeholder="банкротство, финансы, долги"
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={handleSave} className="flex-1 gap-2">
                    <Icon name="Copy" size={20} />
                    Скопировать код
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setEditingPost(null);
                      setIsCreating(false);
                    }}
                  >
                    Отмена
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground">
                  После копирования вставьте код в массив blogPosts в файле src/data/blogPosts.ts
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminBlog;