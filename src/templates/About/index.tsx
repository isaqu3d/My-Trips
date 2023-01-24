import * as S from './styles';

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import LinkWrapper from 'components/LinkWrapper';

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>About</S.Heading>

      <S.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          optio? Vero soluta sunt laudantium! Distinctio ratione nihil quae,
          voluptas molestiae consequuntur. Ratione in nemo fugit consequatur,
          deserunt ab quo tenetur.
        </p>
      </S.Body>
    </S.Content>
  );
};

export default AboutTemplate;
