import React from 'react';
import { Check } from 'react-feather';
import { CommitInterface } from '../../../interfaces/Commit';

export const CommitCard: React.FunctionComponent<CommitInterface> = (props) => {
  return (
    <li>
      <div className="timeline-icon bg-primary">
        <Check size={16} />
      </div>
      <div className="timeline-info">
        <p className="font-weight-bold mb-0">{props.sha}</p>
        <span className="font-small-3">
        {props.commit.message}
        </span>
      </div>
      <small className="text-muted">{props.commit.committer.date}</small>
    </li>
  )
}