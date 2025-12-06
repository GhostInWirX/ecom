import './App.css'; // Ensure this imports the CSS file with Tailwind directives
// import Navigation from './customer/components/navigation/Navigation';
// import HomePage from './customer/components/Page/Homepage/HomePage';
import { Route,Routes } from 'react-router-dom';
import { CustomRouters } from './Routes/CustomRoutes';

function App() {
  return (
<>
<Routes>
  <Route path="/*" element={<CustomRouters />} />
</Routes>

</>
  );
}

export default App;