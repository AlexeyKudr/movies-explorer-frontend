import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import Profile from "../Profile/Profile.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import NotFound from "../NotFound/NotFound.jsx";

function App() {
    return (
        <div className="page">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/saved-movies" element={<SavedMovies />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/signin" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

