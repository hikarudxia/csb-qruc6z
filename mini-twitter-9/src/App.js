import "./styles.css";
import React, { useState, useEffect } from "react";
import { addUser, getUsers, getTweets } from "./addget";

function App() {
  const [message, setMessage] = useState("");
  const [editingTweetId] = useState(null); // 編集中のツイートのIDを保持
  const [editedMessage, setEditedMessage] = useState("");
  const [tweets, setTweets] = useState([]);
  const [updatedNames, setUpdatedNames] = useState({});
  const [updatedName, setUpdatedName] = useState("");

  const handleAddUser = async () => {
    try {
      const user = { name: "Tokumei" };
      await addUser(user, message);
      setMessage("投稿できました");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    const fetchTweets = async () => {
      const tweetList = await getTweets();
      setTweets(tweetList);
    };

    fetchTweets();
  }, []);

  return (
    <div className="App">
      <h1>レビュー</h1>
      <div className="tweet-box">
        <textarea
          placeholder="入力"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button onClick={handleAddUser}>投稿</button>
      </div>
      <ul className="tweet-list">
        {tweets.map((tweet) => (
          <li key={tweet.id} className="tweet">
            <div>
              {tweet.user && (
                <>
                  <strong>{tweet.user.name}</strong>{" "}
                  <span>{tweet.user.email}</span>
                </>
              )}
              {editingTweetId === tweet.id ? (
                <></>
              ) : (
                <>
                  <p>{tweet.message}</p>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
