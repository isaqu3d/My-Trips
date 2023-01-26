import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';
import dynamic from 'next/dynamic';

import LinkWrapper from 'components/LinkWrapper';
import { MapProps } from 'components/Map';
import { NextSeo } from 'next-seo';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My trips"
        description="A simple project to show in a map the  places that i went and show more informations and photos when clicked"
        canonical="https://isaque-my-trips.vercel.app"
      />

      <LinkWrapper href="about">
        <InfoOutline size={32} aria-label="Icon About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
