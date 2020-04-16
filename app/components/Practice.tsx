import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { PracticeDetail } from './__generated__/PracticeDetail';
import styles from './Practice.module.css';

const PRACTICE_DETAIL_QUERY = gql`
  query PracticeDetail($id: ID!) {
    practice(id: $id) {
      date
      location
      kind
      title
      weather
      temperature
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

  return (
    <div>
      This is practice {props.id} with title {data?.practice?.title}
    </div>
  );
};

export default Practice;
