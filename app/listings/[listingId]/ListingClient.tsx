'use client'

import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfor from "@/app/components/listings/ListingInfor";
import { categories } from "@/app/components/navbar/Categories";
import { SafeListing, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";
import { useMemo } from "react";

interface ListingClientProps{
    reservation?: Reservation
    listing: SafeListing & {
        user: SafeUser  
    };
    currentUser: SafeUser | undefined
}

const ListingClient:React.FC<ListingClientProps> = ({
    listing,
    currentUser
}) => {
    const category = useMemo(()=>{
        return categories.find((item)=>
            item.label == listing.category
        );
    }, [listing.category])
    return ( 
        <Container>
            <div className="max-w-screen-lg max-auto">
                <div className="flex flex-col gap-6">
                    <ListingHead
                    title={listing.title}
                    locationValue={listing.locationValue}
                    currentUser={currentUser}
                    id={listing.id}
                    imgSrc={listing.imageSrc}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                    <ListingInfor
                        user={listing.user}
                        category={category}
                        description={listing.description}
                        roomCount={listing.roomCount}
                        guestCount={listing.guestCount}
                        bathroomCount={listing.bathroomCount}
                        locationValue={listing.locationValue}
                    />
                </div>
            </div>
        </Container>
    );
}

export default ListingClient;