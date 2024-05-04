'use client'

import React, { useEffect, useState } from "react";

interface ClientOnlyProps{
    children: React.ReactNode;
}


const ClientOnly: React.FC<ClientOnlyProps> = ({children}) => {
    const [useMounted, setHasMounted] = useState(false);
    useEffect(()=>{
        setHasMounted(true)
        }, [])
        if(!useEffect)
        {
            return null;
        } 
        return(
            <>
                {children}
            </>
        )
}

export default ClientOnly;