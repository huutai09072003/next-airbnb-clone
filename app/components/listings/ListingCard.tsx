'use client'

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";



interface ListingCardProps{
    data?: Listing,
    reservation?: Reservation,
    currentUser?: SafeUser,
    onAction?: (id: string)=> void,
    actionId?: string,
    actionLabel?: string,
    disabled?: boolean
}

const ListingCard:React.FC<ListingCardProps> = ({
    data,
    reservation,
    currentUser,
    onAction,
    actionId,
    actionLabel,
    disabled
}) => {
    const router = useRouter();
    const {getByValue} = useCountries()
    return ( 
        <div>

        </div>
    );
}

export default ListingCard;