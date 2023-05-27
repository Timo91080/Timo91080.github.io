import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClose = () => {
    // Rediriger vers une autre page lorsque l'utilisateur ferme le formulaire
    history.push('/autre-page');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Faites ici votre logique d'enregistrement (par exemple, envoi des données au serveur)

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-400 to-green-200">
      <div className="bg-white w-full max-w-md rounded shadow-md">
        <div className="flex justify-between items-center bg-blue-500 px-4 py-2 rounded-t">
          <h5 className="text-white text-sm font-bold">Login</h5>
          <button className="text-white text-xl" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-700 text-sm">
                En cliquant sur "Register", vous acceptez les conditions
                d'utilisation.
              </p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
