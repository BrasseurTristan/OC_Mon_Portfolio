import styles from "./page.module.css";
import {technologies} from "../data/technologies.json"
import Badge from "./components/badge/badge";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Bonjour, je suis <span className={styles.highlight}>Prénom Nom</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Développeur Web Full-Stack
        </p>
        <p className={styles.heroDescription}>
          Je crée des applications web modernes, performantes et accessibles
          avec React, Next.js et Node.js.
        </p>
        <div className={styles.heroButtons}>
          <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
            Voir mes projets
          </a>
          <a href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            Me contacter
          </a>
          </div>
          <div className={styles.technologiesList}>
            {technologies.map(({id,name}) => (
              <Badge key={id} name={name}/>
            ))}
          </div>
        
      </div>
    </div>
  )
}