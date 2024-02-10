import { NavLink } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <NavLink to={'/login'}>log in</NavLink>
        </div>
    );
};

export default Home;