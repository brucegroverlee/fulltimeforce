import axios from 'axios';
import {
  GITHUB_API_ENDPOINT,
  GITHUB_USER,
  GITHUB_PROJECT
} from '../configs/constants';

export class HttpClient {

  static async get(resource: string, payload: any): Promise<any> {
    try {
      const query = Object
        .keys(payload)
        .map(key => `${key}=${payload[key]}`)
        .join(",");
      const result = await axios({
        method: 'get',
        url: `${GITHUB_API_ENDPOINT}/${GITHUB_USER}/${GITHUB_PROJECT}/${resource}?${query}`,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return result.data;
    } catch (error) {
      throw error
    }
  }
}