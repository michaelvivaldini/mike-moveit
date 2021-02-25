import styles from '../styles/components/Profile.module.css'

const name = 'Michael Vivaldini'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/michaelvivaldini.png" alt={name} />
      <div>
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>

  )
}