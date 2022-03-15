import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills and Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
    <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Offensive Security</ListTitle>
          <ListParagraph>
            Penetration Testing <br/>
            Advanced Exploitation <br />
            Privilege Escalation <br />
            Sosial Engineering <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cyber Defence</ListTitle>
          <ListParagraph>
            Threat & Vulnerability Management <br />
            Threat Emulation <br />
            Incident Response & Forensics <br />
            Malware Analysis
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>SOC</ListTitle>
          <ListParagraph>
            Security Operations & Monitoring <br />
            Security Onion and CyberEasy <br />
            Zeek Automation <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React Native, React.js<br />
            Next.js <br />
            JavaScript, HTML & CSS <br />
            Tailwind
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Python (Flask & Django) <br />
            C# <br />
            Postgres <br />
            GraphQL & RESTful <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevSecOps</ListTitle>
          <ListParagraph>
            Snyk and Checkmarx <br />
            Secure Code with CI/CD
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            AWS <br />
            Azure <br />
            Serverless Framework: <br />
              ~ CloudFormation <br />
              ~ Terraform
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web3</ListTitle>
          <ListParagraph>
            Solidity and Web3.js <br />
            Etherium, Polygon  Solana <br />
            Zero Knowledge Proof Applications <br />
            Crypto Tokens <br /> 
            Smart Contracts, NFTS & DAO<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Computer Systems Engineering
          </ListTitle>
          <ListParagraph>
            Arduino and Raspberry <br />
            Drone Technologies <br />
            ~ OpenCV <br />
            ~ DroneKit <br />
            ~ MAVProxy <br />
            ~ MAVLink <br />
            ~ ArduPilot <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
