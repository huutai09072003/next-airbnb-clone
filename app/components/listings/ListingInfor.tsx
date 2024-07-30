'use client'

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types"
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";

interface ListingInforProps{
    user: SafeUser;
    category:{
        label: string,
        icon: IconType,
        description: string
    }
    description: string
    roomCount: number
    guestCount: number
    bathroomCount: number
    locationValue: string
}

const ListingInfor:React.FC<ListingInforProps> = ({
    user,
    category,
    description,
    roomCount,
    guestCount,
    bathroomCount,
    locationValue
}) => {
    const {getByValue}= useCountries();
    
    const coordinates = getByValue(locationValue)?.latlng; 
    
    return ( 
        <div className="col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center text-xl font-semibold ">
                    <div>Hosted by {user.name}</div>
                    <Avatar src={user.image}/>
                </div>
                <div className="flex flex-row gap-4 items-center font-light text-neutral-600">
                    <div>
                        {guestCount} guests
                    </div>
                    <div>
                        {roomCount} rooms
                    </div>
                    <div>
                        {bathroomCount} bathrooms
                    </div>
                </div>
            </div>
            <hr/>
            {category && (
                <ListingCategory
                icon={category.icon}
                label={category.label}
                description={category.description}
                />
            )}
        </div>
    );
}

export default ListingInfor;