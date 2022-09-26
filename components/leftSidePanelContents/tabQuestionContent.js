Vue.component(
    'tab-question-content', {
        template:
        /*html*/
        `
        
  <v-card
    color="primary darken-1"
    dark
  >
  <v-card-title>Ask a Question</v-card-title>
      <v-container>
          <v-autocomplete
              v-model="p_activeQuestion"
              :items="questions"
              label="I want to know about..."
              item-text="question"
              item-value="question"
              filled
          ></v-autocomplete>
      </v-container>
    
    <v-card-actions >
    <v-spacer></v-spacer>
    <v-btn
    :disabled="!p_activeQuestion"
    color="green darken-2"
    @click=onSubmit
    >
    <v-icon left>
    mdi-text-box-search
    </v-icon>
    Tell me!
    </v-btn>
    </v-card-actions>
    
    <v-divider></v-divider>
    

    <v-card v-if="activeQuestion && activeQuestion.answer">
    
    <v-card-title>Answer for your question</v-card-title>
    <v-card-subtitle>{{activeQuestion.question}}</v-card-subtitle>
    
    <v-container>
    
    <p>Answer title: {{activeQuestionAnswer.title}}</p>
    <p>Data for Rendering: {{activeQuestionAnswer.data}}</p>
    
    <v-row justify="space-around">
    <v-card-subtitle>related Data</v-card-subtitle>
    
    <v-chip-group>
    <v-chip
    v-for="d in activeQuestionAnswer.ref.data"
    :key="d.name"
    >
    <a :href="d.link" class="secondary--text">{{ d.name }}</a>
    </v-chip>
    </v-chip-group>
    
    </v-row>
    
    <v-row justify="space-around">
      <v-card-subtitle>related APIs</v-card-subtitle>
      <v-sheet>
      <v-chip-group>
      <v-chip
      v-for="d in activeQuestionAnswer.ref.api"
      :key="d.name"
      >
      <a :href="d.link" class="secondary--text">{{ d.name }}</a>
      </v-chip>
      </v-chip-group>
      </v-sheet>
    
    </v-row>
      
      
      
    </v-container>
      </v-card>
      <v-card v-else-if="activeQuestion && !activeQuestionAnswer">
      No answer
      </v-card>
  </v-card>
        `,
        data () {
          return {
            p_activeQuestion: null,          
            submit:false,
            
            questions: [
              { header: 'Group 1' },
              { 
                question: 'How heathly is to live in my area/postcode', 
                answer: {
                  title: "Answer title",
                  data: {name: 'Air Quality', url: 'https://www.airqualityengland.co.uk/'},  
                  ref: {
                    data: [
                      {name:'DataSet 1', link:'https://vuetifyjs.com/en/'}, 
                      {name:'DataSet 2', link:'https://vuetifyjs.com/en/'}, 
                      {name:'DataSet 3', link:'https://vuetifyjs.com/en/'}
                    ],
                    api: [
                      {name:'Api 1', link:'https://vuetifyjs.com/en/'}, 
                      {name:'Api 2', link:'https://vuetifyjs.com/en/'}, 
                      {name:'Api 3', link:'https://vuetifyjs.com/en/'}
                    ]
                  }, 
                }
              },
              
              { divider: true },
              
              { header: 'Group 2' },
              { question: 'What is the carbon footprint of building in my area/postcode', answer: null},
            ],
          }
        },
  
        methods: {
          onSubmit(){
            submit = true
          }
        },

        computed:{
          activeQuestion(){
            const activeQuestion = this.questions.filter(q => q.question === this.p_activeQuestion)
            return activeQuestion.length ? activeQuestion[0] : null
          },
          activeQuestionAnswer(){
            return this.activeQuestion? this.activeQuestion.answer: null
          }
          
        }
      
        
      })