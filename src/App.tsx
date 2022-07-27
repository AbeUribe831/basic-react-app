import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent />}/>
          <Route path="/:postId" element={<MainContent/>}/>
        </Routes>
      </BrowserRouter>
    </Layout>
    //<PostList/>
  );
}

export default App;
