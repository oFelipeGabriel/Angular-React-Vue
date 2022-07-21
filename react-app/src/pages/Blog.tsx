import React from 'react';
import { getBlogPosts } from '../services/api';
import { Noticia } from "../models/Noticia.model";
import { Card } from 'primereact/card';
import Menu from '../components/Menu';
import { ProgressSpinner } from 'primereact/progressspinner';

const Blog: React.FC = () => {

  const [posts, setPosts] = React.useState<Noticia[]>([])
  const [loading, setLoading] = React.useState<boolean>(false);

  const getBlogData = () => {
    setLoading(true)
    getBlogPosts().then(res => {
      setPosts(res.data)
      setLoading(false)
    })
  }

  const footer = (url: string)=> (<a href={url} target="_blank" rel="noreferrer">Ver mais</a>)
  const header = (url: string) => <img alt="Card" src={url} />

  React.useEffect(()=>{
    getBlogData()
  }, [])

  return (
    <div style={{marginTop: '3rem', minHeight: '30rem'}}>
      <Menu active={1}/>
      {loading ? 
        <ProgressSpinner /> :
        posts.map((post: Noticia) => (
          <Card 
            style={{minWidth: '20rem', width: '40%',margin: ' 1rem auto'}}
            header={()=>header(post.imageUrl)}
            title={post.title} 
            key={post.id}
            footer={()=>footer(post.url)}
          >
              {post.summary}
          </Card>
        ))
      }
      
    </div>
  )
}

export default Blog