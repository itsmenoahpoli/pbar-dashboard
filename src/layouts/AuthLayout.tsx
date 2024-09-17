import React from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: React.FC = () => {
  return (
    <div className="auth-layout h-screen w-screen bg-slate-100 flex flex-col items-center gap-5">
      <div className="w-full h-[70px] flex justify-center items-center bg-white shadow">
        <h1 className="text-lg font-bold">PBAR Booking Management System</h1>
      </div>
      <div className="w-[500px] rounded pt-5 mt-[80px]" style={{ zoom: 0.85 }}>
        <div className="flex flex-col gap-5 px-5">
          <h1 className="text-center text-lg font-bold">BACKOFFICE DASHBOARD</h1>
          <p className="text-sm text-center text-gray-500">Manage bookings, tickets, payments, bus routes, and transactions</p>
        </div>
        <hr className="mt-5" />
        <Outlet />
      </div>
    </div>
  );
};
