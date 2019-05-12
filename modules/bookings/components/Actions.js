import styles from '../styles/actions.less';
import {texts} from '../constants';
import DownloadIcon from '../../../static/download-arrow.svg';
import RefreshIcon from '../../../static/refresh.svg';

const Actions = () => (
    <>
        <span className={styles.actions__select}>{texts.select}</span>
        <DownloadIcon className={styles.actions__download}/>
        <RefreshIcon className={styles.actions__refresh}/>
    </>
)

export default Actions;