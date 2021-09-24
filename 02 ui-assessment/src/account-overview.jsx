import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHardHat} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import './account-overview.css';
import SalesOverview from "./components/SalesOverview";
import SupportContact from "./components/SupportContact";

const AccountOverviewContainer = styled.div`
  margin-left: 35%;
  width: 30%;
`;

const AccountOverviewHeader = styled.div`
  display: flex;
  margin-bottom: 1em;
`;

const AccountOverviewTitle = styled.div`
  text-align: center;
  width: 10em;
  height: 3em;
  line-height: 3em;
`;

export const AccountOverview = ({data}) => {
    console.log(data);

    return (
        <div className="AccountOverview">
            <FontAwesomeIcon icon={faHardHat}/>
            Build your components here

            <AccountOverviewContainer>
                <AccountOverviewHeader>
                    <AccountOverviewTitle>Account Overview</AccountOverviewTitle>
                    <SupportContact supportContact={data?.supportContact}/>
                </AccountOverviewHeader>
                <SalesOverview salesOverview={data?.salesOverview}/>
            </AccountOverviewContainer>
        </div>
    )
}

export default AccountOverview;