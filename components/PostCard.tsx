import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface PostCardProps {
  post: {
    id: number
    title: string
    author: string
    date: string
    excerpt: string
    image: string
  }
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl sm:text-2xl">{post.title}</CardTitle>
        <CardDescription>{post.author} • {post.date}</CardDescription>
      </CardHeader>
      <CardContent>
        {post.image && post.image !== '' ? (
          <div className="relative w-full h-40 sm:h-48 mb-4">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        ) : (
          <div className="w-full h-40 sm:h-48 mb-4 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-gray-500">No image available</span>
          </div>
        )}
        <p className="text-sm sm:text-base">{post.excerpt}</p>
      </CardContent>
    </Card>
  )
}

