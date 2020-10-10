import React from 'react';
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap';
import { CommitInterface } from '../../../interfaces/Commit';
import { CommitCard } from './CommitCard'

interface CommitsTimelineProps {
  commits: CommitInterface[];
}

const commitsList = (commits: CommitInterface[]) => {
  return commits.map(commit => (
    <CommitCard
      key={commit.sha}
      {...commit}
    />
  ))
}

export const CommitsTimeline: React.FunctionComponent<CommitsTimelineProps> = (props) => {
  const commitCardsList = commitsList(props.commits);
  return(
    <Card>
      <CardHeader>
        <CardTitle>Commits Timeline</CardTitle>
      </CardHeader>
      <CardBody>
        <ul className="activity-timeline timeline-left list-unstyled">
          {commitCardsList}
        </ul>
      </CardBody>
    </Card>
  )
}
