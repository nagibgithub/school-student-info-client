import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to={'/stu_entry'} >Enter New Student</Link>
        </div>
    );
};

export default Home;