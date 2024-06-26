'use client';

import { BiSearch } from "react-icons/bi";

const Search = () => {
    return ( 
        <div className="
        border-[1px]
        shadow-sm
        hover:shadow-md
        md:w-auto
        w-full
        rounded-full
        py-2
        transition
        cursor-pointer
        ">
            <div className="
                justify-between
                flex
                flex-row
                items-center
            ">
                <div
                className="
                    text-sm
                    font-semibold
                    px-6
                    text-center
                ">
                Anywhere
                </div>
                <div className="
                    hidden
                    sm:block
                    text-sm
                    font-semibold
                    px-6
                    border-x-[1px]
                    flex-1
                ">
                Anyweek
                </div>
                <div
                className="
                    text-sm
                    pl-6
                    pr-2
                    text-gray-600
                    flex
                    flex-row
                    items-center
                    gap-3
                ">
                    <div
                    className="hidden sm:block">
                        Add Guests
                    </div>
                    <div
                    className="
                        p-2
                        bg-rose-500
                        rounded-full
                        text-white">
                        <BiSearch size={18}></BiSearch>

                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Search;