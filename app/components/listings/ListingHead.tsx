'use client'

import { getCurrentUser } from "@/app/actions/getCurrentUser";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types"
import React from "react";
import Heading from "../Heading";

interface ListingHeadProps{
    title: string,
    id: string,
    imgSrc: string,
    locationValue: string,
    currentUser: SafeUser | null
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
        </>
    );
}

export default ListingHead;