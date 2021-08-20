import routes from 'routes';
import FetchHelper from 'utils/fetchHelper';

export default {
  create(user = {}) {
    const path = routes.apiV1UsersPath();
    return FetchHelper.post(path, { user });
  },

  show(id) {
    const path = routes.apiV1UserPath(id);
    return FetchHelper.get(path);
  },
};
