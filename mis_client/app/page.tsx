'use client'

import React from "react";
import { useRouter } from 'next/navigation';
import { useRole } from '@/app/_context/RoleContext';

export default function Home() {
  const { setRole } = useRole();
  const router = useRouter();
  return (
    <div className="border border-black p-4 rounded-2xl flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold m-5">
        Welcome to the Mis Client App!
      </h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setRole('admin')
          router.push('/dashboard')
        }} >
        Admin Dashboard
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setRole('gate_ops')
          router.push('/dashboard')
        }}>
          Guard Dashboard
      </button>
    </div>
  );
}
