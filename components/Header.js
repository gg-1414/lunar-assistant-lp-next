import styles from '../styles/components/Header.module.css'
import Image from 'next/image'

const mobileMenuToggle = (event) =>
{
  event.target.classList.toggle('active')
  document.querySelector('#app').classList.toggle('mobile_menu_on')
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/logo.png" alt="Logo" width={36} height={36} />
        <h1>
          <span>LUNAR</span>
          <span><span className="yellow_border_bottom">A</span>SSISTANT</span>
        </h1>
      </div>

      <div className={styles.hamburger_wrapper}>
          <button onClick={mobileMenuToggle} />
          <div className={styles.meat}>
            <div className={styles.meat_last}></div>
          </div>
      </div>

      <nav className={styles.main_navigation}>
        <a href="#">BUY</a>
        <a href="#">EARN</a>
        <a href="https://guide.lunarassistant.com/">DOCS</a>
        <a href="#" className="dashboard">DASHBOARD</a>

        <div className={styles.social_bar}>
          <a href="https://discord.gg/eMNdhXqKjk">
            <Image src="/svgs/discord.svg" alt="Discord logo" width={30} height={30} />
          </a>
          <a href="https://twitter.com/GraviDAO_">
            <Image src="/svgs/twitter.svg" alt="Twitter logo" width={30} height={30} />
          </a>
          <a href="https://github.com/GraviDAO">
            <Image src="/svgs/github.svg" alt="Github logo" width={30} height={30} />
          </a>
        </div>
      </nav>
    </header>
  )
}
