import React from 'react';
import { CommitInterface } from '../../../interfaces/Commit';

export const CommitCard: React.FunctionComponent<CommitInterface> = (props) => {
  return (
    <div>{props.sha}</div>
  )
}