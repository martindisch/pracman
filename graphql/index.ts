import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  "A single unit from an athlete's practice"
  type PracticeUnit {
    "The duration in seconds"
    duration: Int!
    "The distance in meters"
    distance: Int!
    "The type of break taken afterwards"
    break: String!
  }

  "One of the units planned by the coach for a practice session"
  type PlannedUnit {
    "The distance in meters"
    distance: Int!
    "The type of break taken afterwards"
    break: String!
  }

  "An athlete's results for a practice session"
  type AthleteResults {
    "The username of the athlete"
    user: String!
    "The list of practiced units for a session (with null for skipped ones)"
    units: [PracticeUnit]!
    "The rating of perceived exertion (RPE)"
    rpe: Int!
  }

  "A practice session"
  type Practice {
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
    weather: String!
    "The temperature on the day in degrees Celsius"
    temperature: Int!
    "The list of results by the athletes"
    athleteResults: [AthleteResults!]!
  }

  type Query {
    practices: [Practice!]!
  }
`;

const practices = [
  {
    date: '2020-04-12',
    location: 'Home base',
    kind: 'Road',
    title: 'First practice',
    plannedUnits: [
      {
        distance: 400,
        break: 'P2',
      },
      {
        distance: 500,
        break: 'P3',
      },
      {
        distance: 400,
        break: 'P3',
      },
    ],
    weather: 'Sunny with clouds',
    temperature: 22,
    athleteResults: [
      {
        user: 'Michael',
        units: [
          {
            duration: 60,
            distance: 400,
            break: 'P2',
          },
          null,
          {
            duration: 65,
            distance: 500,
            break: 'P3',
          },
        ],
        rpe: 17,
      },
      {
        user: 'Jacqueline',
        units: [
          {
            duration: 70,
            distance: 400,
            break: 'P2',
          },
          {
            duration: 65,
            distance: 500,
            break: 'P3',
          },
          {
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
    date: '2020-04-13',
    location: 'Training complex',
    kind: 'Indoors',
    title: 'Second practice',
    plannedUnits: [
      {
        distance: 500,
        break: 'P2',
      },
      {
        distance: 600,
        break: 'P3',
      },
      {
        distance: 500,
        break: 'P3',
      },
    ],
    weather: 'Rainy',
    temperature: 18,
    athleteResults: [
      {
        user: 'Alice',
        units: [
          {
            duration: 70,
            distance: 500,
            break: 'P2',
          },
          {
            duration: 65,
            distance: 600,
            break: 'P3',
          },
          null,
        ],
        rpe: 18,
      },
      {
        user: 'Jacqueline',
        units: [
          {
            duration: 80,
            distance: 500,
            break: 'P2',
          },
          {
            duration: 75,
            distance: 600,
            break: 'P3',
          },
          {
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
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
