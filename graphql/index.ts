import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  "A single unit from an athlete's practice"
  type PracticeUnit {
    "The ID"
    id: ID!
    "The duration in seconds"
    duration: Int!
    "The distance in meters"
    distance: Int!
    "The type of break taken afterwards"
    break: String!
  }

  "One of the units planned by the coach for a practice session"
  type PlannedUnit {
    "The ID"
    id: ID!
    "The distance in meters"
    distance: Int!
    "The type of break taken afterwards"
    break: String!
  }

  "An athlete's results for a practice session"
  type AthleteResults {
    "The ID"
    id: ID!
    "The username of the athlete"
    user: String!
    "The list of practiced units for a session (with null for skipped ones)"
    units: [PracticeUnit]!
    "The rating of perceived exertion (RPE)"
    rpe: Int!
  }

  "A practice session"
  type Practice {
    "The ID"
    id: ID!
    "The date"
    date: String!
    "The location"
    location: String!
    "The kind of practice (track, indoors, forest, etc.)"
    kind: String!
    "The title"
    title: String!
    "The units planned by the coach"
    plannedUnits: [PlannedUnit!]!
    "The weather on the day"
    weather: String
    "The temperature on the day in degrees Celsius"
    temperature: Int
    "The list of results by the athletes"
    athleteResults: [AthleteResults!]!
  }

  type Query {
    practices: [Practice!]!
    practice(id: ID!): Practice
    athleteResults(id: ID!): AthleteResults
  }
`;

const practices = [
  {
    id: '507f1f77bcf86cd799439011',
    date: '2020-04-12',
    location: 'Home base',
    kind: 'Road',
    title: 'First practice',
    plannedUnits: [
      {
        id: '507f1f77bcf86cd799439012',
        distance: 400,
        break: 'P2',
      },
      {
        id: '507f1f77bcf86cd799439013',
        distance: 500,
        break: 'P3',
      },
      {
        id: '507f1f77bcf86cd799439014',
        distance: 400,
        break: 'P3',
      },
    ],
    weather: 'Sunny with clouds',
    temperature: 22,
    athleteResults: [
      {
        id: '507f1f77bcf86cd799439015',
        user: 'Michael',
        units: [
          {
            id: '507f1f77bcf86cd799439016',
            duration: 60,
            distance: 400,
            break: 'P2',
          },
          null,
          {
            id: '507f1f77bcf86cd799439017',
            duration: 65,
            distance: 500,
            break: 'P3',
          },
        ],
        rpe: 17,
      },
      {
        id: '507f1f77bcf86cd799439018',
        user: 'Jacqueline',
        units: [
          {
            id: '507f1f77bcf86cd799439019',
            duration: 70,
            distance: 400,
            break: 'P2',
          },
          {
            id: '607f1f77bcf86cd799439011',
            duration: 65,
            distance: 500,
            break: 'P3',
          },
          {
            id: '607f1f77bcf86cd799439012',
            duration: 75,
            distance: 400,
            break: 'P3',
          },
        ],
        rpe: 15,
      },
    ],
  },
  {
    id: '607f1f77bcf86cd799439013',
    date: '2020-04-13',
    location: 'Training complex',
    kind: 'Indoors',
    title: 'Second practice',
    plannedUnits: [
      {
        id: '607f1f77bcf86cd799439014',
        distance: 500,
        break: 'P2',
      },
      {
        id: '607f1f77bcf86cd799439015',
        distance: 600,
        break: 'P3',
      },
      {
        id: '607f1f77bcf86cd799439016',
        distance: 500,
        break: 'P3',
      },
    ],
    athleteResults: [
      {
        id: '607f1f77bcf86cd799439017',
        user: 'Alice',
        units: [
          {
            id: '607f1f77bcf86cd799439018',
            duration: 70,
            distance: 500,
            break: 'P2',
          },
          {
            id: '607f1f77bcf86cd799439019',
            duration: 65,
            distance: 600,
            break: 'P3',
          },
          null,
        ],
        rpe: 18,
      },
      {
        id: '707f1f77bcf86cd799439011',
        user: 'Jacqueline',
        units: [
          {
            id: '707f1f77bcf86cd799439012',
            duration: 80,
            distance: 500,
            break: 'P2',
          },
          {
            id: '707f1f77bcf86cd799439013',
            duration: 75,
            distance: 600,
            break: 'P3',
          },
          {
            id: '707f1f77bcf86cd799439014',
            duration: 85,
            distance: 500,
            break: 'P3',
          },
        ],
        rpe: 20,
      },
    ],
  },
];

const resolvers = {
  Query: {
    practices: () => practices,
    practice: (_: any, { id }: { id: string }) => {
      return practices.filter((p) => p.id === id)[0];
    },
    athleteResults: (_: any, { id }: { id: string }) => {
      return practices
        .flatMap((p) => p.athleteResults)
        .filter((r) => r.id === id)[0];
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
