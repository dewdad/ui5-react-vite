import { o } from 'o.js';
import useSWR from 'swr'
import { set as _set } from 'lodash';


const PEOPLE_PATH = 'People';
// handler
const cmAPI = o('/demo-api/');

_set(window, 'appDemo.api.cmAPI', cmAPI);


async function fetcher(url) {
  //console.log('cmFetch-req',...arguments);
  const res = await cmAPI.get(url).query();
  //console.log('cmFetch-res',...arguments, {res});
  return res
}

_set(window.demoAPI, 'api.cmFetch', fetcher);

export function usePeople(query) {
  let o = useSWR(PEOPLE_PATH, fetcher)
  console.log('usePeople', query, o)
  return o;
}
