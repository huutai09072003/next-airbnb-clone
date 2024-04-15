'use client'

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../navbar/Button";
import { FaGithub } from "react-icons/fa";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signIn } from "next-auth/react";


const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
        } = useForm<FieldValues>({
            defaultValues: {
                name: '',
                email: '',
                password: ''
            }
        })
        
        const onSubmit: SubmitHandler<FieldValues> = (data)=> {
            setIsLoading(true);
            
            axios.post("/api/register", data)
            .then(()=>{
                registerModal.onClose();
            })
            .catch((error)=>{
                toast.error("Fuck");
                
            })
            .finally(()=>{
                setIsLoading(false);
            })
        }


        const bodyContent = (
            <div className="
                flex
                flex-col
                gap-4
            ">
                <Heading title="Welcome to AirBnb" subtitle="Create an Account" />
                <Input 
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required/>
                <Input 
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required/>
                <Input 
                id="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required 
                type="password"/>
            </div>
        ) 

        const Footer = (
            <div className="
                flex
                flex-col
                gap-4
                mt-3
            ">
                <hr />
                <Button 
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={()=>{}}>
                </Button>
                <Button 
                outline
                label="Continue with Github"
                icon={FaGithub}
                onClick={()=>signIn('github')}>
                </Button>
                <div className="
                    text-neutral-400
                    text-center
                    mt-4

                    font-light
                ">
                    <div 
                    className="
                        flex
                        flex-row
                        items-center
                        gap-2
                        pt-3
                    ">
                        <div>
                            Already have Account?
                        </div>
                        <div 
                        onClick={() => {
                            registerModal.onClose?.();
                            loginModal.onOpen?.();
                        }}
                        className="
                            text-black
                            hover:underline
                            cursor-pointer
                        ">
                            Log in!
                        </div>
                    </div>
                </div>
            </div>
        )

        return (
            <Modal
                disabled={isLoading}
                isOpen={registerModal.isOpen}
                onSubmit={handleSubmit(onSubmit)}
                title="Register"
                onClose={registerModal.onClose}
                actionLabel="Continue"
                body={bodyContent}
                footer={Footer}
            />
    );
    
}
export default RegisterModal;