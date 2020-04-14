import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import {
  List,
  ListItem,
  ListItemText,
  ListItemPrimaryText,
  ListItemSecondaryText,
} from '@rmwc/list';
import Link from 'next/link';

const PRACTICES = gql`
  {
    practices {
      id
      date
      title
    }
  }
`;

const Practices = () => {
  const { loading, error, data } = useQuery(PRACTICES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <List twoLine>
      {data.practices.map((practice: any) => (
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
