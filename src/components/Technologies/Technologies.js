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
      ▼ Backend Development <br/>
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
            ◘ Nmap <br />
            ◘ Burp <br />
            ◘ Nessus <br />
            ◘ OpenVas<br />
            ◘ Metasploit Framework <br />
            ◘ Bloodhound <br />
            ◘ Home made and other tools
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
          ◘ Security Operations & Monitoring <br />
          ◘ Threat & Vulnerability Management <br />
          ◘ SIEM and SOAR <br />
          ◘ IDS / IPS <br />
          ◘ Password Analysis <br />
          ◘ Simualted phishing campgains
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>
            <picture>
              <DiTerminal size="3rem" />
            </picture> 
            GRC</ListTitle>
          <ListParagraph>
          ◘ Governance <br />
          └ Ensure the efficient use of IT <br />
          ◘ Risk management <br />
          └ Qualitative Risk Assessment<br />
          ◘ Compliance <br />
          └ PCI-DSS <br />
          └ CIS <br />
          ◘ Standards <br />
          └ OWASP <br />
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
          ◘ SCA Snyk <br />
          ◘ SonarQube <br />
          ◘ Checkmarx <br />
          ◘ Github Actions <br />
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
          ◘ AWS <br />
          ◘ Microsoft: <br />
          └ Azure <br />
          └ Office 365 <br />
          └ Windows 7 - 11 <br />
          └ Server 2012&R2/2016/2019 <br />
          ◘ Linux <br />
          ◘ Cisco & Mikrotik network devices<br />
          ◘ Google workspaces <br />
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
          ◘ Crypto Tokens
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
