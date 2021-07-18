import { useEffect, useRef, useState } from "react"
import { getFirestore } from "../firebase";
import { Project } from "../types/project";

export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const db = getFirestore();
    const isMounted = useRef(true);

    useEffect(() => {
        setIsLoading(true);
        db.collection('projects').get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map( d => ({...d.data(), id: d.id} as Project));
                isMounted.current && setProjects(data);
            })
            .catch(() => setError(true))
            .finally(() => setIsLoading(false));
        return () => {
            isMounted.current = false;
        }
    }, [db]);

    return {
        projects,
        isLoading,
        error
    };
}