import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle } from 'lucide-react'

interface DiscussionThreadProps {
  discussion: {
    id: number
    title: string
    author: string
    date: string
    replies: number
  }
}

export function DiscussionThread({ discussion }: DiscussionThreadProps) {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl sm:text-2xl">{discussion.title}</CardTitle>
        <CardDescription>{discussion.author} • {discussion.date}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center text-sm sm:text-base">
        <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
        <span>{discussion.replies} replies</span>
      </CardContent>
    </Card>
  )
}

