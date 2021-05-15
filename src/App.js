import "./App.css";
import Hello from "./Hello";

function App({ name, age }) {
  return (
    <div>
      Hello From App.js. My Name is <strong>{name}</strong> and Age = {age - 4}
      <br />
      <Hello firstname={name}></Hello>
      <br />
      <h1 className="heading"> Assigment React Basic</h1>
      <ol className="list">
        <li>Html</li>
        <li>Css</li>
        <li>JavaScript</li>
      </ol>
    </div>
  );
  // We can only return a single independent tag or a tree of tags
  /* All properties passsed in the React.DOm renderer in index.js comes in function paramters as first argument */
}

export default App;
