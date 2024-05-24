import { useRouter } from "next/navigation";
import { SafeUser } from "../types"
import useLoginModal from "./useLoginModal";
import React, { useCallback, useMemo } from "react";
import axios from "axios";
import toast from "react-hot-toast";



interface IUseFavorite{
    listingId: string
    currentUser?: SafeUser | undefined;
}

const useFavorite = ({
    listingId,
    currentUser
}: IUseFavorite) =>{
    const router = useRouter();
    const LoginModal = useLoginModal();

    const hasFavorited = useMemo(()=>{
        const list = currentUser?.favoriteId || [];
        return list.includes(listingId);
    }, [currentUser, listingId])

    const toggleFavorite = useCallback(async (
        e: React.MouseEvent<HTMLDivElement>
    )=>{
        e.stopPropagation;

        if (!currentUser) {
            LoginModal.onOpen();
        }
        try {
            let request;

            if (hasFavorited) {
                request = ()=> axios.delete(`/api/favorites/${listingId}`)
            } else {
                request = ()=> axios.post(`/api/favorites/${listingId}`)
            }

            await request();
            router.refresh();
            toast.success("Success!");
        } catch (error) {
            toast.error("Something went wrong.")
        }
    }, [currentUser, hasFavorited, listingId, router, LoginModal])

    return{
        hasFavorited,
        toggleFavorite
    }
}

export default useFavorite;