const url = '/my-resume';

export const environment = {
  baseHref: url,
  baseUrl: `${window.location.origin}${url}`,
  production: true,
};
