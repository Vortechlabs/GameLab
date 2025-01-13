import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Define state for login status
  const [userdata, setUserdDta] = useState(null); // Define state for user data
  
  const navigate  = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", formData);

      if (response.data.success) {
        localStorage.setItem('token', response.data.remember_token);
        setIsLoggedIn(true);
        setUserData(response.data.data);
        Swal.fire("Login Sukses", "Anda berhasil login", "success").then(() => {
          navigate('/');
        });
      } else {
        Swal.fire("Login Gagal", "Email atau password salah", "error");
      }
    } catch (error) {
      Swal.fire("Login Gagal", "Terjadi kesalahan", "error");
    }
  };

  return (
    <div>
        <div>
            <h1 className='text-center'>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='email' onChange={handleChange} placeholder='Email'/>  <br />
                <input type="password" name='password' onChange={handleChange}  placeholder='Password'/> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
  )
}

export default Login