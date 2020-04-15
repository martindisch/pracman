import styles from './Practice.module.css';

interface Props {
  id: string;
}

const Practice = (props: Props) => {
  return <div>This is practice {props.id}</div>;
};

export default Practice;
