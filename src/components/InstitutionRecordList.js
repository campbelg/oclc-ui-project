import styles from "../../styles/InstitutionRecordList.module.css"
import InstitutionCard from "./InstitutionCard";

/**
 * This component is responsible for querying the API for institution records, and rendering them into the necessary
 * components.
 *
 * TODO: fetch the data
 * TODO: render it
 */
const InstitutionRecordList = () => {

    return (
        <section className={styles.container}>
            <h2>Relevant Institutions</h2>

            {/* render a list of more things here */}
            <InstitutionCard institution={{
                name: "Hello World University"
            }}/>
        </section>
    );
};

export default InstitutionRecordList;