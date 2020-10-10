import React from 'react';
import { CommitInterface } from '../../interfaces/Commit'
import { CommitCard } from './components/CommitCard';

interface HomeHtmlProps {
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

export const HomeHtml: React.FunctionComponent<HomeHtmlProps> = (props) => {
  const commitCardsList = commitsList(props.commits);
  return(
    <div>
      <div>
        HomeHtml
      </div>
      <div>
        {commitCardsList}
      </div>
    </div>
  )
}