import React from 'react';
import { DiFirebase, DiIllustrator, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I have been working as a freelance designer and front-end developer since 2017. 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>
            FrontEnd
          </ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>
            BackEnd
          </ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js and Database
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiIllustrator size="3rem"/>
        <ListContainer>
          <ListTitle>
            UI/UX Designer
          </ListTitle>
          <ListParagraph>
            Experience with <br/>
            Adobe XD,AI and Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
