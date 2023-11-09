import { Route, Routes } from 'react-router-dom';
import TopBar from "./common/nav";
import Home from "./pages/home";
import Footer from './common/footer';
import Form from './pages/form';
import Stories from './pages/stories';
import NewStory from './pages/storygenerated';


function App() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  };

  const routesStyle = {
    flex: '1'
  };

  return (
    <div style={appStyle}>
      <TopBar />
      <div style={routesStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:id" element={<NewStory />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
