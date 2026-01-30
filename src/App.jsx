import { useState } from 'react';
import './index.css';
import Quiz from './components/quiz.jsx';
import Result from './components/result.jsx';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1>Alex's Quiz App</h1>
      <Quiz />
    </div>
  );
}
