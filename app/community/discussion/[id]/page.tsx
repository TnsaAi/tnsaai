'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { auth, firestore } from '@/lib/firebase-client'
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore'

export default function DiscussionPage() {
  const params = useParams()
  const [discussion, setDiscussion] = useState<any>(null)
  const [newReply, setNewReply] = useState('')
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const fetchDiscussion = async () => {
      if (params.id) {
        const docRef = doc(firestore, 'discussions', params.id as string)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setDiscussion({ id: docSnap.id, ...docSnap.data() })
        }
      }
    }
    fetchDiscussion()
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
      const discussionRef = doc(firestore, 'discussions', discussion.id)
      await updateDoc(discussionRef, {
        replies: arrayUnion(reply)
      })
      setDiscussion((prevDiscussion: any) => ({
        ...prevDiscussion,
        replies: [...prevDiscussion.replies, reply]
      }))
      setNewReply('')
    }
  }

  if (!discussion) return <div>Loading...</div>

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl sm:text-3xl">{discussion.title}</CardTitle>
          <CardDescription>{discussion.author} • {discussion.date}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-8">{discussion.content}</p>
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Replies</h3>
          {discussion.replies && discussion.replies.map((reply: any) => (
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

