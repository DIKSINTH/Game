var remaining_chances = 10;
var speech = new SpeechSynthesisUtterance();
function back() {
  var random_number = Math.ceil(Math.random() * 10);
  var player_Number = parseInt(document.getElementById("Number").value);
  if (document.getElementById("Number").value == "") {
    document.getElementById("Answer").innerHTML = "Enter the Number";

    const condition = true;
    // Check the condition
    if (condition) {
      const message = document.getElementById("Answer");
      // Show the element
      message.style.display = "block";
      // Hide the element after 5 seconds
      setTimeout(() => {
        message.style.display = "none";
      }, 1500); // Time in milliseconds
    }
    var content = document.getElementById("Answer").textContent;
    speech.text = content;
    speech.rate = 1.1;
    speech.volume = 1;
    speech.pitch = 10;
    window.speechSynthesis.speak(speech);
  } else if (remaining_chances < 1) {
    alert("Game Over You're lost");
    location.reload();
  } else if (player_Number > 10 || player_Number < 1) {
    document.getElementById("Answer").innerHTML =
      "Enter the Number between 1 to 10";
    const condition = true;
    if (condition) {
      const message = document.getElementById("Answer");
      message.style.display = "block";
      setTimeout(() => {
        message.style.display = "none";
      }, 1000);
    }
  } else if (player_Number == random_number) {
    alert("Correct Answer! Player Wins");
    location.reload();
  } else if (player_Number != random_number) {
    remaining_chances -= 1;
    document.getElementById("Answer").innerHTML = "Wrong Answer!";
    const condition = true;
    // Check the condition
    if (condition) {
      const message = document.getElementById("Answer");
      // Show the element
      message.style.display = "block";
      // Hide the element after 5 seconds
      setTimeout(() => {
        message.style.display = "none";
      }, 1200); // Time in milliseconds
    }
    document.getElementById("remaining").innerHTML = remaining_chances;
    document.getElementById("Number").value = null;
  }
}
