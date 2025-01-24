let remaining_chances = 10;
let Adaikala = "Adaikala";
let Shiny = "Shiny";
let adaikala = "adaikala";
let shiny = "shiny";
let speech = new SpeechSynthesisUtterance();
/*Player Class*/
class player {
  /* Contructor Method*/
  constructor(Name) {
    this.Name = Name;
  }
  /*Display Player Details Method*/
  displayplayer() {
    if (
      this.Name.includes(Adaikala) ||
      this.Name.includes(Shiny) ||
      this.Name.includes(adaikala) ||
      this.Name.includes(shiny)
    ) {
      var speech = new SpeechSynthesisUtterance();
      var content = "Oi minnalei";
      speech.text = content;
      speech.rate = 0.8;
      speech.volume = 10;
      speech.pitch = 10;
      window.speechSynthesis.speak(speech);
      document.getElementById("player").innerHTML = this.Name;
      document.getElementById("human").style.display = "none";
      document.getElementById("shine").style.display = "block";
    } else {
      var speech = new SpeechSynthesisUtterance();
      var content = "Welcome you" + this.Name;
      speech.text = content;
      speech.rate = 0.8;
      speech.volume = 10;
      speech.pitch = 10;
      window.speechSynthesis.speak(speech);
      document.getElementById("player").innerHTML = this.Name;
      document.getElementById("human").style.display = "block";
      document.getElementById("shine").style.display = "none";
    }
  }
  /*Playing Actions*/
  play() {
    var panda_number = Math.ceil(Math.random() * 10);
    var player_Number = parseInt(document.getElementById("Num").value);
    document.getElementById("player-number").innerHTML = player_Number;
    document.getElementById("panda-number").innerHTML = panda_number;
    if (document.getElementById("Num").value == "") {
      document.getElementById("ans").innerHTML = "Enter the Number!";
      if (true) {
        const message = document.getElementById("ans");
        message.style.display = "block";
        setTimeout(() => {
          message.style.display = "none";
        }, 2000);
      }
      var content = document.getElementById("ans").textContent;
      speech.text = content;
      speech.rate = 1.1;
      speech.volume = 1;
      speech.pitch = 10;
      window.speechSynthesis.speak(speech);
    } else if (remaining_chances < 1) {
      document.getElementById("ans").innerHTML = "Game over";
      if (true) {
        const message = document.getElementById("ans");
        message.style.display = "block";
        setTimeout(() => {
          message.style.display = "none";
        }, 5000);
      }
      const failSound = new Audio("fail.mp3");
      failSound.play();
      document.getElementById("player").style.display = "none";
      document.getElementById("player-number").style.display = "none";
      document.getElementById("panda-number").style.display = "none";
      document.getElementById("vs").style.display = "none";
      document.getElementById("human").style.display = "none";
      document.getElementById("player-panda").innerHTML = "Panda Won🥳";
      document.getElementById("player-panda").style.color = "#000957";
      document.getElementById("human").style.display = "none";
      document.getElementById("rem").style.display = "none";
      document.getElementById("shine").style.display = "none";
      document.getElementById("remaining").style.display = "none";
    } else if (player_Number > 10 || player_Number < 1) {
      document.getElementById("ans").innerHTML =
        "Enter the Number between 1 to 10";
      var content = document.getElementById("ans").textContent;
      speech.text = content;
      speech.rate = 1.1;
      speech.volume = 1;
      speech.pitch = 10;
      window.speechSynthesis.speak(speech);
      if (true) {
        const message = document.getElementById("ans");
        message.style.display = "block";
        setTimeout(() => {
          message.style.display = "none";
        }, 3000);
      }
    } else if (player_Number == panda_number) {
      if (
        this.Name.includes(Adaikala) ||
        this.Name.includes(Shiny) ||
        this.Name.includes(adaikala) ||
        this.Name.includes(shiny)
      ) {
        const winSound = new Audio("minnale.mp3");
        winSound.play();
        document.getElementById("ans").innerHTML = "Congratulations🥳";
        document.getElementById("player-panda").style.display = "none";
        document.getElementById("player-number").style.display = "none";
        document.getElementById("panda-number").style.display = "none";
        document.getElementById("vs").style.display = "none";
        document.getElementById("panda").style.display = "none";
        document.getElementById("player").innerHTML = this.Name + " Won🥳";
        document.getElementById("player").style.color = "#000957";
        document.getElementById("panda").style.display = "none";
        document.getElementById("rem").style.display = "none";
        document.getElementById("remaining").style.display = "none";
        if (true) {
          const message = document.getElementById("ans");
          message.style.display = "block";
          setTimeout(() => {
            message.style.display = "none";
          }, 5000);
        }
      } else {
        const winSound = new Audio("win.mp3");
        winSound.play();
        document.getElementById("ans").innerHTML = "Congratulations🥳";
        document.getElementById("player-panda").style.display = "none";
        document.getElementById("player-number").style.display = "none";
        document.getElementById("panda-number").style.display = "none";
        document.getElementById("vs").style.display = "none";
        document.getElementById("panda").style.display = "none";
        document.getElementById("player").innerHTML = this.Name + " Won🥳";
        document.getElementById("player").style.color = "#000957";
        document.getElementById("panda").style.display = "none";
        document.getElementById("rem").style.display = "none";
        document.getElementById("remaining").style.display = "none";
        if (true) {
          const message = document.getElementById("ans");
          message.style.display = "block";
          setTimeout(() => {
            message.style.display = "none";
          }, 5000);
        }
      }
    } else if (player_Number != panda_number) {
      remaining_chances -= 1;
      document.getElementById("ans").innerHTML = "Wrong Answer!";
      const condition = true;
      // Check the condition
      if (condition) {
        const message = document.getElementById("ans");
        // Show the element
        message.style.display = "block";
        // Hide the element after 5 seconds
        setTimeout(() => {
          message.style.display = "none";
        }, 1200); // Time in milliseconds
      }
      var content = document.getElementById("ans").textContent;
      speech.text = content;
      speech.rate = 1.1;
      speech.volume = 1;
      speech.pitch = 10;
      window.speechSynthesis.speak(speech);
      document.getElementById("remaining").innerHTML = remaining_chances;
      document.getElementById("Num").value = null;
    }
  }
}
function start() {
  var Name = document.getElementById("player-name").value;
  const user = new player(Name);
  user.displayplayer();
}
function back() {
  var Name = document.getElementById("player-name").value;
  const go = new player(Name);
  go.play();
}
