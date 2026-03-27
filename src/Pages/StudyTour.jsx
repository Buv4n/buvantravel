import React from 'react'
import { StudyTourHero } from "../StudyTourComp/StudyTourHero"
import { WhatWeOffer } from "../StudyTourComp/WhatWeOffer"
import { Destinations } from "../StudyTourComp/Destination"
import { IdealFor } from "../StudyTourComp/IdealFor"
import { StudyTourCTA } from "../StudyTourComp/StudyTourCTA"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Instagram from "../ContactComp/Insta";
import { SEO } from "../SEO";


export const StudyTour = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.scrollTo) return;

    const scrollToId = location.state.scrollTo;

    const scroll = () => {
      const el = document.getElementById(scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState({}, document.title); // clear state
      }
    };

    // retry until element exists (fixes async render issues)
    let attempts = 0;
    const interval = setInterval(() => {
      if (document.getElementById(scrollToId) || attempts > 10) {
        scroll();
        clearInterval(interval);
      }
      attempts++;
    }, 50);

    return () => clearInterval(interval);
  }, [location]);

  return (
    <>
      <SEO title="Study Tours | Buvan Travel Malaysia" description="Buvan Travel offers unforgettable study tours to South India for Malaysian and Singaporean students. Explore culture, history, and education with us." />
      <div id="study-tours">
        <StudyTourHero />
        <WhatWeOffer />
        <Destinations />
        <IdealFor />
        <Instagram />
        <StudyTourCTA />
      </div>
    </>
  )
}
