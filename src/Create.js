
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { title, completed };

    fetch('http://localhost:8000/api/create/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo)
      }).then(() => {
        history('/');
      })
  }

  return (
    <div className="create">
      <h2>Add a New Todo</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="fol">
            <label>Completed </label>
            <input 
                className="check" 
                type='checkbox'
                onChange={(e) => setCompleted(e.target.checked)}
            />
        </div>
        <button>Add Blog</button>
      </form>
    </div>
  );
}
 
export default Create;