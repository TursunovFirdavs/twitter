'use client'

import Image from 'next/image'
import React, { useCallback } from 'react'
import Button from '../ui/Button'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useRegisterModal from '@/hooks/useRegisterModal';
import RegisterModal from '../modals/Register-modal';
import useLoginModal from '@/hooks/useLoginModal';
import LoginModal from '../modals/Login-modal';

const Auth = () => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()

  const openRegisterModal = useCallback(() => {
    registerModal.onOpen()
  }, [registerModal])

  const openLoginModal = useCallback(() => {
    loginModal.onOpen()
  }, [loginModal])
  return (
    <>
    <RegisterModal/>
    <LoginModal/>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-screen'>
        <Image src={'/images/x.svg'} alt='x' width={450} height={450} className='hidden justify-self-center md:block' />

        <div className="flex flex-col justify-center gap-6 md:justify-between h-[70vh]">
          <div className="block md:hidden">
            <Image src={'/images/x.svg'} alt='x' width={50} height={50} />
          </div>
          <h1 className="text-6xl font-bold">Happining now</h1>
          <div className="w-full md:w-[60%]">
            <h2 className="font-bold text-3xl mb-4">Join today.</h2>
            <div className="flex flex-col space-y-2">
              <Button label={
                <div className='flex gap-2 items-center justify-center'>
                  <FcGoogle />
                  Signup with google
                </div>
              } fullWidth secondary />
              <Button label={
                <div className='flex gap-2 items-center justify-center'>
                  <FaGithub />
                  Signup with github
                </div>
              } fullWidth secondary />
              <div className="flex items-center justify-center">
                <div className='h-px bg-gray-700 w-1/2' />
                <p className='mx-4'>or</p>
                <div className='h-px bg-gray-700 w-1/2' />
              </div>
              <Button onclick={openRegisterModal} label={'Creat account'} fullWidth />
            </div>
          </div>
          <div className='w-full md:w-[60%]'>
            <h3 className='font-medium text-xl mb-4'>Already have account?</h3>
            <Button label={'Signin'} fullWidth outline onclick={openLoginModal} />
            

          </div>
        </div>
      </div>
    </>
  )
}

export default Auth