import React, { use, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState("");
    const { signIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(location.state ? location.state : "/");
            })
            .catch(() => {
                setError("Invalid Password. Enter the correct password");
            });
    };

    const handlePasswordChange = () => {
        if (error) {
            setError(""); // Clear error as user starts typing
        }
    };

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login your account!</h2>
                <form onSubmit={handleLogin} className="card-body space-y-5">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input
                            name='password'
                            type="password"
                            className="input"
                            placeholder="Password"
                            required
                            onChange={handlePasswordChange}
                        />

                        {error && <p className='text-xs text-error'>{error}</p>}

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>

                        <p className='font-semibold text-center pt-2'>
                            Don't Have An Account? <Link className='text-secondary' to="/auth/register">Register</Link>
                        </p>
                    </fieldset>

                    <div>
                        <button className='btn btn-outline btn-secondary w-full'>
                            <FcGoogle size={20} /> Login With Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
