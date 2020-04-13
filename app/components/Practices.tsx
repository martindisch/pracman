import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const PRACTICES = gql`
  {
    getPractices {
      title
      athleteResults {
        user
        units {
          duration
        }
      }
    }
  }
`;

const Practices = () => {
  const { loading, error, data } = useQuery(PRACTICES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <p>{JSON.stringify(data)}</p>;
};

export default Practices;
