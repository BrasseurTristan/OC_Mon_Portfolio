import styles from "./page.module.css";
import Tag from "../components/Tag/Tag";
import Link from "next/link";

export default function Formations() {
    return(
        <div className="container">
      <h1 className="title">Mes formations</h1>
      <p className="description">
        Découvrez toutes mes formations académiques
      </p>

      <div className={styles.grid}>
        <Link href="/formations/openclassrooms_2026" className={styles.card}>
          <h2>OpenClassrooms</h2>
          <p>Formation de Développeur React - 2026</p>
        </Link>

        <Link href="/formations/metz_numeric_school_2025" className={styles.card}>
          <h2>Metz Numeric Shool</h2>
          <p>Formation de Concepteur Développeur d'Application - 2025</p>
        </Link>

        <Link href="/formations/metz_numeric_school_2023" className={styles.card}>
          <h2>Metz Numeric Shool</h2>
          <p>Formation de Développeur Web et Web mobile - 2023</p>
        </Link>

        <Link href="/formations/bosserville" className={styles.card}>
          <h2>Lycée Technique de Bosserville</h2>
          <p>Bac professionnel Technique du froid et du conditionnement de l'air</p>
        </Link>
      </div>
    </div>
    )
}