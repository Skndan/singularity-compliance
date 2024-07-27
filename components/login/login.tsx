"use client";

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next-nprogress-bar';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import toast from 'react-hot-toast';
import * as z from "zod";
import { EyeClosedIcon } from '@radix-ui/react-icons';
import { useUserStore } from '@/store/use-user-store';
import { useAuth } from '@/context/auth-provider';
import { Eye, Loader } from 'lucide-react';
import apiClient from '@/lib/api/api-client';

const formSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
});

const passwordFormSchema = z.object({
  email: z.string().min(1)
});

type LoginFormValues = z.infer<typeof formSchema>;

const Login = () => {

  const [loading, setLoading] = useState(false);
  const [eye, setEye] = useState(false);

  const title = 'Sign In';
  const description = 'Enter your email and password';

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();

  const { signIn } = useAuth();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      // setLoading(true);
      // data.email.trim();
      // data.password.trim();

      // await signIn(data);
      toast.success('Welcome');
      router.push('/dashboard'); // Redirect to dashboard after successful sign-in

      // setLoading(false);
    } catch (error: any) {
      toast.error("Something went wrong.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email <span className='text-red-500'>*</span></FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password <span className='text-red-500'>*</span></FormLabel>
                      <FormControl className="relative">
                        <div className="relative">
                          <Button size={"icon"} variant={"ghost"} className='absolute right-0' onClick={(e) => {
                            e.preventDefault();
                            setEye(!eye);
                          }}>
                            {eye ? <EyeClosedIcon className="top-2.5 h-4 w-4 text-muted-foreground" /> : <Eye className="top-2.5 h-4 w-4 text-muted-foreground" />}
                          </Button>
                          <Input
                            disabled={loading}
                            type={eye ? 'text' : 'password'}
                            placeholder="Password"
                            className="pr-8"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col items-end pb-2">
                <Button variant="link" className="p-0 h-auto" onClick={(e) => {
                  e.preventDefault(); 
                }}>
                  Forgot Password?
                </Button>
              </div>
            </div>
            <Button disabled={loading} type="submit" className="w-full">
              {loading &&
                <Loader className="animate-spin h-5 w-5 mr-3" />}
              Sign In
            </Button>
          </form>
        </Form>
      </CardContent> 
    </Card>
  );
};

export default Login;