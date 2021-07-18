import { useEffect, useRef, useState } from "react"
import { getFirestore } from "../firebase";
import { Job } from "../types/job";

export const useJobs = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const db = getFirestore();
    const isMounted = useRef(true);

    useEffect(() => {
        setIsLoading(true);
        db.collection('jobs').get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map( d => ({...d.data(), id: d.id} as Job));
                isMounted.current && setJobs(data);
            })
            .catch(() => setError(true))
            .finally(() => setIsLoading(false));
        return () => {
            isMounted.current = false;
        }
    }, [db]);

    return {
        jobs,
        isLoading,
        error
    };
}