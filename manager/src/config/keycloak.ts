/**
 * Copyright 2021 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { localStorageKeys } from 'helpers/enums/localStorageKeys';
import Keycloak from 'keycloak-js';

const keycloakConfig: Keycloak.KeycloakConfig = {
  clientId: window.REACT_APP_KEYCLOAK_CLIENT_ID,
  realm: window.REACT_APP_KEYCLOAK_REALM,
  url: window.REACT_APP_KEYCLOAK_BASE_PATH,
};

const idToken = window.localStorage.getItem(localStorageKeys.ID_TOKEN);
const token = window.localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
const refreshToken = window.localStorage.getItem(
  localStorageKeys.REFRESH_TOKEN
);

const keycloakInitOptions: Keycloak.KeycloakInitOptions = {
  enableLogging: true,
  idToken,
  refreshToken,
  token,
};

const keycloakInstance = Keycloak(keycloakConfig);

export { keycloakInstance, keycloakConfig, keycloakInitOptions };
