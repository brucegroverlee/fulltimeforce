import React from 'react';
import { GitPullRequest, GitCommit } from 'react-feather';
import moment from 'moment';
import { CommitInterface } from '../../../interfaces/Commit';

export const CommitCard: React.FunctionComponent<CommitInterface> = (props) => {
  const isPullRequest = props.commit.message.includes('Merge pull request');
  const date = moment(props.commit.committer.date).format('dddd, MMMM Do YYYY, h:mm:ss a');
  const icon = isPullRequest? (<GitPullRequest size={16} />) : (<GitCommit size={16} />);
  return (
    <li>
      <div className={`timeline-icon ${isPullRequest? 'bg-primary':'bg-success'}`}>
        {icon}
      </div>
      <div className="timeline-info">
        <p className="font-weight-bold mb-0">{props.sha}</p>
        <span className="font-small-3">
        {props.commit.message}
        </span>
      </div>
      <small className="text-muted">{date}</small>
    </li>
  )
}