import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styles from './AthleteResults.module.css';
import { Card, CardPrimaryAction } from '@rmwc/card';
import { AthleteResults } from './__generated__/AthleteResults';
import {
  DataTable,
  DataTableContent,
  DataTableHead,
  DataTableRow,
  DataTableHeadCell,
  DataTableBody,
  DataTableCell,
} from '@rmwc/data-table';
import { Typography } from '@rmwc/typography';

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
      <div className={styles.header}>
        <Typography tag="div" use="headline6">
          {athleteResults.user}
        </Typography>
        <Typography className={styles.rpe} tag="div" use="body1">
          RPE: {athleteResults.rpe}
        </Typography>
      </div>
      <DataTable>
        <DataTableContent>
          <DataTableHead>
            <DataTableRow>
              <DataTableHeadCell alignMiddle>Distance</DataTableHeadCell>
              <DataTableHeadCell alignMiddle>Time</DataTableHeadCell>
              <DataTableHeadCell alignMiddle>Break</DataTableHeadCell>
            </DataTableRow>
          </DataTableHead>
          <DataTableBody>
            {athleteResults.units.map((u) => (
              <DataTableRow key={u?.id}>
                <DataTableCell alignMiddle>{u?.distance}</DataTableCell>
                <DataTableCell alignMiddle>{u?.duration}</DataTableCell>
                <DataTableCell alignMiddle>{u?.break}</DataTableCell>
              </DataTableRow>
            ))}
          </DataTableBody>
        </DataTableContent>
      </DataTable>
    </Card>
  );
};

export default AthleteResultsComponent;
