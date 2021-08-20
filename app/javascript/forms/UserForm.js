import { pick } from 'ramda';

export default {
  defaultAttributes(attributes) {
    return {
      name: '',
      email: '',
      ...attributes,
    };
  },

  attributesToSubmit(user) {
    const pertmittedKeys = ['id', 'name', 'email'];

    return {
      ...pick(pertmittedKeys, user),
    };
  },
};
