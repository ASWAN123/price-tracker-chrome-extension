import React, { useEffect, useState } from "react";
import { LinkIcon, SavedIcon } from "./Icons";

const Main = ({ response }) => {
    const storedName = localStorage.getItem("savedName");
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        if (
            storedName?.toLocaleLowerCase() !==
            response[0]?.name.toLocaleLowerCase()
        ) {
            localStorage.setItem("savedName", response[0]?.name);
            setSaved(true);
        } else {
            localStorage.removeItem("savedName");
            setSaved(false);
        }
    };

    // check for if  the  query  is  the  same  in localhsot
    useEffect(() => {
        if (
            storedName?.toLocaleLowerCase() ===
            response[0]?.name.toLocaleLowerCase()
        ) {
            setSaved(true);
        } else {
            setSaved(false);
        }
    }, [response , storedName]);

    return (
        <main className="p-4 flex gap-8 flex-col  ">
            <div className="flex items-center   gap-2 mt-2">
                <img
                    className="w-10  h-10 rounded-full "
                    src={response[0].image}
                    alt=""
                />
                <p className="text-[24px]">
                    {response[0].name}{" "}
                    <span className=" tracking-wider">
                        {response[0].symbol}
                    </span>
                </p>
                <LinkIcon className="w-6 h-6 text-blue-500 " />
                <button onClick={handleSave} className="ml-auto">
                    <SavedIcon
                        className={
                            saved
                                ? "w-6 h-6 text-orange-400 cursor-pointer "
                                : "cursor-pointer w-6 h-6 text-white "
                        }
                    />
                </button>
            </div>

            <div className=" flex flex-col gap-4  items-center relative select-none">
                {/* <img
                    src={response.data.coins[0].data.sparkline}
                    className="h-[120px] w-[350px] opacity-20 absolute -z-0 "
                    alt=""
                /> */}
                {/* generate  svg  with  chart */}
                <p>Price</p>

                <p
                    id="price"
                    className="text-3xl flex flex-col items-center gap-1 "
                >
                    
                    $ {response[0].current_price}

                </p>
            </div>

            <div>
                <span className="mr-auto ">
                    Rank{" "}
                    <span className="bg-green-600 text-white rounded-md px-1">
                        #{response[0].market_cap_rank}
                    </span>
                </span>
            </div>

            <div className="flex flex-col gap-2 mt-4">
                <div className="flex  flex-col  justify-between gap-2">
                    <p>Market Cap </p>{" "}
                    <span className="ml-auto">
                        
                        {
                            (response[0].market_cap / 100).toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            })
                        }
                    </span>{" "}
                </div>
                <div className="flex flex-col justify-between gap-2">
                    <p>24H Market Cap</p>{" "}
                    <span className="ml-auto">
                        
                        {
                            (response[0].market_cap_change_24h / 100).toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            })
                        }
                    </span>
                </div>
                <div className="flex flex-col justify-between gap-2">
                    <p>24 Hour Trading Vol </p>{" "}
                    <span className="ml-auto">
                        
                        {
                            (response[0].total_volume / 100).toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            })
                        }
                    </span>
                </div>
            </div>
        </main>
    );
};

export default Main;
