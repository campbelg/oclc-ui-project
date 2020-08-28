import styles from "../../styles/InstitutionCard.module.css"

/**
 * This component should display the data we have about the institution in a concise way.
 *
 * TODO: Display the rest of the institution data
 */
const InstitutionCard = ({ institution }) => {

    return (
        <div className={styles.card}>
            <h3 className={styles.name}>
                {institution.name}
            </h3>
        </div>
    );
};

export default InstitutionCard;