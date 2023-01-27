import * as S from './styles';

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import LinkWrapper from 'components/LinkWrapper';
import { NextSeo } from 'next-seo';

export type PageTemplateProps = {
  heading: string;
  body: string;
};

const PagesTemplate = ({ heading, body }: PageTemplateProps) => {
  return (
    <>
      <NextSeo
        title="About - My trips "
        description="about the site"
        canonical="https://isaque-my-trips.vercel.app"
      />

      <S.Content>
        <LinkWrapper href="/">
          <CloseOutline size={32} />
        </LinkWrapper>

        <S.Heading>{heading}</S.Heading>

        <S.Body>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </S.Body>
      </S.Content>
    </>
  );
};

export default PagesTemplate;
