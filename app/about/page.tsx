import styles from './page.module.css';
import { Metadata } from 'next';
import guthub from './../../images/icons/github.svg';
import vk from './../../images/icons/vk.svg';
import Image from 'next/image';



export const metadata: Metadata ={
    title: 'About | News'
}

interface ContactsType {
    net: string,
    icon: string,
}


const Contacts: ContactsType[] = [
   {
    net: '',
    icon: guthub
   },
   {
    net: '',
    icon: vk
   }
]


const About: React.FC = () => {
    return (
        <section className={styles.window}>
            <div>
                <h2>My contacts</h2>
                <ul>
                    {
                        Contacts.map((contact, index) => {
                            return (
                                <li key={index}>
                                    <Image src={contact.icon} alt='social network...'/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default About;