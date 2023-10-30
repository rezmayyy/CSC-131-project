import { Link, useNavigate } from 'react-router-dom';

export const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div className="title-header2">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li className="flex-row">
                    <img src="AlgorithmAlliesLogo.png" />
                    <h1>Algorithm Allies Team 6</h1>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    )
};