import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type BlogPost } from '@/data/blogPosts';

interface BlogPostsListProps {
  posts: BlogPost[];
  editingPost: BlogPost | null;
  onEdit: (post: BlogPost) => void;
}

export const BlogPostsList = ({ posts, editingPost, onEdit }: BlogPostsListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Статьи</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`p-4 rounded-lg border cursor-pointer transition ${
                editingPost?.id === post.id ? 'bg-primary/10 border-primary' : 'hover:bg-gray-50'
              }`}
              onClick={() => onEdit(post)}
            >
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm text-muted-foreground">{post.category} • {post.date}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
