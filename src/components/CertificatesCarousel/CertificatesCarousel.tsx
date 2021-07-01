import React from 'react'
import { Carousel } from 'primereact/carousel';
import { useCertificates } from '../../hooks/useCertificates';
import { Certificate } from '../../types/certificate';
import './CertificatesCarousel.scoped.scss';
import LoadingCard from '../LoadingCard.tsx/LoadingCard';

export const CertificatesCarousel = () => {
    const { certificates, loading } = useCertificates();
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    return (
        <section className="card">
            <header className="card-header">
                CERTIFICATES
            </header>
            <article className="card-body">
                {
                    loading
                        ? <LoadingCard />
                        : <Carousel value={certificates} itemTemplate={ItemTemplate} numVisible={4} responsiveOptions={responsiveOptions}></Carousel>

                }
            </article>
        </section >
    )
}


const ItemTemplate = (item: Certificate) => {
    return (
        <article onClick={() => item.url && window.open(item.url, '_blank')} className="card card--cut-bottom-right mx-1 certificate-card">
            <img className="card-img-top" src={item.image} alt="" />
            <div className="card-body">{item.title}</div>
        </article>
    );
}