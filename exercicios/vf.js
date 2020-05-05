var question2 = {
  template: `
      <div>
        <p v-if="correct === answered"> ✅ {{number+1}}. {{text}}</p>
        <p v-if="correct != answered"> ❌ {{number+1}}. {{text}}</p>
      <div>
        <input v-model="answer" disabled="true" value="true" type="radio"> Verdadeiro
      </div> 
      <div>
        <input v-model="answer" disabled="true" value="false" type="radio"> Falso
      </div>
    </div>          
    `,

  props: ['number', 'text', 'correct', 'answered'],

  data: function () {
    return {
      answer: this.answered
    }
  },

 };

var question = {
  template: `
      <div>
	  <p>{{number+1}}. {{text}} </p>
	  <div>
	     <input v-model="answer" value="true" type="radio" :name="getQuestionNumber" :id="getTrueNumber" @click="submitAnswer('true')"> Verdadeiro
	  </div> 
	  <div>
	     <input v-model="answer" value="false" type="radio" :name="getQuestionNumber" :id="getFalseNumber" @click="submitAnswer('false')"> Falso
	  </div>
	  </div>          
  `,

  props: ['number', 'text'],
  
  data() {
     return {
       answer:'empty',
     }  
  },
  
  computed: {
      getQuestionNumber () {
        return 'questao'+ this.number;
      },
      getTrueNumber () {
        return 'option'+ this.number + '_true' 
      },
      getFalseNumber () {
        return 'option'+ this.number + '_false' 
      }
  },

  methods: {
  	submitAnswer:function(value) {
  	  this.answer = value;	
  	  this.$emit('answer', {answer: this.answer, index: this.number});
  	}
  }

};


new Vue({
  template: `
      <div>

      <p><a href="https://engsoftmoderna.info/">Índice</a></p>
      <h1>Engenharia de Software Moderna </h1>
      <h4>Princípios e Práticas para Desenvolvimento de Software com Produtividade</h4>
      <h2 class="text-center">{{title}} - Exercícios de V ou F</h2>

      <div v-if="answering">
      <form>
        <question v-for="(question, index) in questions" 
          :number="index"
          :text="question.text"
          v-on:answer="handleAnswer">
        </question>
      </form>
      <button @click="corrigir">Corrigir</button>
      </div>

      <div v-if="!answering">
      <h2>Correção</h2> 
      <p>{{totalQuestions}} questões; {{totalCorrect}} corretas<p>
      <form>
        <question2 v-for="(question, index) in questions" 
          :number="index"
          :text="question.text"
          :correct="question.correct"
          :answered="answers[index]">
        </question2>
      </form>
      <button @click="recarregar">Recarregar</button>
      </div>

      </div>
  `,

  el: '#app',
  
  data() {
    return {
      title: '',
  		answering: true,
  		answers: [],
  		totalQuestions: 0,
  		totalCorrect: 0,
  		questions: []
  	}
  },

  created() {
  	 fetch(file)
  	    .then(res => res.json())
  	    .then(res => {
                this.title = res.title;
  	            this.questions = res.questions;
  	          });  
    },

  methods:{
  	 corrigir() {
    	 	this.answering = false;
        this.totalQuestions = this.questions.length;
    	 	this.totalCorrect = 0;
    	 	var i;
            for (i = 0; i < this.questions.length; i++) {
              if (this.questions[i].correct === this.answers[i]) {   	 
              	 this.totalCorrect++;
              }
            }
  	 },

     recarregar(){
        this.answering = true;
        this.answers = [];
     },

  	 handleAnswer(e) {
        this.answers[e.index]= e.answer;
     },
  },

  components: {
    question,
    question2
  }
});
