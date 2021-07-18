import { useEffect, useState } from "react"
import { getFirestore } from "../firebase";
import { Certificate } from "../types/certificate";

export const useCertificates = () => {
    const [certificates, setCertificates] = useState<Certificate[]>([]);
    const [loading, setLoading] = useState(false);
    const db = getFirestore();
    useEffect(() => {
        setLoading(true);
        db.collection('certificates').get().then((querySnapshot) => {
            setCertificates(querySnapshot.docs.map(d => ({ ...d.data(), id: d.id } as Certificate)))
        }).finally(() => setLoading(false));
    }, [db]);
    return {
        loading,
        certificates
    };
}