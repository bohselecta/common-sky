'use client';

import Image from "next/image";

export default function DynamicTextGraphic({ locale }: { locale: string }) {
  const getTextGraphic = () => {
    switch (locale) {
      case 'ar':
        return '/the-common-sky-text-ar.png';
      case 'he':
        return '/the-common-sky-text-he.png';
      default:
        return '/the-common-sky-text-eng.png';
    }
  };

  const getAltText = () => {
    switch (locale) {
      case 'ar':
        return 'السماء المشتركة';
      case 'he':
        return 'השמים המשותפים';
      default:
        return 'The Common Sky';
    }
  };

  return (
    <Image 
      src={getTextGraphic()} 
      alt={getAltText()} 
      width={200} 
      height={40} 
      priority 
    />
  );
}
