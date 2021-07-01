import { useEffect, useState } from "react";
import { getFirestore } from "../firebase";
import { Skill } from "../types/skill";

export const useSkills = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        db.collection('skills').get().then((querySnapshot) => {
            const data = querySnapshot.docs.map(d => ({ ...d.data(), id: d.id } as Skill));
            setSkills(data);
        }).finally(() => setLoading(false));
    }, [])

    return {
        skills,
        loading
    };
}