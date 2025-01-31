'use client'

import '@/app/globals.css'
import { useRole } from "@/app/_context/RoleContext";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Layout({
  admin,
  gate_ops,
}: {
    admin: React.ReactNode
    gate_ops: React.ReactNode
  }) {
  const { role } = useRole();
  const router = useRouter();

  useEffect(() => {
    if (!role) {
      router.push('/');
    }
  }, [role, router]);

  if (!role) {
    return null;
  } else if (role === 'admin') {
    return admin;
  } else if (role === 'gate_ops') {
    return gate_ops;
  } else {
    throw new Error('Role not found');
  }
}