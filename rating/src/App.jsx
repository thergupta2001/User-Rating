import questions from "./questions";
import UserPage from "./UserPage";

function App() {
  return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-900 to-blue-600">
        <UserPage questions={questions} />
      </div>
  );
}

export default App;
