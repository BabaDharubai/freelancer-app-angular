import { KeycloakConfig } from "keycloak-js";

const keycloakConfig:KeycloakConfig={
    url:'http://localhost:8080',
    realm: "freelancer",
    clientId: "angular"
};

export default keycloakConfig;