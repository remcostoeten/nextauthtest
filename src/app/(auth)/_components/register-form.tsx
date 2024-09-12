'use client';

import { Button, Input, Label } from "@/components/ui";
import { registerUser } from '@/core/server/actions/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { toast } from 'react-hot-toast';
import InputField from "./register-form/InputField";
import SocialButton from "./register-form/SocialButton";

export default function SignUpForm() {
    const router = useRouter();
    const [state, formAction] = useFormState(registerUser, null);

    useEffect(() => {
        if (state?.error) {
            toast.error(state.error);
        }
        if (state?.success) {
            toast.success('Registration successful!');
            router.push('/login');
        }
    }, [state, router]);

    const socialButtons = [
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/da7a313caa2854ba4c1992ebb14168f608a78036a7018e69bed7b1a1304bd5d2?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197",
            name: "Google",
        },
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a88a4277409f3f01d40a0d8e850399ac79596ef2266c54a0bc7a25f9a5e7ecd?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197",
            name: "Github",
        },
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/01a7d340204d191f77c087d81005e93f524cc77519415370bb4bb4c63a350403?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197",
            name: "Gitlab",
        },
    ];

    return (
        <main className="flex flex-col px-14 max-w-[742px] max-md:pl-5">
            <div className="flex flex-col w-full text-white max-md:max-w-full">
                <h2 className="self-center text-base">Register with:</h2>
                <div className="flex gap-3 items-start mt-4 w-full text-sm leading-none whitespace-nowrap max-md:max-w-full">
                    {socialButtons.map((button, index) => (
                        <SocialButton key={index} icon={button.icon} name={button.name} />
                    ))}
                </div>
            </div>
            <div className="flex gap-4 items-center mt-8 w-full text-sm leading-none text-white whitespace-nowrap max-md:max-w-full">
                <div className="flex-1 shrink self-stretch my-auto h-px border border-solid basis-0 border-white border-opacity-10 min-w-[240px] w-[272px]" />
                <span className="self-stretch my-auto">Or</span>
                <div className="flex-1 shrink self-stretch my-auto h-px border border-solid basis-0 border-white border-opacity-10 min-w-[240px] w-[271px]" />
            </div>
            <form action={formAction} className="flex flex-col mt-8 w-full max-md:max-w-full">
                <div className="flex gap-3 items-start w-full max-md:max-w-full">
                    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
                        <InputField
                            label="First Name"
                            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e9e690dd74dd8229abf66ca264b1bfdc5c97a97c7041e0c383b12846d701745f?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197"
                            placeholder="First Name"
                            name="firstName"
                        />
                    </div>
                    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
                        <InputField
                            label="Last Name"
                            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/85a9f4db90aeae5b2f49c657ecb5e09ea4f2dca54fb6d5d4c7d4c0424851c385?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197"
                            placeholder="Last Name"
                            name="lastName"
                        />
                    </div>
                </div>
                <InputField
                    label="Username"
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e96760533fc0c179832ea9870760b36bee5ffda93d1c4f8e3411617208fd894a?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197"
                    placeholder="Username"
                    name="username"
                />
                <InputField
                    label="Email"
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d026776744a12c6fa109c27444a6d37984f8f204325a194cdf625d41f8eb4ce7?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197"
                    placeholder="Email"
                    type="email"
                    name="email"
                />
                <div className="flex flex-col mt-6 w-full text-sm max-md:max-w-full">
                    <Label htmlFor="password" className="text-base text-white">
                        Password
                    </Label>
                    <div className="flex gap-10 justify-between items-center px-4 py-3 mt-2 w-full leading-none whitespace-nowrap rounded-md border border-solid bg-white bg-opacity-10 border-white border-opacity-10 min-h-[44px] text-white text-opacity-30 max-md:max-w-full">
                        <div className="flex gap-3 items-center self-stretch my-auto">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a04208a4c373b4a9b2be433ade7bd61077e53307d7b6760284dfbadd4ee9ce5?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197"
                                alt=""
                                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                            />
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                className="bg-transparent border-none text-white text-opacity-30"
                            />
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a53712812fb7cb9d1df7c3cfd877e5a68e434561f4ffb327a8b712d575c773db?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197"
                            alt="Show password"
                            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square cursor-pointer"
                        />
                    </div>
                    <p className="mt-2 leading-none text-slate-400">
                        Minimum length is 8 characters.
                    </p>
                </div>
                <Button type="submit" className="self-stretch px-10 py-3 mt-6 w-full text-base font-medium rounded-lg min-h-[48px] text-neutral-950 max-md:px-5 max-md:max-w-full">
                    Sign Up
                </Button>
                <p className="mt-6 text-sm leading-5 text-white max-md:max-w-full">
                    By creating an account, you agree to the{" "}
                    <a href="#" className="text-white underline">
                        Terms of Service
                    </a>
                    . We'll occasionally send you account-related emails.
                </p>
            </form>
            <p className="self-start mt-8 text-sm leading-none text-center text-yellow-300 max-md:max-w-full">
                Already have an account?{" "}
                <a href="/login" className="text-yellow-300">
                    Login
                </a>
            </p>
        </main>
    );
}
