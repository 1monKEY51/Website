import React from 'react';
import { DiPerl, DiAws, DiReact, DiGitBranch, DiRedhat, DiBackbone, DiDatabase, DiRasberryPi, DiTerminal } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills & Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies and fields including: <br/>
      ▼ Cyber Security <br/>
      ▼ Cloud & Network Architecture <br/>
      ▼ Backend developer [Python / Serverless] <br/>
      ▼ Computer Vision <br/>
      ▼ Mecha-tronic Engineering <br/>
    </SectionText>
    <List>
    <ListItem>
        <ListContainer>
          <ListTitle>
            <picture>
              <DiRedhat size="3rem" />
            </picture>
            Offensive Security</ListTitle>
          <ListParagraph>
            ◘ Penetration Testing <br/>
            ◘ Advanced Exploitation <br />
            ◘ Privilege Escalation <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>

        <ListContainer>
          <ListTitle>
            <picture>
              <DiBackbone size="3rem" />
            </picture>
            Cyber Defence</ListTitle>
          <ListParagraph>
          ◘ Threat & Vulnerability Management <br />
          ◘ Threat Emulation <br />
          ◘ Incident Response <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>
            <picture>
              <DiTerminal size="3rem" />
            </picture> 
            SOC</ListTitle>
          <ListParagraph>
          ◘ Security Operations & Monitoring <br />
          ◘ Security Onion <br />
          ◘ SIEM and SOAR <br />
          ◘ IDS / IPS 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>
            <picture>
              <DiReact size="3rem" />
            </picture>
            Front-End</ListTitle>
          <ListParagraph>
          ◘ JavaScript, HTML & CSS <br />
          ◘ React Native, React.js<br />
          ◘ Next.js <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>
            <picture>
              <DiDatabase size="3rem" />
            </picture>
            Back-End</ListTitle>
          <ListParagraph>
          ◘ Python <br />
          ◘ YAML, Cloudformation & Terraform <br />
          ◘ GraphQL & RESTful APIs<br />
          ◘ Postgres <br />
          ◘ C# <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>
            <picture>
              <DiGitBranch size="3rem" />
            </picture>
            DevSecOps</ListTitle>
          <ListParagraph>
          ◘ Checkmarx <br />
          ◘ SonarQube <br />
          ◘ Codeacy <br />
          ◘ Snyk <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>
            <picture>
              <DiAws size="3rem" />
            </picture>
          Cloud & System Administartor</ListTitle>
          <ListParagraph>
          ◘ Cisco & Mikrotik network devices<br />
          ◘ Amazon Web Serives <br />
          ◘ Microsoft: <br />
          └ Azure <br />
          └ Office 365 <br />
          └ Windows 7 - 11 <br />
          └ Server 2012 & R2 / 2016 / 2019 <br />
          ◘ Linux: <br />
          └ Kali <br />
          └ Ubuntu  <br />
          ◘ Google: <br />
          └ Google Cloud <br />
          └ Enterprise Suite   <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>
            <picture>
              <DiRasberryPi size="3rem" />
            </picture>
            Computer Systems Engineering
          </ListTitle>
          <ListParagraph>
          ◘ Arduino & Raspberry <br />
          ◘ Computer Vision <br />
          └ OpenCV <br />
          └ Terraform <br />
          └ Keras <br />
          ◘ Drone Technologies <br />
          └ DroneKit <br />
          └ MAVProxy <br />
          └ MAVLink <br />
          └ ArduPilot <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>
            <picture>
              <DiPerl size="3rem" />
            </picture>
            Web3, Crypto and DAPPs
          </ListTitle>
          <ListParagraph>
          ◘ Solidity <br />
          ◘ Smart Contracts <br />
          ◘ Cryptocurrencies and Tokens <br />
          ◘ Decentralized Votting Systems <br />
          ◘ Decentralized Autonomous Organization <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
