import { useEffect, useState } from "react";
import { getFirestore } from "../firebase";
import { Skill } from "../types/skill";

export const useDevelopmentTechs = () => {
    const [techs, setTechs] = useState<Skill[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        db.collection('development_techs').get().then((querySnapshot) => {
            const data = querySnapshot.docs.map(d => ({ ...d.data(), id: d.id } as Skill));
            setTechs(data);
        }).finally(() => setLoading(false));
    }, [])

    return {
        techs,
        loading
    };
}