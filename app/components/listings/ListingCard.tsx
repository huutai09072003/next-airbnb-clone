'use client'

import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import {format} from 'date-fns'
import Image from "next/image";
import HeartButton from "../HeartButton";
import Button from "../navbar/Button";
import axios from "axios";



interface ListingCardProps{
    data: SafeListing,
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
    actionId ="",
    actionLabel,
    disabled
}) => {
    const router = useRouter();
    const {getByValue} = useCountries();

    const location = getByValue(data?.locationValue);

    
    const handleCancel = useCallback((e: React.MouseEvent<HTMLButtonElement>)=>{
        e.stopPropagation();

        if (disabled) {
            return;
        }

        onAction?.(actionId);
    },[disabled, onAction, actionId])

    const price = useMemo(()=>{
        if (reservation) {
            return reservation.totalPrice
        }

        return data.price
    },[reservation, data])

    const reservationDate = useMemo(()=>{
        if (!reservation) {
            return null
        }
        const start = new Date(reservation.startDate);
        const end = new Date(reservation.endDate);
        
        return `${format(start, 'PP')} - ${format(end, 'PP')}`
    }, [reservation])
    return ( 
        <div 
        className="col-span-1 cursor-pointer group"
        >
            <div className="flex flex-col gap-2 w-full">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden"
                    onClick={()=>{router.push(`/listings/${data.id}`)}}
                >
                    <Image
                    fill
                    alt="Listing"
                    src={data.imageSrc}
                    className="
                    object-cover
                    h-full
                    w-full
                    group-hover:scale-110
                    transition
                    "
                    />
                    <div className="
                    absolute
                    top-3
                    right-3
                    ">
                        <HeartButton
                        currentUser={currentUser}
                        listingId={data.id}
                        />
                    </div>
                </div>
                <div className="font-semibold text-lg">
                    {location?.label}, {location?.region}
                </div>
                <div className="font-light text-neutral-500">
                    {reservationDate || data.category}
                </div>
                <div className="flex flex-row items-center gap-1">
                    <div className="font-semibold">
                        {data.price}
                    </div>
                    {!reservation && (
                        <div className="font-medium">
                            $ /night
                        </div>
                    )}
                </div>
                {onAction && actionLabel && (
                    <Button
                    label={actionLabel}
                    disabled={disabled}
                    small
                    onClick={handleCancel}
                    />
                )}

            </div>
        </div>
    );
}

export default ListingCard;