import axios from 'axios';
import { getAuthToken } from '@/plugins/auth';

axios.defaults.baseURL = 'https://test-api.updivision.work/api';

export function authHeader() {
  return {
    Authorization: `Bearer ${getAuthToken()}`
  }
}
