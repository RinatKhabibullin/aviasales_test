import routes from 'routes';
import FetchHelper from 'utils/fetchHelper';

export default {
  create(subscription = {}) {
    const path = routes.apiV1SubscriptionsPath();
    return FetchHelper.post(path, { subscription });
  },

  index(params) {
    const path = routes.apiV1SubscriptionsPath();
    return FetchHelper.get(path, params);
  },
};
