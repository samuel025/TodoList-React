import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const { Data: Todos, isPending, error } = useFetch('http://localhost:8000/api/')
    const history = useNavigate();
    const handleClick = (id) => {
      fetch('http://localhost:8000/api/delete/' + id, {
        method: 'DELETE'
      }).then(() => {
        history(0);
      }) 
    }
    
  return (
    <div className="content">
      <div className="home">
          { isPending && <div>Loading...</div> }
          { Todos && Todos.map(todo => (
          <div className="todo-preview" key={todo.id}>
              <h2>{ todo.title }</h2>
              <label>Completed <input type="checkbox" defaultChecked={todo.completed} ></input></label><br/>
              <button onClick={event => handleClick(todo.id)}>Delete</button>
          </div>
          ))}
          {error && <div>{error}</div>}
      </div>
    </div>
  );
}
 
export default Home;