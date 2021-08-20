import routes from 'routes';
import FetchHelper from 'utils/fetchHelper';

export default {
  index(params) {
    const path = routes.apiV1AffiliateProgramsPath();
    return FetchHelper.get(path, params);
  },
};
