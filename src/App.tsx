import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homePage";
import DestinationListingsPage from "./pages/destinationListingsPage";
import PostLocationForm from "./pages/post";
import Tour_page from "./pages/tourPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/post' element={<PostLocationForm />} />
        <Route path='/city/tours/:tour/:city' element={<Tour_page />} />
        <Route
          path='/destination/:city'
          element={<DestinationListingsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
