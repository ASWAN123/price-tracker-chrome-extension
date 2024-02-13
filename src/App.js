import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import { useEffect, useState } from "react";
import Main from "./components/Main";
import { trio } from "ldrs";
import axios from "axios";
import React from "react";


function App() {

    const storedName = localStorage.getItem("savedName");
    const initialDefaultCoin = storedName || "solana";
    const [defaultCoin, setDefaultCoin] = useState(initialDefaultCoin);
    const [response, setResponse] = useState();
    const [isMounted, setIsMounted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fetchError, setFetchError] = useState(false);

    trio.register();

    useEffect(() => {
        setIsMounted(true);

        return () => {
            setIsMounted(false);
        };
    }, []);

    useEffect(() => {
        if (isMounted) {
            setLoading(true);

            const fetchData = async () => {
                try {
                    const response = await axios.get(
                        "https://api.coingecko.com/api/v3/coins/markets",
                        {
                            params: {
                                ids: defaultCoin.toLocaleLowerCase() ,
                                vs_currency: "usd",
                                precision: 4,
                                page: 1,
                                sparkline: true,
                            },
                        }
                    );
                    setResponse(response.data);
                } catch (error) {
                    setFetchError(true);
                }

                setLoading(false);
            };

            // call the function after did mount
            fetchData();
        }
    }, [defaultCoin, isMounted]);






    return (
        <div className="App min-h-[600px] font-mono bg-[#121212]  container mx-auto   relative w-[400px] ">
            <Header />

            <SearchForm setDefaultCoin={setDefaultCoin} />

            {!loading && response?.length === 0 && (
                <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    No result found
                </div>
            )}

            {!loading && fetchError && (
                <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    You've exceeded the Rate Limit
                </div>
            )}

            {!loading && !fetchError && response && response?.length > 0 && (
                <Main response={response} />
            )}

            {loading && (
                <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 ">
                    <l-trio size="40" speed="1.3" color="white"></l-trio>
                </div>
            )}
        </div>
    );
}

export default App;
