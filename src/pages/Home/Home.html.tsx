import React from 'react';
import { Row, Col } from "reactstrap";
import { CommitInterface } from '../../interfaces/Commit';
import { Title } from '../../components/Title/Title';
import { CommitsTimeline } from './components/CommitsTimeline';

interface HomeHtmlProps {
  commits: CommitInterface[];
}

export const HomeHtml: React.FunctionComponent<HomeHtmlProps> = (props) => {
  return(
    <div className="app-content content">
      <div className="content-wrapper">
        <Title title="Fulltimeforce Home"/>
        <Row className="match-height">
          <Col lg="6" md="12">
            <CommitsTimeline {...props} />
          </Col>
        </Row>
      </div>
    </div>
  )
}