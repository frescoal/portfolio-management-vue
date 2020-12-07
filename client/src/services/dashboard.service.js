import { host } from '../config/constants';
import { _fetch, setHeaders} from './http.service'

const getKeyNumbers = async () => {
  const url = `${host}/key_numbers`;
  const header = await setHeaders();
  return _fetch(url,header);
}

export const dashboardService = {
  getKeyNumbers,
};

