import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const SupportContactContainer = styled.div`
  text-align: center;
  margin-left: auto;
  order: 2;
  color: #9b9898;
`

const SupportTitle = styled.div`
  font-size: .85em;
  text-align: left;
  text-transform: uppercase;
`

const ContactData = styled.div`
`
const ContactAvatar = styled.div`
  display: inline-block;
  width: 2em;
  height: 2em;
  line-height: 2em;
  float: left;
  font-weight: bold;
  background-color: #f9cf03;
  color: #282c34;
  border-radius: 5px;

`

const ContactDetails = styled.div`
  margin: 0 .5em 0 .5em;
  text-align: left;
  &:first-child{
    font-weight: bold;
    color: #000;
  }
  
`
const NameEmailContainer = styled.div`
  display: inline-block;
  margin: 0 0 0 1em;
  font-size: .75em;
`

const EmailContainer = styled.span`
  
`
const PhoneNumberContainer= styled.div`
  display: inline-block;
`


const SupportContact = (props) => {
    const [firstLetters, setFirstLetters] = useState('');
    useEffect(() => {
        let fl = "";
        for (const name of props.supportContact.name.split(" ")) {
            fl += name[0];
        }

        setFirstLetters(fl);
    }, [firstLetters])

    return (
        <SupportContactContainer>
            <SupportTitle>Your Feefo support contact</SupportTitle>
            <ContactData>
                <ContactAvatar>{firstLetters}</ContactAvatar>
                <NameEmailContainer>
                    <ContactDetails>{props?.supportContact?.name}</ContactDetails>
                    <ContactDetails>
                        <EmailContainer><FontAwesomeIcon icon={faEnvelope}/> {props?.supportContact?.email}</EmailContainer>
                        <PhoneNumberContainer>020 3362 4208</PhoneNumberContainer>
                    </ContactDetails>
                </NameEmailContainer>
            </ContactData>
        </SupportContactContainer>
    );
}

export default SupportContact;