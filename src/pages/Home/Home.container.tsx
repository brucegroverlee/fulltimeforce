import React from 'react'
import { api } from '../../api';
import { HomeHtml } from './Home.html';
import { CommitInterface } from '../../interfaces/Commit'

interface HomeContainerState {
  commits: CommitInterface[];
}

class HomeContainer extends React.Component<{}, HomeContainerState> {
  state = {
    commits: [],
  };

  async componentDidMount() {
    try {
      const commits = await api.Commits.list({});
      this.setState({
        commits: commits,
      });
    } catch (error) {
      console.error(error.response);
    }
  }

  render() {
    return(
      <HomeHtml {...this.state}/>
    )
  }
}

export default HomeContainer;
