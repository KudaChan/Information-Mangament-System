'use client'

import React from 'react';
import { Dashboard } from './_components';
import { useRouter } from 'next/navigation';

const GuardHome = () => {
  const router = useRouter();
  return (
    <div>
      <Dashboard />
      <button className='btn btn-primary' onClick={() => router.push('/dashboard/setting')}>
      </button>
    </div>
  )
}

export default GuardHome