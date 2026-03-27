import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

export const SEO = ({ title, description }) => {
  return (
    <HelmetProvider>
      <title>{title}</title>
      <meta name="description" content={description} />
    </HelmetProvider>
  );
};