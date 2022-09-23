Vue.component(
  'tab-data-content', {
  template:
    /*html*/
    `
    <v-card outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">  
        Hello from DATA content!
        </div>
        <v-list-item-title class="text-h5 mb-1">
        Hello from DATA content!
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>

        `})