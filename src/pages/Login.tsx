import { useNavigate, useNavigation } from 'react-router';
import { login } from '../api/test.api';
import { setToken } from '../utils/auth.utils';
import { useState } from 'react';

export function Login() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const navigation = useNavigation();
    const isNavigating = !!navigation.location;

    async function loginHandle() {
        setLoading(true);
        try {
            const {token} = await login();
            setToken(token);
            setLoading(false);
            navigate('/streetlight');
        } catch {
            console.error('some api error from logining!');
        }
    }
    return (
        <div>
            {
                isNavigating 
                ? <h2>🌀 Loading...</h2>
                : <button onClick={loginHandle}>{loading ? 'loading...' : 'Login'}</button>
            }
            
        </div>
    )
}