import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'; 

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const userData = { name, email, password };
      
      const response = await axios.post("http://localhost:3003/api/users/register", userData);
      
      if (response.status === 201) {
        toast.success("Your SignUp was Successful");
        navigate("/auth/login"); 
      } else {
        toast.error("Error occurred during sign-up");
      }
    } catch (error) {
      toast.error("Failed to sign up, please try again");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white bg-cover bg-center">
      <div className="relative z-10 mx-auto border-2 border-white rounded-3xl p-8 w-full max-w-[400px] space-y-8 shadow-2xl backdrop-blur-sm">
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>SignUp</h1>
          <p className="text-gray-400">Enter your details to create your account</p>
        </div>
        <form onSubmit={handleSignUp} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-gray-800 text-white focus:ring-2 focus:ring-purple-600 focus:outline-none rounded-md"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-800 text-white focus:ring-2 focus:ring-purple-600 focus:outline-none rounded-md"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-gray-800 text-white focus:ring-2 focus:ring-purple-600 focus:outline-none rounded-md"
            />
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-lg font-semibold py-2 rounded-md">
            Signup
          </Button>
        </form>
        <div className="mt-6 text-center text-sm">
          Have an account?{" "}
          <Link to="/auth/login" className="underline text-purple-500 hover:text-purple-400">
            Login
          </Link>
        </div>
      </div>
     
    </div>
  );
}
