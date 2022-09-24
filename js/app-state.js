
/**
 * Keeps track of the state of the application.
 */
 class AppState {

  /**
   * The current state of the application.
   */
  static currentState = "welcome";

  /**
   * Indicates whether a user has logged in or not.
   */
  static isUserLoggedIn = false;

  /**
   * All possible states of the application.
   */
  static states = [ "welcome", "initial", "askQuestions", "exploreData", "runModel" ];

}
