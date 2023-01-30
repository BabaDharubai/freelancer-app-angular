import keycloak from "./keycloak.config"
export const environment = {
  production: true,
  keycloak,
  getUrl: 'http://localhost:9000/freelancer-retrieve-api/',
  cudUrl: 'http://localhost:9000/freelancer-cud-api/'
};
