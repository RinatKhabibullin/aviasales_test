import { pick, propOr } from 'ramda';

export default {
  defaultAttributes(attributes) {
    return {
      ...attributes,
    };
  },

  attributesToSubmit(subscription) {
    const pertmittedKeys = ['id'];

    return {
      ...pick(pertmittedKeys, subscription),
      userId: propOr(null, 'id', subscription.user),
      affiliateProgramId: propOr(null, 'id', subscription.affiliateProgram),
    };
  },
};
