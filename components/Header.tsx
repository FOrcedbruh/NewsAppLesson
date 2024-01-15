import  styles from './componentsStyles/header.module.css' 
import Link from 'next/link';


const Header: React.FC = () => {



    return (
        <header className={styles.window}>
            <div className={styles.logo}>
               <h1>
                    News
                </h1> 
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href={'/'}>Главная</Link>
                    </li>
                    <li>
                        <Link href={'/about'}>О нас</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Еще</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;