import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import { error } from "console";
import prisma from "@/app/libs/prismadb"
import { json } from "stream/consumers";


interface IParams {
    listingId?: string;
}

export async function POST(
    request: Request,
    { params}: {params : IParams}
)  { 
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        NextResponse.error();
    }

    const { listingId } = params;

    if (!listingId || typeof listingId != "string") {
        throw new Error("Invalid ID");
    }

    let favoriteIds = [ ... (currentUser?.favoriteId || [])]

    favoriteIds.push(listingId);

    const user = await prisma.user.update({
        where: {
            id: currentUser?.id 
        }, data: {
            favoriteId: favoriteIds
        }
        
    });

    return NextResponse.json(user);
};

export async function DELETE(
    request: Request,
    { params}: {params : IParams}
)  { 
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        NextResponse.error();
    }

    const { listingId } = params;

    if (!listingId || typeof listingId != "string") {
        throw new Error("Invalid ID");
    }

    let favoriteIds = [ ... (currentUser?.favoriteId || [])]

    favoriteIds = favoriteIds.filter((id)=> id != listingId)

    const user = await prisma.user.update({
        where: {
            id: currentUser?.id 
        }, data: {
            favoriteId: favoriteIds
        }
        
    });

    return NextResponse.json(user);
};