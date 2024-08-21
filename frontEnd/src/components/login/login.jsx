import React, { useState } from 'react'
import axios from 'axios';


// const api =  `https://smsacontrol.com/api/api/`

// // export const csrf = () => axios.get('/sanctum/csrf-cookie');
// export default function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const login = (e ,email, password) => {
//         e.stop
//         console.log(axios.post(`${api}'login'`, { email, password }));
//         return axios.post(`${api}'login'`, { email, password });
        
//     }
//     // console.log(login);
//   return (
//     <div>
        
//         <form onSubmit={() => login(email, password)}>
//             <input type="text" placeholder='userName' name='email'  onChange={(e) => setEmail(e.target.value)} />
//             <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} />
//             <input type="submit" value='submit' />
//         </form>
//     </div>
//   )
// }









const api = 'https://smsacontrol.com/api/';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [token, setToken] = useState('');
    const [dataProf, setDataProf] = useState('');

    const account = async (token) => {
        try {
            const response = await axios.get(`${api}profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setDataProf(response.data);
            setError('');  // Clear any previous errors
            console.log('Profile data:', response.data);
        } catch (error) {
            setError('Failed to fetch profile data');
            setToken('');  // Clear token on error
            console.log('Error:', error.response ? error.response.data : error.message);
        }
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post(`${api}login`, { email, password });
            setToken(response.data.token);
            setError('');  // Clear any previous errors
            console.log('Login successful, token:', response.data.token);
            account(response.data.token);
        } catch (error) {
            setError('Invalid email or password');
            setToken('');  // Clear token on error
            console.log('Error:', error.response ? error.response.data : error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        login(email, password);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Email" 
                    name="email"  
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <input type="submit" value="Submit" />
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {token && <p style={{ color: 'green' }}>Token: {token}</p>}
       </div>
);
}


































// const Register = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const history = useHistory();

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('https://your-api-url/register', { email, password });
//             history.push('/login');
//         } catch (error) {
//             console.error('Registration failed:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Register</h2>
//             <form onSubmit={handleRegister}>
//                 <div>
//                     <label>Email:</label>
//                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 </div>
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default Register;




