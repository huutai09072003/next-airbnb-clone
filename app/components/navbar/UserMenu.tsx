'use client';

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import RegisterModal from '../modals/RegisterModal';
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

interface UserMenuProps{
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [IsOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() =>{
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className="relative">
            <div className="
                flex
                flex-row
                items-center
                gap-3
            "> 
                <div 
                onClick={() => {}}
                className="
                    hidden
                    md:block
                    font-semibold
                    text-sm
                    py-3
                    px-4
                    rounded-full
                    hover:bg-neutral-100
                    transition
                    cursor-pointer  
                "
                >
                    Airbnb your home
                </div>
                <div
                onClick={toggleOpen}
                className="
                    p-4
                    md:py-1
                    md:px-2
                    border-neutral-200
                    border-[1px]
                    flex
                    flex-row
                    items-center
                    gap-3
                    rounded-full
                    cursor-pointer
                    hover:shadow-md
                    transition
                ">
                    <AiOutlineMenu/>
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image}/>
                    </div>
                </div>
            </div>
            {IsOpen && (
                <div
                className="
                    absolute
                    rounded-xl
                    shadow-md
                    w-[40vw]
                    md:w-3/4
                    bg-white
                    overflow-hidden
                    right-0
                    top-12
                    text-sm
                ">
                    <div 
                    className="
                        flex
                        flex-col
                        cursor-pointer 
                    ">
                        {currentUser ? (
                        <>
                            <MenuItem 
                            onclick={()=>{}}
                            label="My Trips"/>
                            <MenuItem 
                            onclick={()=>{}}
                            label="My Favourites"/>
                            <MenuItem 
                            onclick={()=>{}}
                            label="My Reservations"/>
                            <MenuItem 
                            onclick={()=>{}}
                            label="My Properties"/>
                            <MenuItem 
                            onclick={()=>{}}
                            label="Airbnb my home"/>
                            <MenuItem 
                            onclick={()=>signOut()}
                            label="Log out"/>
                        </>
                        ) : (
                            <>
                            <MenuItem 
                            onclick={loginModal.onOpen}
                            label="Login"/>
                            <MenuItem 
                            onclick={registerModal.onOpen}
                            label="Sigh up"/>
                        </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserMenu;