import React from 'react';
import styled from 'styled-components';
import {faInfoCircle, faUpload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const TableContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 2px;
`;

const Uploads = styled.span`
  font-weight: 600;
  color: #606060;
`;

const SalesTitle = styled.span`
  padding: 0 0 0 .5em;
`;

const InfoIconContainer= styled.div`
  margin-left: auto;
  order: 2;
`;

const TableHeader = styled.div`
  height: 4em;
  border-bottom: 1px solid #f2f2f2;
  padding: 0.75em;
`;

const HeaderHeader = styled.div`
  display: flex;
`;

const HeaderFooter = styled.div`
  color: #AFAFAF;
  margin-top: 5%;
  font-size: .75em;
  text-align: left;
`;

const TableFooter = styled.div`
  height: 5em;
  display: flex;
`;

const TableCell = styled.div`
  padding: 1em 0 0 .75em;
  width: 50%;
  text-align: left;

  :first-child {
    border-right: 1px solid #f2f2f2;
  }
`;

const PercentageContainer = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: #22ab55;
`;

const TableBodyTextContainer = styled.span`
  text-transform: uppercase;
  color: #9b9898;
  font-weight: bold;
  font-size: .65em;
`;

const SalesOverview = (props) => {
    console.log(props)
    return (
        <TableContainer>
            <TableHeader>
                <HeaderHeader><FontAwesomeIcon color={"#3eb1eb"} icon={faUpload} /><SalesTitle>Sales</SalesTitle><InfoIconContainer><FontAwesomeIcon color={"#bfbbbb"} size={"1x"} icon={faInfoCircle} /></InfoIconContainer></HeaderHeader>
                <HeaderFooter>You
                    had <Uploads>{props?.salesOverview.uploads} uploads</Uploads> and <Uploads>{props?.salesOverview.linesAttempted}</Uploads> lines
                    added.</HeaderFooter>
            </TableHeader>
            <TableFooter>
                <TableCell>
                    <PercentageContainer>{props?.salesOverview.successfulUploads}%</PercentageContainer>
                    <TableBodyTextContainer>
                        Upload Success
                    </TableBodyTextContainer>
                </TableCell>
                <TableCell>
                    <PercentageContainer>{props?.salesOverview.linesSaved}%</PercentageContainer>
                    <TableBodyTextContainer>
                        Lines Saved
                    </TableBodyTextContainer>
                </TableCell>
            </TableFooter>
        </TableContainer>
    )
}

export default SalesOverview;