Vue.component(
    'tab-question-content', {
        template:
        /*html*/
        `
        <v-container fluid>
        <v-autocomplete
        v-model="friends"
        :disabled="isUpdating"
        :items="people"
        filled
        chips
        color="blue-grey lighten-2"
        label="Select"
        item-text="name"
        item-value="name"
        multiple
      >
      </v-container>

        `,
        data () {
          const srcs = {
            1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          }
    
          return {
            autoUpdate: true,
            friends: ['Sandra Adams', 'Britta Holt'],
            isUpdating: false,
            name: 'Midnight Crew',
            people: [
              { header: 'Group 1' },
              { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
              { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
              { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
              { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
              { divider: true },
              { header: 'Group 2' },
              { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
              { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
              { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
              { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] },
            ],
            title: 'The summer breeze',
          }
        },
    
        watch: {
          isUpdating (val) {
            if (val) {
              setTimeout(() => (this.isUpdating = false), 3000)
            }
          },
        },
    
        methods: {
          remove (item) {
            const index = this.friends.indexOf(item.name)
            if (index >= 0) this.friends.splice(index, 1)
          },
        },
      
        
      })