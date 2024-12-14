'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import { auth, firestore } from '@/lib/firebase-client'
import { doc, getDoc, updateDoc, arrayUnion, increment } from 'firebase/firestore'

export default function CodeIdeaPage() {
  const params = useParams()
  const [codeIdea, setCodeIdea] = useState<any>(null)
  const [newReply, setNewReply] = useState('')
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const fetchCodeIdea = async () => {
      if (params.id) {
        const docRef = doc(firestore, 'codeIdeas', params.id as string)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setCodeIdea({ id: docSnap.id, ...docSnap.data() })
        }
      }
    }
    fetchCodeIdea()
  }, [params.id])

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newReply.trim() && user) {
      const reply = {
        id: Date.now(),
        author: user.displayName || user.email,
        date: new Date().toISOString(),
        content: newReply
      }
      const codeIdeaRef = doc(firestore, 'codeIdeas', codeIdea.id)
      await updateDoc(codeIdeaRef, {
        replies: arrayUnion(reply)
      })
      setCodeIdea((prevIdea: any) => ({
        ...prevIdea,
        replies: [...prevIdea.replies, reply]
      }))
      setNewReply('')
    }
  }

  const handleVote = async (type: 'upvote' | 'downvote') => {
    const codeIdeaRef = doc(firestore, 'codeIdeas', codeIdea.id)
    await updateDoc(codeIdeaRef, {
      votes: increment(type === 'upvote' ? 1 : -1)
    })
    setCodeIdea((prevIdea: any) => ({
      ...prevIdea,
      votes: prevIdea.votes + (type === 'upvote' ? 1 : -1)
    }))
  }

  if (!codeIdea) return <div>Loading...</div>

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl sm:text-3xl">{codeIdea.title}</CardTitle>
          <CardDescription>{codeIdea.author} • {codeIdea.date} • {codeIdea.language}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-8">{codeIdea.content}</p>
          <div className="flex flex-wrap items-center gap-4 mb-6 sm:mb-8">
            <Button variant="outline" size="sm" onClick={() => handleVote('upvote')}>
              <ThumbsUp className="mr-2 h-4 w-4" />
              Upvote
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleVote('downvote')}>
              <ThumbsDown className="mr-2 h-4 w-4" />
              Downvote
            </Button>
            <span>{codeIdea.votes} votes</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Replies</h3>
          {codeIdea.replies && codeIdea.replies.map((reply: any) => (
            <Card key={reply.id} className="mb-4">
              <CardHeader>
                <CardTitle>{reply.author}</CardTitle>
                <CardDescription>{reply.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{reply.content}</p>
              </CardContent>
            </Card>
          ))}
          <form onSubmit={handleReply} className="mt-6 sm:mt-8 space-y-4">
            <Input
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              placeholder="Write a reply..."
              className="w-full"
            />
            <Button type="submit" className="w-full sm:w-auto">Post Reply</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

