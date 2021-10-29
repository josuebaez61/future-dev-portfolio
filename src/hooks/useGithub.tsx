import { useEffect, useRef, useState } from "react";
import { GHAccountData } from '../types/github';
import Axios from 'axios';

export const useGithub = () => {
    const [accountData, setAccountData] = useState<GHAccountData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);
    const baseUrl = "https://api.github.com";
    const userAccount = "josuebaez61";
    const isMounted = useRef(true);

    useEffect(() => {
        setIsLoading(true)
        Axios.get(baseUrl + '/users/' + userAccount)
            .then((res) => {
                isMounted.current && setAccountData((res.data as GHAccountData));
            })
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false))
        return () => {
            isMounted.current = false;
        }
    }, [])

    return {
        accountData,
        isLoading,
        error
    }
}