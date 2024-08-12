import { useState } from "react";

// import { axios } from "axios";

import { Logo } from "../utils/constants";

const LoginPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
      });
    
    //   const router = useRouter();
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      };
    

  // const handleLogin = () => {
  //   axios.post('http://localhost:4000/api/login', {
  //     username: 'admin',
  //     password: 'adminpassword'
  //   })
  //   .then(response => {
  //     setAuthToken(response.data.token);
  //     setIsAdmin(true);
  //   })
  //   .catch(error => {
  //     console.error('Login failed', error);
  //   });
  // };


  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col gap-5 shadow-md dark:shadow-[0_4px_30px_#4747470b] shrink-0 w-[27%] px-10 py-16 rounded-2xl dark:border border-solid border-[#c4c4c4] login">
          <h1 className="flex items-center justify-center">
            <Logo />
          </h1>
          <span className="flex flex-col items-center justify-center gap-4">
            <h2>Welcome back</h2>
            <p className="text-sm">
              Please enter your details to sign in.
              <span className="text-red-500">[credentials:In Readme]</span>
            </p>
          </span>
          <span className="flex flex-col gap-1">
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleInputChange}
              className="bg-transparent h-9 rounded-lg border border-[#c4c4c4] py-1 px-2"
            />
          </span>
          <span className="flex flex-col gap-1">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              className="bg-transparent h-9 rounded-lg border border-[#c4c4c4] py-1 px-2"
            />
          </span>
          <button 
          
           className="px-10 py-1.5  bg-[#ff184a] rounded-lg w-full">
            Submit
          </button>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
