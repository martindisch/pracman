import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styles from './Practice.module.css';
import { Card, CardPrimaryAction } from '@rmwc/card';
import { AthleteResults } from './__generated__/AthleteResults';

const ATHLETE_RESULTS_QUERY = gql`
  query AthleteResults($id: ID!) {
    athleteResults(id: $id) {
      id
      user
      rpe
      units {
        id
        duration
        distance
        break
      }
    }
  }
`;

interface Props {
  id: string;
}

const AthleteResultsComponent = (props: Props) => {
  const { loading, error, data } = useQuery<AthleteResults>(
    ATHLETE_RESULTS_QUERY,
    { variables: { id: props.id } }
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!data?.athleteResults) return null;
  const { athleteResults } = data;

  return (
    <Card className={styles.card}>
      <CardPrimaryAction className={styles['card-content']}>
        <span>{athleteResults.user}</span>
      </CardPrimaryAction>
    </Card>
  );
};

export default AthleteResultsComponent;
