import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import {
  List,
  ListItem,
  ListItemText,
  ListItemPrimaryText,
  ListItemSecondaryText,
} from '@rmwc/list';

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <List twoLine>
      {data.practices.map((practice: any) => (
        <ListItem key={practice.id}>
          <ListItemText>
            <ListItemPrimaryText>{practice.title}</ListItemPrimaryText>
            <ListItemSecondaryText>{practice.date}</ListItemSecondaryText>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default Practices;
