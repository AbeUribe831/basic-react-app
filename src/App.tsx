import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Loading from './components/Loading';

// import { MainContent } from './components/MainContent';
// using a timer just to add a delay on the import to see lazy loading in action
const MainContent = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/MainContent') as any), 5000)
  })
})

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<MainContent />}/>
            <Route path="/:postId" element={<MainContent/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
