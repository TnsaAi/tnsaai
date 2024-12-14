'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PostCard } from "@/components/PostCard"
import { DiscussionThread } from "@/components/DiscussionThread"
import { CodeIdeaCard } from "@/components/CodeIdeaCard"
import { CreateContentForm } from "@/components/CreateContentForm"
import { auth, firestore } from '@/lib/firebase-client'
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore'

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("posts")
  const [contentList, setContentList] = useState({ posts: [], discussions: [], codeIdeas: [] })
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        router.push('/login')
      }
    })

    return () => unsubscribe()
  }, [router])

  useEffect(() => {
    const unsubscribes = ['posts', 'discussions', 'codeIdeas'].map(contentType => {
      const q = query(collection(firestore, contentType), orderBy('createdAt', 'desc'))
      return onSnapshot(q, (snapshot) => {
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setContentList(prev => ({ ...prev, [contentType]: items }))
      })
    })

    return () => unsubscribes.forEach(unsubscribe => unsubscribe())
  }, [])

  const handleNewContent = async (newContent: any) => {
    try {
      await addDoc(collection(firestore, activeTab), {
        ...newContent,
        createdAt: new Date(),
        authorId: user.uid,
      })
    } catch (error) {
      console.error("Error adding document: ", error)
    }
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">TNSA AI Community</h1>
      
      <CreateContentForm activeTab={activeTab} onSubmit={handleNewContent} />

      <Tabs defaultValue="posts" className="mt-12">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="posts" onClick={() => setActiveTab("posts")}>Posts</TabsTrigger>
          <TabsTrigger value="discussions" onClick={() => setActiveTab("discussions")}>Discussions</TabsTrigger>
          <TabsTrigger value="codeIdeas" onClick={() => setActiveTab("codeIdeas")}>Code Ideas</TabsTrigger>
        </TabsList>
        <TabsContent value="posts">
          <div className="grid gap-4 sm:gap-6">
            {contentList.posts.map((post: any) => (
              <Link key={post.id} href={`/community/post/${post.id}`}>
                <PostCard post={post} />
              </Link>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="discussions">
          <div className="grid gap-4 sm:gap-6">
            {contentList.discussions.map((discussion: any) => (
              <Link key={discussion.id} href={`/community/discussion/${discussion.id}`}>
                <DiscussionThread discussion={discussion} />
              </Link>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="codeIdeas">
          <div className="grid gap-4 sm:gap-6">
            {contentList.codeIdeas.map((idea: any) => (
              <Link key={idea.id} href={`/community/code-idea/${idea.id}`}>
                <CodeIdeaCard idea={idea} />
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

