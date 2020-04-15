/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PracticeInfo
// ====================================================

export interface PracticeInfo_practices {
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
   * The title
   */
  title: string;
}

export interface PracticeInfo {
  practices: PracticeInfo_practices[];
}
