import styles from './NewItem.module.css';
import NewsType from '@/app/types/NewsType';

interface PropsType {
    article: NewsType
}


const NewItem: React.FC<PropsType> = ({article}) => {
    return (
        <article className={styles.new}>
            <h4>
                {article.title}
            </h4>
            <p>
                {article.author}
            </p>
        </article>
    )
}

export default NewItem;