import '../styles/App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from "../configuration/firebase";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const signIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            // setEmail("");
            // setPassword("");
        } catch (err) {
            console.error(err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signIn();
        navigate("/");
    }

    return (
        <div>
            <h2 id="subtitle-name">Login Page</h2>
            <div className="signup-page-content">
                <form onSubmit={handleSubmit}>

                    <input
                        placeholder="Email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />


                    <input
                        placeholder="Password..."
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    { !user && <Button type="submit" variant="secondary" className="signup-button"> Sign In</Button>}
                    { user && <Button type="button" variant="secondary" className="signup-button" onClick={logout}> Logout </Button>}
                </form>

                <div className="general-div">
                    {user ? (
                        <p>You are logged in as {user.email}</p>
                    ) : (
                        <p>You are not logged in</p>
                    )}
                </div>
            </div>
        </div>
    );
};
