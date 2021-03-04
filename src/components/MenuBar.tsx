import styles from '../styles/components/MenuBar.module.css'

export function MenuBar() {
  return (
    <div className={styles.menuBarContainer}>
      <img src="icons/menu/logo.svg" alt="Move it" />
      <button>
        <img src="icons/menu/home.svg" alt="Home" />
      </button>
      <button>
        <img src="icons/menu/ranking.svg" alt="Ranking" />
      </button>
    </div>
  )
}