import React from "react";
import { getNews } from "../services/api";
import { Noticia } from "../models/Noticia.model";
import { Card } from 'primereact/card';
import Menu from "../components/Menu";
import { ProgressSpinner } from 'primereact/progressspinner';

const Home: React.FC<any> = () => {

  const [noticias, setNoticias] = React.useState<Noticia[]>([])
  const [loading, setLoading] = React.useState<boolean>(false);

  const getData = () => {
    setLoading(true)
    getNews().then(res => {
      setNoticias(res.data)
      setLoading(false)
    })
  }

  const footer = (url: string)=> (<a href={url} target="_blank" rel="noreferrer">Ver mais</a>)
  const header = (url: string) => <img alt="Card" src={url} />

  React.useEffect(() => {
    getData()
  },[])

  return (
    <div style={{marginTop: '3rem', minHeight: '30rem'}}>
      <Menu active={0}/>
      {loading ? 
        <ProgressSpinner /> :
        noticias.map(noticia => (
          <Card 
            style={{minWidth: '20rem', width: '40%',margin: ' 1rem auto'}}
            header={()=>header(noticia.imageUrl)}
            title={noticia.title} 
            key={noticia.id}
            footer={()=>footer(noticia.url)}
          >
              {noticia.summary}
          </Card>
        ))
      }
      
    </div>
  )
}

export default Home;