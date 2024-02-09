import useLoginModal from '@/hooks/useLoginModal'
import React, { useCallback } from 'react'
import Modal from '../ui/Modal'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import Button from '../ui/Button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { loginSchema } from '@/lib/validation'
import useRegisterModal from '@/hooks/useRegisterModal'


export default function LoginModal() {
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()

    const onToggle = useCallback(() => {
        loginModal.onClose()
        registerModal.onOpen()
    },[loginModal, registerModal])

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
          password: "",
          email: ''
        },
      })
    
      function onSubmit(values: z.infer<typeof loginSchema>) {
        console.log(values)
    
      }
      
    const {isSubmitting} = form.formState

    const bodyContent = <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

    const footerContent = <div className='text-neutral-400 text-center mb-4 '>
    <p>First time to using X??
      <span onClick={onToggle} className='text-white cursor-pointer hover:underline'>Creat account</span>
    </p>
  </div>
  return (
    <Modal
        isOpen={loginModal.isOpen}
        onClose={loginModal.onClose}
        body={bodyContent}
        footer={footerContent}
    />
  )
}
