import { DateBar, ObjectCardsList, Title} from "../index";

import styles from "./style.module.css";

const Plan = ({ list, mounth, titlesList }) => {
return(
    <section className={styles.plan}>
        <Title titlesList={titlesList}/>
        <DateBar />
        <Title titlesList={titlesList} />
        <ObjectCardsList list={list} mounth={mounth} titlesList={titlesList}/>
    </section>
)
}

export default Plan;