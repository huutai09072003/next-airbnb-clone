'use client'

import React from "react";
import Heading from "./Heading";
import { useRouter } from "next/navigation";
import Button from "./navbar/Button";

interface EmptyStateProps{
    title?: string,
    subtitle?: string,
    showReset?: boolean
}


const EmptyState:React.FC<EmptyStateProps> = ({
    title="No exact matches",
    subtitle="Try changing or removing some of filters",
    showReset
}) => {
    const router = useRouter();
    return ( 
        <div className="
        h-[60vh]
        flex
        flex-col
        gap-2
        justify-center
        items-center
        ">
            <Heading
            title={title}
            subtitle={subtitle}
            center
            />
            <div className="mt-4 w-48">
                {showReset && (
                    <Button
                    onClick={()=>{router.push('/')}}
                    outline
                    label="Remove all filters"
                    />
                )}
            </div>
        </div>
    );
}

export default EmptyState;