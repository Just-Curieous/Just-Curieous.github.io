import Link from 'next/link';
import Image from 'next/image';
import { BlogPostMetadata } from '../types/blog';

interface BlogCardProps {
  post: BlogPostMetadata;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 border border-white/5">
      {post.featuredImage && (
        <div className="relative h-48 w-full rounded-t-xl overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
          <time dateTime={post.publishedAt} className="text-xs">
            {formatDate(post.publishedAt)}
          </time>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 hover:text-orange-400 transition-colors duration-200 leading-tight">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
          </div>
          
          {post.tags.length > 0 && (
            <div className="flex gap-1 flex-wrap">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-orange-400/20 text-orange-300 border border-orange-400/30 text-xs rounded-full hover:bg-orange-400/30 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 2 && (
                <span className="px-2 py-1 bg-gray-600/50 text-gray-400 text-xs rounded-full">
                  +{post.tags.length - 2}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}