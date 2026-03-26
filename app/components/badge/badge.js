import styles from "./badge.module.css";

export default function Badge({name}) {
    return (
        <div className={styles.badge}>
            <span className={styles.name}>{name}</span>
        </div>
    )
}