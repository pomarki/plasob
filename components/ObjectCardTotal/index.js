import styles from "./style.module.css"

const ObjectCardTotal = ({start, end, team}) => {
    return(
        <div className={styles.totaContainer}>
            <p className={styles.totalItem}>{start}</p>
            <p className={styles.totalItem}>{end}</p>
            <p className={styles.totalItem}>{team}</p>
        </div>
    )
}

export default ObjectCardTotal;