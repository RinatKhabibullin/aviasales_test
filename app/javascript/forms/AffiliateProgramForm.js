import { pick } from 'ramda';

export default {
  defaultAttributes(attributes) {
    return {
      title: '',
      description: '',
      ...attributes,
    };
  },

  attributesToSubmit(affiliateProgram) {
    const pertmittedKeys = ['id', 'title', 'description'];

    return {
      ...pick(pertmittedKeys, affiliateProgram),
    };
  },
};
