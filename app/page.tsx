"use client"
import styles from './page.module.css';
import NewItem from '@/components/NewItem/NewItem';
import NewsType from './types/NewsType';
import axios from 'axios';
import { useEffect, useState } from 'react';


const src: string = "https://newsapi.org/v2/top-headlines?country=ru&apiKey=132ce395103c431abcb3e863d41dbe3f"




const MainPage: React.FC =  () =>  {

  const [news, setNews] = useState<NewsType[]>([]);
  

  useEffect(() => {
    axios.get(src).then(res => {
      setNews(res.data.articles);
    })
  }, []);

  return (
    <section className={styles.window}>
      <div className={styles.news}>
        {
          news.map((el, index) => {
            return (
              <NewItem key={index} article={el}/>
            )
          })
        }
      </div>
    </section>
  )
}

export default MainPage;