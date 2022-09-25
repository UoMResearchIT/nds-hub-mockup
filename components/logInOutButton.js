Vue.component(
  'log-in-out-btn', {

    /**
     * The view (presentation) of the component.
     */
    template: 
    /*html*/
    `
    <v-dialog v-model="isLoginDialogOpen"
              persistent
              max-width="600px"
              value="true">

      <template v-slot:activator="{ on, attrs }">
        <v-btn  
                color="primary"
                v-bind="attrs"
                v-on="on">
          <v-icon>mdi-login</v-icon>
          {{ getUserLoginButtonText() }}
        </v-btn>
      </template>

      <v-card v-show="!isUserLoggedIn()">
        <v-card-title>
          <span class="text-h5">User Login</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-text-field label="Username"
                            required
                            v-model="username"
                            v-on:keydown="clearLoginError()">
              </v-text-field>
            </v-row>
            <v-row>
              <v-text-field label="Password"
                            type="password"
                            required
                            v-model="password"
                            v-on:keydown="clearLoginError()">
              </v-text-field>
            </v-row>
            <v-row>
              <v-alert  dense
                        outlined
                        type="error"
                        v-show="isLoginError">
                Username or password is <strong>invalid</strong>!
              </v-alert>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  color="accent"
                  text
                  @click="userLogin()">
            Login
          </v-btn>
          <v-btn  color="accent"
                  text
                  @click="isLoginDialogOpen = false">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card v-show="isUserLoggedIn()">
        <v-card-title>
          <span class="text-h5">Are you sure you want to logout?</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  color="accent"
                  text
                  @click="userLogout()">
            Yes
          </v-btn>
          <v-btn  color="accent"
                  text
                  @click="isLoginDialogOpen = false">
            No
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
    `,

    /**
     * The model associated with the component.
     * This is the model in the MVVM pattern.
     * @return {object} - The model of the application.
     */
    data() {
      return {

        /**
         * Indicates whether the login dialog is open or not.
         */
        isLoginDialogOpen: false,

        /**
         * The username.
         */
        username: "vasilis",

        /**
         * The password
         */
        password: "vasilisvasilis",

        /**
         * Indicates whether there is a login error or not.
         */
        isLoginError: false,

      }
    },

    /**
     * The methods that provide the functionality of the component.
     * @type {Object} - The object that encapsulates all the component methods.
     */
    methods: {

      /**
       * Determines whether the user is logged in or not.
       * @returns {Boolean} - True if the user is logged in, false otherwise.
       */
      isUserLoggedIn() {
        return AppState.isUserLoggedIn;
      },

      /**
       * Gets the text of the login button.
       * @returns {String} - The text of the login button.
       */
      getUserLoginButtonText() {
        return AppState.isUserLoggedIn ? "Logout" : "Login";
      },

      /**
       * Clears the login error.
       */
      clearLoginError() {
        this.isLoginError = false;
      },

      /**
        * Performs user login.
        */
      userLogin() {

        // Fake an error by not allowing the user to login if password has a length less than 8 characters long.
        if (this.password.length < 8) {
          this.isLoginError = true;
          return;
        }

        // Make sure username/password are cleared from the dialog form.
        this.username = "";
        this.password = "";

        // Change the application state.
        AppState.isUserLoggedIn = !this.isLoginError;
        AppState.currentState = "initial";
        
        // Close the login dialog.
        this.isLoginDialogOpen = !AppState.isUserLoggedIn;

      },

      /**
       * Performs user logout.
       */
      userLogout() {

        // Change the application state.
        AppState.isUserLoggedIn = false;
        AppState.currentState = "welcome";

        // Close the login dialog.
        this.isLoginDialogOpen = AppState.isUserLoggedIn;

      },
      
    },

  }
)