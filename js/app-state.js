
/**
 * Keeps track of the state of the application.
 */
 class AppState {

  /**
    * The constructor of the class which makes sure that the class
    * acts as a static one and can not be instantiated.
    */
  constructor(currentState, states, isUserLoggedIn) {
    // if (this instanceof AppState) {
    //   throw Error('AppState class is static and cannot be instantiated.');
    // }
    
    this._currentState = currentState;
    this._states = states;
    this._isUserLoggedIn = isUserLoggedIn;

  }

  /**
   * Gets the current state of the application.
   */
  get currentState() {
    return this._currentState;
  }

  /**
   * Sets the current state of the application.
   */
  set currentState(newCurrentState) {
    this._currentState = newCurrentState;

    if (this._appViewModel != null) {
      this._appViewModel.currentState = newCurrentState;
    }
  }

  /**
   * Gets the states of the application.
   */
  get states() {
    return this._states;
  }

  /**
   * Gets whether a user has logged in or not.
   */
  get isUserLoggedIn() {
    return this._isUserLoggedIn;
  }

  /**
   * Sets whether a user has logged in or not.
   */
  set isUserLoggedIn(newIsUserLoggedIn) {
    this._isUserLoggedIn = newIsUserLoggedIn;
  }

  /**
   * Binds the application view model to the application state.
   * @param {Vue} appViewModel - The application view model.
   */
  bindAppViewModel(appViewModel) {
    this._appViewModel = appViewModel;
  }

}

// Create a global appState object.
const appState = new AppState(
  "welcome",
  [ "welcome", "initial", "askQuestions", "exploreData", "runModel" ],
  false
);
