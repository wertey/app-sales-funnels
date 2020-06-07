import * as domains from './domain';

const axios = require('axios');

export default {
  sendEmail(email) {
    const instWithCred = axios.create({
      baseURL: domains.NEWEMAIL,
    });
    return instWithCred.post('newEmail', { email });
  },
};
