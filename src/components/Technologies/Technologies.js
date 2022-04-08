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
      ▼ Cloud Architecture <br/>
      ▼ Backend development <br/>
      ▼ Computer Vision <br/>
      ▼ Mechatronic Engineering <br/>
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
            ◘ Exploiting web applications through today’s most common vulnerabilities <br />
            ◘ Understanding Windows active directory and attacking Kerberos <br />
            ◘ Password Cracking <br />
            ◘ Metasploit Framework <br />
            ◘ Post exploitation techniques <br />
            ◘ OWASP Industry standard penetration testing tools [OWASP]<br/>
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
          ◘ Active Reconnaissance & Vulnerability Scanning<br />
            └ Nmap<br />
            └ Burp<br />
            └ OpenVas<br />
            └ Nessus<br />
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
          ◘ Wordpress & Webflow<br />
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
          ◘ SQL, PostgreSQL <br />
          ◘ C# <br />
          ◘ PowerShell & Bash <br />
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
          ◘ Github Actions <br />
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
          └ Arch  <br />
          └ Tails  <br />
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
          ◘ Arduino & Raspberry Pi<br />
          ◘ Computer Vision <br />
          └ OpenCV <br />
          └ Terraform <br />
          └ Keras <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>
            <picture>
              <DiPerl size="3rem" />
            </picture>
            Web3
          </ListTitle>
          <ListParagraph>
          ◘ Solidity <br />
          ◘ Smart Contracts <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
