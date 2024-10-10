import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; 
import { LoginContext } from "@/context/LoginContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(LoginContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const loginData = { email, password };

      const response = await axios.post(
        "http://localhost:3003/api/users/login",
        loginData
      );

      if (response.status === 200) {
        
        const userData = response.data.userData;

        setUser({ name: userData.name, email: userData.email });

        localStorage.setItem(
          "user",
          JSON.stringify({ name: userData.name, email: userData.email })
        );
  

        toast.success("You have logged in successfully!");

        navigate("/");
      } else {
        toast.error("Invalid email or password.");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-cover bg-center">
      <div className="relative z-10 mx-auto border-2 border-white rounded-3xl p-8 w-full max-w-[400px] space-y-8 shadow-2xl backdrop-blur-sm">
        <div className="space-y-4 text-center">
          <h1
            className="text-5xl font-bold"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Login
          </h1>
          <p className="text-gray-400">
            Enter your details to access your account
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>
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
            <Label htmlFor="password" className="text-gray-300">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-gray-800 text-white focus:ring-2 focus:ring-purple-600 focus:outline-none rounded-md"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-lg font-semibold py-2 rounded-md"
          >
            Login
          </Button>
        </form>
        <div className="mt-6 text-center text-sm">
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="underline text-purple-500 hover:text-purple-400"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
