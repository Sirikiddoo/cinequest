import {createContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import {BACKEND_URL} from '../constants/Constants.jsx';

const authHeaders = {
    'Content-Type': 'application/json',
    'X-Api-Key': import.meta.env.VITE_BACKEND_KEY
};

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');

        if (token) {
            try {
                const decoded = jwtDecode(token);
                void fetchUserData(decoded.sub, token);
            } catch
                (error) {
                console.error("Token decoding failed", error);
                toggleIsAuth({
                    isAuth: false,
                    user: null,
                    status: 'done',
                });
            }
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);

    function login(JWT) {
        if (typeof JWT !== 'string') {
            console.error("Invalid token: Token is not a string");
            return;
        }

        try {
            localStorage.setItem('authToken', JWT);
            const decoded = jwtDecode(JWT);
            void fetchUserData(decoded.sub, JWT, '/profile');
        } catch (error) {
            console.error('Invalid token:', error);
        }
    }

    function logout() {
        localStorage.removeItem('authToken');
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });

        console.log('User is logged out!');
        navigate('/');
    }

    const registerUser = async (userData) => {
        try {
            const response = await axios.post(`${BACKEND_URL}/users`, userData, {headers: authHeaders});
            return response.data;
        } catch (error) {
            console.error('Error registering user:', error);
            throw error;
        }
    };

    const authenticateUser = async (credentials) => {
        try {
            const response = await axios.post(`${BACKEND_URL}/users/authenticate`, credentials, {headers: authHeaders});
            return response.data.jwt;
        } catch (error) {
            console.error('Error authenticating user:', error);
            throw error;
        }
    };

    async function fetchUserData(id, token, redirectUrl) {
        const headers = {
            ...authHeaders,
            'Authorization': `Bearer ${token}`
        };

        try {
            const result = await axios.get(`${BACKEND_URL}/users/${id}`, {headers});

            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: 'done',
            });

            if (redirectUrl) {
                navigate(redirectUrl);
            }

        } catch (error) {
            console.error('Error fetching user data:', error);

            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }


    const contextData = {
        ...isAuth,
        login,
        logout,
        registerUser,
        authenticateUser
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;