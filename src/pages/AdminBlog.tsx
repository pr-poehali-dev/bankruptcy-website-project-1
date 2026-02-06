import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
import { blogPosts, type BlogPost } from '@/data/blogPosts';
import { AdminAuthForm } from '@/components/admin/AdminAuthForm';
import { BlogPostsList } from '@/components/admin/BlogPostsList';
import { BlogPostEditor } from '@/components/admin/BlogPostEditor';

const AdminBlog = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(localStorage.getItem('admin_token'));
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState<number | null>(null);
  const [lockoutTime, setLockoutTime] = useState<number>(0);
  const [requires2FA, setRequires2FA] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [codeAttemptsLeft, setCodeAttemptsLeft] = useState<number | null>(null);
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

  useEffect(() => {
    if (authToken) {
      verifyToken();
    }
  }, []);

  useEffect(() => {
    if (lockoutTime > 0) {
      const timer = setInterval(() => {
        setLockoutTime(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [lockoutTime]);

  const verifyToken = async () => {
    if (!authToken) return;

    try {
      const response = await fetch('https://functions.poehali.dev/27069cbd-6c31-4646-bb54-2bc66c42b2a8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'verify', token: authToken })
      });

      const data = await response.json();

      if (data.valid) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('admin_token');
        setAuthToken(null);
      }
    } catch (error) {
      console.error('Token verification failed:', error);
      localStorage.removeItem('admin_token');
      setAuthToken(null);
    }
  };

  const handleLogin = async () => {
    if (!password.trim()) {
      toast({
        title: 'Ошибка',
        description: 'Введите пароль',
        variant: 'destructive'
      });
      return;
    }

    setIsLoggingIn(true);

    try {
      const response = await fetch('https://functions.poehali.dev/27069cbd-6c31-4646-bb54-2bc66c42b2a8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'login', password })
      });

      const data = await response.json();

      if (response.status === 429) {
        setLockoutTime(data.locked_for_seconds || 900);
        toast({
          title: 'Доступ заблокирован',
          description: data.message,
          variant: 'destructive'
        });
      } else if (response.ok && data.success) {
        if (data.requires_2fa) {
          setRequires2FA(true);
          toast({
            title: 'Код отправлен',
            description: data.message
          });
        } else {
          localStorage.setItem('admin_token', data.token);
          setAuthToken(data.token);
          setIsAuthenticated(true);
          setPassword('');
          setAttemptsLeft(null);
          toast({
            title: 'Вход выполнен',
            description: 'Добро пожаловать в админ-панель!'
          });
        }
      } else {
        setAttemptsLeft(data.attempts_left ?? null);
        toast({
          title: 'Ошибка входа',
          description: data.message || 'Неверный пароль',
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось подключиться к серверу',
        variant: 'destructive'
      });
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode.trim() || verificationCode.length !== 6) {
      toast({
        title: 'Ошибка',
        description: 'Введите 6-значный код',
        variant: 'destructive'
      });
      return;
    }

    setIsLoggingIn(true);

    try {
      const response = await fetch('https://functions.poehali.dev/27069cbd-6c31-4646-bb54-2bc66c42b2a8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'verify_code', code: verificationCode })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('admin_token', data.token);
        setAuthToken(data.token);
        setIsAuthenticated(true);
        setRequires2FA(false);
        setVerificationCode('');
        setCodeAttemptsLeft(null);
        toast({
          title: 'Вход выполнен',
          description: 'Добро пожаловать в админ-панель!'
        });
      } else {
        setCodeAttemptsLeft(data.attempts_left ?? null);
        if (response.status === 400 || response.status === 429) {
          setRequires2FA(false);
          setVerificationCode('');
        }
        toast({
          title: 'Ошибка',
          description: data.message || 'Неверный код',
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось подключиться к серверу',
        variant: 'destructive'
      });
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleCancel2FA = () => {
    setRequires2FA(false);
    setVerificationCode('');
    setCodeAttemptsLeft(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setAuthToken(null);
    setIsAuthenticated(false);
    toast({
      title: 'Выход выполнен',
      description: 'Вы вышли из админ-панели'
    });
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

  const handleFormChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
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

        const response = await fetch('https://functions.poehali.dev/292cdd18-e7d0-4f99-bc35-a0e01ccbd5f7', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: base64 })
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

  const handleGenerateSlug = () => {
    setFormData({ ...formData, slug: generateSlug(formData.title) });
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

  const handleCancel = () => {
    setEditingPost(null);
    setIsCreating(false);
  };

  if (!isAuthenticated) {
    return (
      <AdminAuthForm
        password={password}
        setPassword={setPassword}
        verificationCode={verificationCode}
        setVerificationCode={setVerificationCode}
        isLoggingIn={isLoggingIn}
        lockoutTime={lockoutTime}
        attemptsLeft={attemptsLeft}
        requires2FA={requires2FA}
        codeAttemptsLeft={codeAttemptsLeft}
        onLogin={handleLogin}
        onVerifyCode={handleVerifyCode}
        onCancel2FA={handleCancel2FA}
      />
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
            <Button onClick={handleLogout} variant="destructive" className="gap-2">
              <Icon name="LogOut" size={20} />
              Выйти
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <BlogPostsList
            posts={blogPosts}
            editingPost={editingPost}
            onEdit={handleEdit}
          />

          {(editingPost || isCreating) && (
            <BlogPostEditor
              isCreating={isCreating}
              formData={formData}
              uploadingImage={uploadingImage}
              onFormChange={handleFormChange}
              onGenerateSlug={handleGenerateSlug}
              onImageUpload={handleImageUpload}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminBlog;
