import styles from './Spinner.module.css';
import { ClipLoader } from "react-spinners";

const Spinner = (props) => {

    const { loading } = props;

    return (
        <div className={styles.spinner}>
            <ClipLoader
                color="hsla(65, 100%, 50%, 1)"
                loading={loading}
                size={100}
            />
        </div>
    );

}

export default Spinner;