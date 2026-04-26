"use client";

export default function AdminHeader() {
  return (
    <div className="w-full flex justify-between items-center px-6 py-4 border-b bg-white sticky top-0 z-50">
      
      <h1 className="font-bold text-lg">
        Bhudevi Admin Panel
      </h1>

      <button
        onClick={async () => {
          await fetch("/api/logout", {
            method: "POST",
          });
        
          window.location.href = "/login";
        }}
        className="bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}