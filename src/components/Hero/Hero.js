import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lay Vimol is an experienced software developer, software architect, and content creator. He has a significant amount of experience in software development, and that is shown on his portfolio page.
      </SectionText>
      <Button onclick={()=> window.location = 'https://www.instagram.com/vimol.lay/'}> Learn More </Button>
    </LeftSection>
  </section>
);

export default Hero;