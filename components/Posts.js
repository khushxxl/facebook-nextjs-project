import { useEffect } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import Post from './Post'
function Posts() {
  const [realTimePosts, loading, error] = useCollection(db.collection('posts'))
  console.log(realTimePosts)
  return (
    <div>
      {realTimePosts?.docs.map((post) => (
        <Post
          key={post.id}
          image={post.data().image}
          name={post.data().name}
          email={post.data().email}
          message={post.data().message}
          postImage={post.data().postImage}
        />
      ))}
    </div>
  )
}

export default Posts
