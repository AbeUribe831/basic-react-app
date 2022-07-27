import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import { MainContent } from './components/MainContent';
import PostList from './components/PostList';
// https://picsum.photos/200/300 to get image
function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent />}></Route>
            <Route path="/:postId" element={<MainContent/>}></Route>
        </Routes>
      </BrowserRouter>
    </Layout>
    //<PostList/>
  );
}

export default App;
