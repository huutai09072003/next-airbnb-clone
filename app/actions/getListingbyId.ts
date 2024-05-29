import prisma from "@/app/libs/prismadb"
import { create } from "domain";

interface IParams {
    listingId?: string
}

export default async function getListingbyId(params: IParams) {
    try {
        const {listingId} = params

        const listing = await prisma.listing.findUnique({
            where: {
                id: listingId
            }, include:{
                user: true  
            }
        });

        if (!listing) {
            return null;
        }

        return {
            ...listing,
            createdAt: listing.createdAt.toISOString(),
            user: {
                ... listing.user,
                createdAt: listing.user.createdAt.toISOString(),
                updatedAt: listing.user.createdAt.toISOString(),
                emailVerified: listing.user.emailVerified?.toISOString() || null
            }
        }
    } catch (err: any) {
        throw new Error(err)
    }
}