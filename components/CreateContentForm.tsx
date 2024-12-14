'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { auth, firestore } from '@/lib/firebase-client'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

interface CreateContentFormProps {
  activeTab: string
  onSubmit: (newContent: any) => void
}

export function CreateContentForm({ activeTab, onSubmit }: CreateContentFormProps) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [language, setLanguage] = useState('')
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    const newContent = {
      title,
      author: user.displayName || user.email,
      authorId: user.uid,
      date: serverTimestamp(),
      content,
      ...(activeTab === 'posts' && { excerpt: content.slice(0, 100) + '...', image: image ? await uploadImage(image) : null }),
      ...(activeTab === 'discussions' && { replies: [] }),
      ...(activeTab === 'codeIdeas' && { language, votes: 0 }),
    }

    try {
      const docRef = await addDoc(collection(firestore, activeTab), newContent)
      onSubmit({ id: docRef.id, ...newContent })
      setTitle('')
      setContent('')
      setImage(null)
      setLanguage('')
    } catch (error) {
      console.error("Error adding document: ", error)
    }
  }

  const uploadImage = async (file: File) => {
    // Implement image upload logic here
    // For now, we'll just return a placeholder URL
    return '/placeholder.svg?height=200&width=200&text=Image'
  }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl sm:text-3xl">Create New {activeTab === 'posts' ? 'Post' : activeTab === 'discussions' ? 'Discussion' : 'Code Idea'}</CardTitle>
        <CardDescription>Share your thoughts with the community</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          {activeTab === 'posts' && (
            <>
              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="image">Image (optional)</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                />
              </div>
            </>
          )}
          {activeTab === 'discussions' && (
            <div>
              <Label htmlFor="content">Initial Message</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
          )}
          {activeTab === 'codeIdeas' && (
            <>
              <div>
                <Label htmlFor="language">Programming Language</Label>
                <Input
                  id="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="content">Code Snippet or Idea Description</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
            </>
          )}
          <Button type="submit" className="w-full sm:w-auto">
            Create {activeTab === 'posts' ? 'Post' : activeTab === 'discussions' ? 'Discussion' : 'Code Idea'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

