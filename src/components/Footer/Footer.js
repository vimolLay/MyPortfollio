import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle> Call </LinkTitle>
          <LinkItem href="tel:011-543-927">CAM: 011-543-927 </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle> Email </LinkTitle>
          <LinkItem href="mailto:lay.vimol11@gmail.com"> lay.vimol11@gmail.com </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            A man who never made a mistake never made anything--Albert Einstein
          </Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons href="https://github.com/vimolLay">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/lay-vimol-497571227/">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/vimol.lay/">
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
