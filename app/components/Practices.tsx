import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import {
  List,
  ListItem,
  ListItemText,
  ListItemPrimaryText,
  ListItemSecondaryText,
} from '@rmwc/list';
import { PracticeInfo } from './__generated__/PracticeInfo';
import Link from 'next/link';

const PRACTICE_INFO_QUERY = gql`
  query PracticeInfo {
    practices {
      id
      date
      title
    }
  }
`;

const Practices = () => {
  const { loading, error, data } = useQuery<PracticeInfo>(PRACTICE_INFO_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <List twoLine>
      {data &&
        data.practices.map((practice) => (
          <Link
            key={practice.id}
            href="/practices/[id]"
            as={`/practices/${practice.id}`}
          >
            <ListItem>
              <ListItemText>
                <ListItemPrimaryText>{practice.title}</ListItemPrimaryText>
                <ListItemSecondaryText>{practice.date}</ListItemSecondaryText>
              </ListItemText>
            </ListItem>
          </Link>
        ))}
    </List>
  );
};

export default Practices;
