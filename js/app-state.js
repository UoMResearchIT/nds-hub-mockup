
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

  /**
     * The constructor of the class which makes sure that the class
     * acts as a static one and can not be instantiated.
     */
  constructor() {
    if (this instanceof Spatial) {
      throw Error('AppState class is static and cannot be instantiated.');
    }
  }
  
}
