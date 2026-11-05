
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("5");
  const [comments, setComments] = useState("");
  const [feedback, setFeedback] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setFeedback({ name, rating, comments });
  }

  return (
    <div>
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        Name:
        <input value={name}
          onChange={(e) => setName(e.target.value)} />

        <br /><br />

        Rating:
        <select value={rating}
          onChange={(e) => setRating(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>

        <br /><br />

        Comments:
        <textarea value={comments}
          onChange={(e) => setComments(e.target.value)} />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {feedback && (
        <div>
          <h3>Submitted Feedback</h3>
          <p>Name: {feedback.name}</p>
          <p>Rating: {feedback.rating}</p>
          <p>Comments: {feedback.comments}</p>
        </div>
      )}
    </div>
  );
}

export default App;
