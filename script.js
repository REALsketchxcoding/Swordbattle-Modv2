// Variables
let runSpam = false; // Checks to run the spammer
let randomBot = false;
let levelBot = false;
let emojiBot = false;
let customBot = false;
let levelxp = 1;

let chatvalues = ['Sub To MannyCodes', 'SwordBattle Mod v1', 'Im Better', 'Admin Abuse LOL', 'الله أكبرالله أكبر', 'NÍGGER', 'Fαggot', 'ты отстой', 'To Easy WTF?', 'Transphobic', 'WTF HOW?', ' TEACH ME BRO?', 'STOP USING CHEATS!!!', 'u suck wtf', 'SUCK MY DÍCK', 'SwordGay.IO'];
//let chatvalues = ['BUY SWORDBATTLE MOD??', 'CHEAPEST SWORDBATTLE CHEAT', 'CREATED BY MANNYCODES', 'CHEAP HACK', 'FUN AND EASY HACK'];
//let chatvalues = ['Swordbattle Mod', 'Created By Manny Codes', 'Easy Mod', 'Easy HACK', 'Fun And Easy Mod', 'Sub To MannyCodes', 'W Mod', 'Swordbattle Mod'];
// Create the container element and set its class
var container = document.createElement("div");
container.classList.add("container");

// Set the container's styles
container.style.backgroundColor = 'rgba(0,0,0, 0.7)';
container.style.padding = "25px";
container.style.borderRadius = "5px";
container.style.color = "white";
container.style.width = "fit-content";
container.style.position = 'relative';
container.style.bottom = '550px';

// Create the heading and paragraph elements
var heading = document.createElement("h1");
heading.innerText = "Swordbattle.io Mod";
var paragraph = document.createElement("p");
paragraph.innerHTML = "Created By <a style='color: white;' target='_blank' href='https://www.youtube.com/channel/UClxk4roXOoGV8PH5caj2QIg'>MannyCodes</a>";

// Create the spam buttons
var emojiSpamButton = document.createElement("button");
emojiSpamButton.innerText = "Emoji Spam";
emojiSpamButton.style.border = "none";
emojiSpamButton.style.borderRadius = "4px";
emojiSpamButton.style.padding = "3px";
emojiSpamButton.style.cursor = "pointer";
emojiSpamButton.style.marginLeft = "3px";
emojiSpamButton.addEventListener("click", function () {
    console.log("Emoji Spam Enabled");
    emojiBot = true;
    randomBot = false;
    levelBot = false;
    customBot = false;
});

var randomSpamButton = document.createElement("button");
randomSpamButton.innerText = "Random Spam";
randomSpamButton.style.border = "none";
randomSpamButton
randomSpamButton.style.borderRadius = "4px";
randomSpamButton.style.padding = "3px";
randomSpamButton.style.cursor = "pointer";
randomSpamButton.style.marginLeft = "3px";
randomSpamButton.addEventListener("click", function () {
    console.log("Random Spam Enabled");
    randomBot = true;
    levelBot = false;
    emojiBot = false;
    customBot = false;
});

var levelSpamButton = document.createElement("button");
levelSpamButton.innerText = "Level Spam";
levelSpamButton.style.border = "none";
levelSpamButton.style.borderRadius = "4px";
levelSpamButton.style.padding = "3px";
levelSpamButton.style.cursor = "pointer";
levelSpamButton.style.marginLeft = "3px";
levelSpamButton.addEventListener("click", function () {
    console.log("Level Spam Enabled");
    levelBot = true;
    randomBot = false;
    emojiBot = false;
    customBot = false;
});

// Create the custom spam input and button
var customSpamHeading = document.createElement("h2");
customSpamHeading.innerText = "Custom Spam";
var customSpamInput = document.createElement("input");
customSpamInput.type = "text";
customSpamInput.placeholder = "Example: Subscribe to MrBeast";
customSpamInput.id = 'customInput';
var customSpamButton = document.createElement("button");
customSpamButton.innerText = "Set Custom Spam";
customSpamButton.style.border = "none";
customSpamButton.style.borderRadius = "4px";
customSpamButton.style.padding = "3px";
customSpamButton.style.cursor = "pointer";
customSpamButton.style.marginRight = "3px";
customSpamButton.addEventListener("click", function () {
    console.log("Custom Spam Enabled");
    customBot = true;
    emojiBot = false;
    randomBot = false;
    levelBot = false;
});

// Create the stop spam button
var stopSpamButton = document.createElement("button");
stopSpamButton.innerText = "Start/Stop Spam";
stopSpamButton.style.border = "none";
stopSpamButton.style.borderRadius = "4px";
stopSpamButton.style.padding = "3px";
stopSpamButton.style.cursor = "pointer";
stopSpamButton.style.display = "block";
stopSpamButton.style.marginTop = "15px";
stopSpamButton.addEventListener("click", function () {
    console.log("Spam Stopped");
    runSpam = !runSpam;
});

// Add all the elements to the container
container.appendChild(heading);
container.appendChild(paragraph);
container.appendChild(emojiSpamButton);
container.appendChild(randomSpamButton);
container.appendChild(levelSpamButton);
container.appendChild(customSpamHeading);
container.appendChild(customSpamInput);
container.appendChild(customSpamButton);
container.appendChild(stopSpamButton);

// Append the container to the body
document.body.appendChild(container);

function chatSpam() {
    if (runSpam != true) {
        return;
    }
    const input = document.querySelector("#chat");
    if (randomBot) {
        const num = Math.floor(Math.random() * chatvalues.length);
        input.value = chatvalues[num];
    }
    if (levelBot) {
        levelxp += 2;
        input.value = `Level Up! x${levelxp}`;
    }
    if (emojiBot) {
        input.value = `🤰🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕🏳️‍🌈🏳️‍🌈🤓🤓🏳️‍🌈🏳️‍🌈🤓🤓🤓🇳🇳🇳`;
    }
    if (customBot) {
        const customInput = document.getElementById('customInput').value;
        input.value = customInput;
    }

    const enterEvent = new KeyboardEvent("keydown", {
        bubbles: true,
        cancelable: true,
        keyCode: 13
    });
    input.dispatchEvent(enterEvent);
}

setInterval(chatSpam, 5);


let open = false;
// Create the Open button
var openButton = document.createElement("button");
openButton.innerText = "Open";
openButton.style.color = 'white';
openButton.style.margin = "10px";
openButton.style.position = 'relative';
openButton.style.bottom = '500px';
openButton.style.padding = '15px';
openButton.style.backgroundColor = 'rgba(0,0,0, 0.7)';

// Add click event listener to the open button to show the container
openButton.addEventListener("click", function () {
    if (!open) {
        open = true;
        container.style.display = "block";
        openButton.innerText = "Close";
    } else {
        open = false;
        container.style.display = "none";
        openButton.innerText = "Open";
    }
});

// Append the open and close button to the body
document.body.appendChild(openButton);

// Initially hide the container
container.style.display = "none";


// Other commands
// Create the Spin Player button
var spinPlayerButton = document.createElement("button");
spinPlayerButton.innerText = "Spin Player";
spinPlayerButton.style.border = "none";
spinPlayerButton.style.borderRadius = "4px";
spinPlayerButton.style.padding = "3px";
spinPlayerButton.style.cursor = "pointer";
spinPlayerButton.style.marginRight = "3px";
spinPlayerButton.style.marginTop = '3px'

// Add click event listener to the spin player button to run the function
let spinning = false;

var canvas = document.getElementsByTagName("canvas")[0];
spinPlayerButton.addEventListener("click", function(){
    if(spinning) {
      clearInterval(intervalId);
      spinning = false;
      spinPlayerButton.innerText = "Spin";
    } else {
      intervalId = setInterval(function(){
        var radius = Math.random() * 50;
        var angle = Math.random() * 2 * Math.PI;
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var event = new MouseEvent("mousemove", {
          clientX: x + radius * Math.cos(angle),
          clientY: y + radius * Math.sin(angle),
          view: window,
          bubbles: true,
          cancelable: true
        });
        canvas.dispatchEvent(event);
      }, 10);
      spinning = true;
      spinPlayerButton.innerText = "Stop Spinning";
    }
  });

container.append(spinPlayerButton);

var invisibleHitButton = document.createElement("button");
invisibleHitButton.innerText = "Start Invisible Hit";
invisibleHitButton.style.border = "none";
invisibleHitButton.style.borderRadius = "4px";
invisibleHitButton.style.padding = "3px";
invisibleHitButton.style.cursor = "pointer";
var intervalId;
invisibleHitButton.addEventListener("click", function(){
  var canvas = document.getElementsByTagName("canvas")[0];
  if (canvas) {
    if(intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      invisibleHitButton.innerText = "Start Invisible Hit";
    } else {
      intervalId = setInterval(() => {
        canvas.dispatchEvent(new MouseEvent("mousedown", {
          clientX: mouseX,
          clientY: mouseY,
          view: window,
          bubbles: true,
          cancelable: true
        }));
        canvas.dispatchEvent(new MouseEvent("mouseup", {
          clientX: mouseX,
          clientY: mouseY,
          view: window,
          bubbles: true,
          cancelable: true
        }));
      }, 10);
      invisibleHitButton.innerText = "Stop Invisible Hit";
    }
  }
});
document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});
container.appendChild(invisibleHitButton);

let autoRespawn = false;

let autoRespawnButton = document.createElement("input");
autoRespawnButton.type = 'checkbox';
autoRespawnButton.style.display = 'inline-block';
autoRespawnButton.style.marginLeft = '10px';
let autoRespawnButtonLabel = document.createElement('label');
autoRespawnButtonLabel.innerHTML = 'Auto Respawn';
autoRespawnButtonLabel.style.display = 'inline-block';
autoRespawnButtonLabel.style.marginLeft = '3px';
container.appendChild(autoRespawnButton);
container.appendChild(autoRespawnButtonLabel);


autoRespawnButton.addEventListener("click", function(){
  autoRespawn = !autoRespawn;
  if (autoRespawn) {
    const autoRespawnInterval = setInterval(autoRespawnFunc, 100);
  } else {
    clearInterval(autoRespawnInterval);
  }
});

function autoRespawnFunc() {
    document.getElementById('play-btn').click();
}

// Swordbattle.io Player Health Invincibility

// Create a function to make the player health invincible
function makeInvincible() {
  // Set the player health to an infinite number
  let playerHealth = Infinity;
  
  // Return the player health
  return playerHealth;
}

// Call the makeInvincible function
let invinciblePlayerHealth = makeInvincible();

}
