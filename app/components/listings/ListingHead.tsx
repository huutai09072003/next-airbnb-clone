'use client'

import { getCurrentUser } from "@/app/actions/getCurrentUser";
import Image from "next/image";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types"
import React from "react";
import Heading from "../Heading";
import HeartButton from "../HeartButton";

interface ListingHeadProps{
    title: string,
    id: string,
    imgSrc: string,
    locationValue: string,
    currentUser: SafeUser | undefined
}

const ListingHead:React.FC<ListingHeadProps> = ({
    title,
    id,
    imgSrc,
    locationValue,
    currentUser
}) => {
    // const user = await getCurrentUser();

    const {getByValue} = useCountries();

    const location = getByValue(locationValue);
    return ( 
        <>
            <Heading
                title={title}
                subtitle={`${location?.region}, ${location?.label}`}
            />

            <div className="w-full h-[60vh] relative overflow-hidden rounded-xl">
                <Image 
                src={imgSrc} 
                alt="Image" 
                fill
                className="object-cover w-full" />
                <div className="absolute top-5 right-5">
                    <HeartButton 
                    listingId={id}
                    currentUser={currentUser}/>
                </div>
            </div>
        </>
    );
}

export default ListingHead;