import { o } from 'o.js';
import useSWR from 'swr'
import { set as _set, camelCase, startCase, kebabCase } from 'lodash';


const kebabCaseToPascalCase = (str) => startCase(camelCase(str)).replace(/ /g, '');

// This function provides api function to map route data to api queries and can serve as a good convention
function routeToODataQuery(explicitRouteToAPIMap){
  let [entity, id] = location.pathname.split('/').slice(1);
  entity = explicitRouteToAPIMap?.Entity ?? kebabCaseToPascalCase(entity);
  ;
  id = explicitRouteToAPIMap?.Id ?? id;
  return {entity,id};
}

// handler
const cmAPI = o('/demo-api/');

_set(window, '__appDebugger.api.cmAPI', cmAPI);

async function fetcher(url) {
  let currentLocation = location.href;
  console.log({currentLocation});
  //console.log('cmFetch-req',...arguments);
  const res = await cmAPI.get(url).query();
  //console.log('cmFetch-res',...arguments, {res});
  return res
}

_set(window.demoAPI, 'api.cmFetch', fetcher);

export function useApiByRoute(){
  const explicitRouteToAPIMap = {}; // all non-conventional mappings go here
  const {entity,id} = routeToODataQuery(explicitRouteToAPIMap)
  let o = useSWR(entity+(id ? `('${id}')`: ''), fetcher)
  console.log('useApiByRoute', entity+(id ? `('${id}')`: ''))
  return o;
}