'use client'

import useRegisterModal from '@/hooks/useRegisterModal'
import React, { Dispatch, SetStateAction, useCallback, useState } from 'react'
import Modal from '../ui/Modal'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { REgisterStep1Schema, REgisterStep2Schema } from '@/lib/validation'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import Button from '../ui/Button'
import useLoginModal from '@/hooks/useLoginModal'

export default function RegisterModal() {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [step, setStep] = useState(1)
  const [data, setData] = useState({name: '', email: ''})
  const bodyContent = step == 1 ? <RegisterStep1 setData={setData} setStep={setStep} /> : <RegisterStep2/>
  
  const onToggle = useCallback(() => {
    loginModal.onClose()
    registerModal.onOpen()
},[loginModal, registerModal])

  const footer = <div className='text-neutral-400 text-center mb-4 '>
    <p>Already have an account?
      <span onClick={onToggle} className='text-white cursor-pointer hover:underline'>Sign in</span>
    </p>
  </div>
  return (
    <Modal
    body={bodyContent}
    footer={footer}
    isOpen={registerModal.isOpen}
    onClose={registerModal.onClose}
    step={step}
    totalStep={2}
    />
    )
  }
  
  function RegisterStep1({setData, setStep} : {setData: Dispatch<SetStateAction<{name: string, email: string}>>; setStep: Dispatch<SetStateAction<number>>}) {
    const form = useForm<z.infer<typeof REgisterStep1Schema>>({
      resolver: zodResolver(REgisterStep1Schema),
      defaultValues: {
        email: "",
        name: ''
      },
    })
    
    function onSubmit(values: z.infer<typeof REgisterStep1Schema>) {
      console.log(values)
      setData(values)
      setStep(2)
    }
    
  const {isSubmitting} = form.formState

  return <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button label={'Next'} type="submit" secondary fullWidth large disabled={isSubmitting} />
      </form>
  </Form>

}

function RegisterStep2() {
  const form = useForm<z.infer<typeof REgisterStep2Schema>>({
    resolver: zodResolver(REgisterStep2Schema),
    defaultValues: {
      password: "",
      username: ''
    },
  })

  function onSubmit(values: z.infer<typeof REgisterStep2Schema>) {
    console.log(values)

  }
  
const {isSubmitting} = form.formState

  return <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input type='password' placeholder="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button label={'Register'} type="submit" secondary fullWidth large disabled={isSubmitting} />
    </form>
</Form>
}
