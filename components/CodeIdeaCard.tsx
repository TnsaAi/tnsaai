import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThumbsUp } from 'lucide-react'

interface CodeIdeaCardProps {
  idea: {
    id: number
    title: string
    author: string
    date: string
    language: string
    votes: number
  }
}

export function CodeIdeaCard({ idea }: CodeIdeaCardProps) {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl sm:text-2xl">{idea.title}</CardTitle>
        <CardDescription>{idea.author} • {idea.date} • {idea.language}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center text-sm sm:text-base">
        <ThumbsUp className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
        <span>{idea.votes} votes</span>
      </CardContent>
    </Card>
  )
}

