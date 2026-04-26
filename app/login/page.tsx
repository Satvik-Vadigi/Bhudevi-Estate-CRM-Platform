"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    setLoading(false);

    if (data.success) {
      router.push("/admin");
      router.refresh();
    } else {
      alert("Wrong password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm">

        <h1 className="text-3xl font-bold text-center">
          Admin Login
        </h1>

        <p className="text-gray-500 text-center mt-2">
          Secure access only
        </p>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-xl p-3 mt-6"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl mt-4 font-semibold"
        >
          {loading ? "Checking..." : "Login"}
        </button>

      </div>
    </div>
  );
}