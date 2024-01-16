import styles from './page.module.css';
import NewItem from '@/components/NewItem/NewItem';
import NewsType from './types/NewsType';


const src: string = "https://newsapi.org/v2/top-headlines?country=ru&apiKey=132ce395103c431abcb3e863d41dbe3f"


export const getNews = async () => {
  const res = await fetch(src);
  const news = await res.json();


  return news.articles
}


const MainPage: React.FC = async () =>  {


  const data: NewsType[] = await getNews();



  return (
    <section className={styles.window}>
      <div className={styles.news}>
       {data.map((e, index) => {
        return (
          <NewItem key={index} article={e}/>
        )
       })}
      </div>
    </section>
  )
}

export default MainPage;