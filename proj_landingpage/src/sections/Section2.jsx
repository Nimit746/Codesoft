import React from 'react'
import Card from '../components/Card';
import Animation from '../components/Animation';

const Section2 = () => {
    return (
        <section className="w-[70%] mx-auto my-20 ">
            <Animation entry="fadeSlideInLeft" delay={0} exit="fadeSlideOutRight">
                <h1 className="my-10 text-white font-bold text-3xl">
                    Featured Models
                </h1>
            </Animation>

            <div className="gap-10 flex">
                <Animation entry="slideUp" delay={0} exit="slideDown">
                    <Card
                        title="Model X"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuC7DCQ5CGhlSd2mhUQrJsD97rXH0YE1X9T893FVF-kA798ELv155D1-CqKnuvp37BFndhpH9WoX0tNagnHgxOV7FNk0a459Hqmu2Kfp6p2CPQBD3wbp1fNJWEWP0B8R55LL_Bb3xSLQ3CHYYm1zIHurTnFzmjOFIsoafsdxbmTIMoy_97bdEo8pSUbSMrROIBlTwjBHGo1je_6EiHRJz1Me-ty2RZl0-WgGqY5CqBOJ5aV0TQapMVaNmodvQ4xB8bSCBFPrs6w9WUog"
                    />
                </Animation>
                <Animation entry="slideUp" delay={0.1} exit="slideDown">
                    <Card
                        title="Model Y"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuB8kLP2uFZR9ZcCu55aWB6CkzgDsgb_mmJ8fikRHT4BX105jgjvIjedCzRv5wtY1L7ivAoQvJrbvUToeh7mRWxiKx5bw8Atiha4M6gfHt55vdBDMcaWOySYG_1LCkCqax9IlAtT97R3Rc-eb3soL4pbgob7yQqj2gqYVwWrV_PMsUMXifKfe4tSzVzueUunaiyI7iVPSaQaGr9DO-NZkVTJJEeEe0XRd031c4ReNC_KnKH7DJgF77H2afSCdwYxqaRgpYAWD6dlPT6p"
                    />
                </Animation>
                <Animation entry="slideUp" delay={0.2} exit="slideDown">
                    <Card
                        title="Model Z"
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDV6Cfz51EbRBcCUeo7QIkT5Wal6JY8-fLTfvAg2uFKHyDU7aysdNtaJgTVWjJyEVjAJn-QlGY1-n0ea0rwOg9gn-jv6_Z-q5rmqjBS1rVhKnGW5fRwIIZn4GzkXO3CbsAwLhEtKm1f05Qbr0ICi564_iBXwIVBEEjtG2pPph63JUmIPkbeT1C591RXORqfewhbrHsUrIA8Tzn2xxif4ZO2mGUigGOKKsUuszs78CTRR7H4crTxEH-7f3qmgXrTS0rEsptLBmcjcG52"
                    />
                </Animation>
            </div>
        </section>
    );
}

export default Section2
