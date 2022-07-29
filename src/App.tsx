import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import { MainContent } from './components/MainContent';
import ThemeProvider from './context/Theme';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainContent />}/>
            <Route path="/:postId" element={<MainContent/>}/>
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
    //<PostList/>
  );
}

export default App;
