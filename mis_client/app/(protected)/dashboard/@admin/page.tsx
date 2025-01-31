'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

const Admin = () => {
  const router = useRouter();
  return (
    <div>Admin
      <button className='btn btn-primary' onClick={() => router.push('/dashboard/setting')}>
        setting
      </button>
    </div>
  )
}

export default Admin