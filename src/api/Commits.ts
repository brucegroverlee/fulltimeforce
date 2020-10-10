import { HttpClient } from './HttpClient';
import { CommitInterface } from '../interfaces/Commit';

interface CommitListQueryInterface {
  sha?: string;
  path?: string;
  author?: string;
  since?:	string;
  until?: string;
  per_page?: number;
  page?: number;
}

export class Commits extends HttpClient{
  private static resource = 'commits';

  static async list(query: CommitListQueryInterface): Promise<CommitInterface[]> {
    try {
      const result = await this.get(this.resource, query) as CommitInterface[];
      return result;
    } catch (error) {
      throw error;
    }
  }
}