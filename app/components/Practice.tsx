import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { PracticeDetail } from './__generated__/PracticeDetail';
import styles from './Practice.module.css';
import { Card, CardPrimaryAction } from '@rmwc/card';
import PracticeSnippet from './PracticeSnippet';
import AthleteResultsComponent from './AthleteResults';

const PRACTICE_DETAIL_QUERY = gql`
  query PracticeDetail($id: ID!) {
    practice(id: $id) {
      id
      date
      location
      kind
      title
      weather
      temperature
      athleteResults {
        id
      }
    }
  }
`;

interface Props {
  id: string;
}

const Practice = (props: Props) => {
  const { loading, error, data } = useQuery<PracticeDetail>(
    PRACTICE_DETAIL_QUERY,
    { variables: { id: props.id } }
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!data?.practice) return null;
  const { practice } = data;

  return (
    <div className={styles.content}>
      <Card className={styles.card}>
        <PracticeSnippet text={practice.title} icon="title" />
        <PracticeSnippet text={practice.date} icon="event" />
        <PracticeSnippet text={practice.kind} icon="category" />
        <PracticeSnippet text={practice.location} icon="place" />
      </Card>
      {practice.athleteResults.map((r) => (
        <AthleteResultsComponent key={r.id} id={r.id} />
      ))}
    </div>
  );
};

export default Practice;
