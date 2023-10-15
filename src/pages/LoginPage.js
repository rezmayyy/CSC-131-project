import { auth } from "../configuration/firebase";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react"; 

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setEmail("");
            setPassword("");
        } catch(err) {
            console.error(err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    };

    return ( 
        <div>
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
            <button onClick={signIn}> Sign In</button>
            <button onClick={logout}> Logout </button>
            {user ? (
                <p>You are logged in as {user.email}</p>
            ) : (
                <p>You are not logged in</p>
            )}
        </div>
    );
};
