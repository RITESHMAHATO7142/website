import "./App.css";
import Todos from "./components/Todos";

const App = () => {
	return (
		<div className='container'>
			<h1 className='text-center'>ToDo App in ReactJS</h1>
			<Todos />
		</div>
	);
};

export default App;