import { Typography } from '@rmwc/typography';
import { Icon } from '@rmwc/icon';
import styles from './PracticeSnippet.module.css';

interface Props {
  icon: string;
  text: string;
}

const PracticeSnippet = (props: Props) => (
  <div className={styles.container}>
    <Icon className={styles.item} icon={props.icon} />
    <Typography className={styles.item} use="body1">
      <div>{props.text}</div>
    </Typography>
  </div>
);

export default PracticeSnippet;
