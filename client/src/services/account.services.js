import { host } from '../config/constants';
import { _fetch, setHeaders} from './http.service'

const getMetaAccount = async () => {
  const url = `${host}/meta_accounts`;
  const header = await setHeaders();
  return _fetch(url,header);
}

export {
  getMetaAccount,
};

