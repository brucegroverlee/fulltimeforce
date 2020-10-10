import React from 'react';
import { CommitInterface } from '../../../interfaces/Commit';

export const CommitCard: React.FunctionComponent<CommitInterface> = (props) => {
  return (
    <div>
      <div>{props.sha}</div>
      <div>{props.commit.message}</div>
      <div>{props.commit.committer.date}</div>
    </div>
  )
}