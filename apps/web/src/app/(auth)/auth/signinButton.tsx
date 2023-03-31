'use client';

import Image from 'next/image';
import { useUserStore } from '@mentora/store';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInButton() {
  const { user, loading, signIn, signOut } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  if (loading) {
    return (
      <div className='btn-wrapper text-center'>
        <h1 className='text-lg'>Loading...</h1>
      </div>
    );
  }
  return (
    <div className='btn-wrapper text-center'>
      {!user ? (
        <button
          className='bg-white active:bg-slate-50 text-slate-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150'
          type='button'
          onClick={signIn}
        >
          <Image alt='...' className='w-5 mr-1' src='/img/google.svg' width={20} height={20} />
          Google
        </button>
      ) : (
        <button
          className='bg-white active:bg-slate-50 text-slate-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150'
          type='button'
          onClick={signOut}
        >
          Logout
        </button>
      )}
    </div>
  );
}
