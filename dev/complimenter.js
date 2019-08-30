var Complimenter = function() {
  var self = null;
  class Compliment {
    constructor(compliment) {
      this.compliment = compliment;
    }
    getHtml() {
      return `<span class='compliment'>${
        this.compliment[0]
      }<i class="fa" data-icon="&#x${this.compliment[1][0]}" style="color:${
        this.compliment[1][1]
      };"></i></span>`;
    }
  }
  return new class Complimenter {
    constructor() {
      self = this;
      this.alreadySaid = [];
      this.compliments = [
        ["Gotta catch em all ! ... and you before all !!!", ["f004", "salmon"]],
        ["You are praizable, really", ["f654", "lightblue"]],
        ["You are beautiful !!!", ["f004", "salmon"]],
        ["Do you know how awesome you are?", ["f6d5", "darkseagreen"]],
        ["You are amazing!", ["f091", "gold"]],
        ["You are unique!", ["f577", "magenta"]],
        ["Someone loves you!", ["f004", "salmon"]],
        ["You miss to someone everyday", ["f5b3", "darkslateblue"]],
        [
          "The world would not be the same without you, I.G.W.",
          ["f0c2", "#333"]
        ],
        ["Someone could or does admire you somewhere", ["f21e", "red"]],
        ["You are a precious one!", ["f3a5", "#efefef"]],
        ["Be in a good mood everyday", ["f599", "gold"]],
        [
          "Don't you know that there is a tale about you? It's your life!",
          ["f02d", "#df8e6d"]
        ],
        [
          "You can change the world if you have the will !!!",
          ["f0ac", "dodgerblue"]
        ],
        ["Someone made a wish upon stars to meet you", ["f753", "orangered"]],
        ["You worth more than you think", ["f4c0", "lightblue"]],
        ["You bring the sun to someone", ["f185", "#fa0"]],
        ["You are the best", ["f521", "blue"]],
        ["Everyone should be your friend!", ["f234", "darkorchid"]],
        ["You are a cause to defend!", ["f6de", "gold"]],
        ["You have a family", ["f004", "pink"]],
        [
          "You were born with a mission : propagating happyness!",
          ["f77d", "pink"]
        ],
        ["Share your problems, you need to be understood", ["f7a9", "#aa1010"]],
        [
          "If you where a Pokémon, I should better catch you!",
          ["f21d", "cornflowerblue"]
        ]
      ];
    }
    setComplimentsStyling() {
      $("body").prepend(`
<style>
.compliment .fa:before{
  content:".";
  color:transparent;
} 
.compliment .fa:after{
  content:attr(data-icon);
} 
</style>`);
    }
    getNextRandomCompliment() {
      if (this.compliments.length == 0) {
        this.compliments = this.alreadySaid.slice(0);
        this.alreadySaid = [];
      }

      var nextIndex = Math.floor(Math.random() * this.compliments.length);
      var compliment = this.compliments[nextIndex];

      this.alreadySaid.push(compliment);
      this.compliments.splice(nextIndex, 1);

      if (compliment.length == 1) compliment = compliment[0];
      return new Compliment(compliment);
    }
  }();
}.call(this);