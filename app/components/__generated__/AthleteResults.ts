/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AthleteResults
// ====================================================

export interface AthleteResults_athleteResults_units {
  __typename: "PracticeUnit";
  /**
   * The ID
   */
  id: string;
  /**
   * The duration in seconds
   */
  duration: number;
  /**
   * The distance in meters
   */
  distance: number;
  /**
   * The type of break taken afterwards
   */
  break: string;
}

export interface AthleteResults_athleteResults {
  __typename: "AthleteResults";
  /**
   * The ID
   */
  id: string;
  /**
   * The username of the athlete
   */
  user: string;
  /**
   * The rating of perceived exertion (RPE)
   */
  rpe: number;
  /**
   * The list of practiced units for a session (with null for skipped ones)
   */
  units: (AthleteResults_athleteResults_units | null)[];
}

export interface AthleteResults {
  athleteResults: AthleteResults_athleteResults | null;
}

export interface AthleteResultsVariables {
  id: string;
}
