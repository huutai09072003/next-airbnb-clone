import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getListingbyId from "@/app/actions/getListingbyId";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import { Listing } from '@prisma/client';
import ListingClient from "./ListingClient";

interface IParams{
    listingId?: string
}

const LisitngPage = async ({params} : {params: IParams}) => {
    const listing = await getListingbyId(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return(
        <ClientOnly>
            <EmptyState/>
        </ClientOnly>
        )
    }

    return ( 
        <ClientOnly>
            <ListingClient
            listing={listing}
            currentUser={currentUser}
            />
        </ClientOnly>
    );
}

export default LisitngPage;