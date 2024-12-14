'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PostCard } from "@/components/PostCard"
import { DiscussionThread } from "@/components/DiscussionThread"
import { CodeIdeaCard } from "@/components/CodeIdeaCard"
import { CreateContentForm } from "@/components/CreateContentForm"

// Mock data for demonstration
const mockData = {
  posts: [
    { id: '1', title: 'First Post', author: 'User1', date: '2023-12-15', excerpt: 'This is the first post' },
    { id: '2', title: 'Second Post', author: 'User2', date: '2023-12-16', excerpt: 'This is the second post' },
  ],
  discussions: [
    { id: '1', title: 'First Discussion', author: 'User3', date: '2023-12-15', replies: 5 },
    { id: '2', title: 'Second Discussion', author: 'User4', date: '2023-12-16', replies: 3 },
  ],
  codeIdeas: [
    { id: '1', title: 'First Code Idea', author: 'User5', date: '2023-12-15', language: 'JavaScript', votes: 10 },
    { id: '2', title: 'Second Code Idea', author: 'User6', date: '2023-12-16', language: 'Python', votes: 8 },
  ],
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("posts")
  const [contentList, setContentList] = useState(mockData)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    // Simulating user authentication
    const fakeUser = { uid: '123', email: 'user@example.com' }
    setUser(fakeUser)
  }, [])

  const handleNewContent = async (newContent: any) => {
    // Simulating content addition
    setContentList(prevContent => ({
      ...prevContent,
      [activeTab]: [...prevContent[activeTab as keyof typeof prevContent], {
        id: String(prevContent[activeTab as keyof typeof prevContent].length + 1),
        ...newContent,
        date: new Date().toISOString().split('T')[0],
        author: user?.email || 'Anonymous',
      }]
    }))
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

