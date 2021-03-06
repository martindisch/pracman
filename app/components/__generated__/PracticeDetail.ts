/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PracticeDetail
// ====================================================

export interface PracticeDetail_practice_athleteResults {
  __typename: "AthleteResults";
  /**
   * The ID
   */
  id: string;
}

export interface PracticeDetail_practice {
  __typename: "Practice";
  /**
   * The ID
   */
  id: string;
  /**
   * The date
   */
  date: string;
  /**
   * The location
   */
  location: string;
  /**
   * The kind of practice (track, indoors, forest, etc.)
   */
  kind: string;
  /**
   * The title
   */
  title: string;
  /**
   * The weather on the day
   */
  weather: string | null;
  /**
   * The temperature on the day in degrees Celsius
   */
  temperature: number | null;
  /**
   * The list of results by the athletes
   */
  athleteResults: PracticeDetail_practice_athleteResults[];
}

export interface PracticeDetail {
  practice: PracticeDetail_practice | null;
}

export interface PracticeDetailVariables {
  id: string;
}
