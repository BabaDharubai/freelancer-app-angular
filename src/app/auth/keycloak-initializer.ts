import { KeycloakService,KeycloakOptions } from "keycloak-angular";
import { environment } from "../../environments/environment";

export function initializer(keycloak:KeycloakService):()=>Promise<boolean>{
    
    const options:KeycloakOptions={
        config:environment.keycloak,
        loadUserProfileAtStartUp:true,
        initOptions:{
            onLoad:'check-sso',
            //onLoad:'login-required',
            checkLoginIframe:false
        },
        bearerExcludedUrls:[]
    };
    return ()=>{
        return keycloak.init(options);
    }
}