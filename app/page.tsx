import Image from "next/image";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import getListings from "./actions/getListings";
import { getCurrentUser } from "./actions/getCurrentUser";
import ListingCard from "./components/listings/ListingCard";

export default async function Home() {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (listings.length == 0) {
    return(
      <ClientOnly>
        <Container>
          <EmptyState showReset/>
        </Container>
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <Container>
        <div className="
        pt-24
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
        ">
          {listings.map((lisiting: any)=>{
            return (
                <ListingCard
                currentUser={currentUser}
                key={lisiting.id}
                data={lisiting}
                />
            )
          })}
        </div>
      </Container>
    </ClientOnly>
  );
}
