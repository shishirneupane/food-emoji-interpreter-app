import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🧁": "Cupcake",
  "🍷": "Wine",
  "🥨": "Pretzel",
  "🥯": "Bagel",
  "🥞": "Pancakes",
  "🌯": "Burrito",
  "🍿": "Popcorn",
  "🧀": "Cheese",
  "🍕": "Pizza",
  "🍔": "Burger",
  "🌭": "Hot Dog",
  "🌮": "Taco",
  "🥓": "Bacon",
  "🍺": "Beer",
  "🥐": "Croissant",
  "🍣": "Sushi",
  "🍗": "Chicken Leg",
  "🍝": "Spaghetti",
  "🥟": "Dumpling",
  "🎂": "Birthday Cake",
  "🍮": "Custard",
  "🍛": "Curry Rice",
  "🍙": "Rice Ball",
  "🥗": "Green Salad"
};

const emojiArray = Object.keys(emojiDictionary);

// App component
export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState(
    "Enter some food emojis or click from below to know their meanings"
  );

  function emojiInputHandler(event) {
    var inputEmoji = event.target.value;
    var emojiMeaning;

    if (inputEmoji in emojiDictionary) {
      emojiMeaning = emojiDictionary[inputEmoji];
    } else if (inputEmoji === "") {
      emojiMeaning =
        "Enter some food emojis or click from below to know their meanings";
    } else {
      emojiMeaning = "We don't have this in our database";
    }

    setEmojiMeaning(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setEmojiMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <a
        id="github-repo"
        title="Source code for this app"
        href="https://github.com/shishirneupane/food-emoji-interpreter-app"
      >
        <i className="fab fa-github"></i>
      </a>
      <h1>Food Emoji Interpreter</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Enter food emoji here"
      ></input>
      <h2>{emojiMeaning}</h2>
      <hr></hr>
      <h2>Emojis we know</h2>
      <div id="emoji-list">
        {emojiArray.map((emoji, index) => {
          return (
            <span onClick={() => emojiClickHandler(emoji)} key={index}>
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
