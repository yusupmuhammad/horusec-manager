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

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import usePermissions from 'helpers/hooks/usePermissions';

interface PrivateRouteProps {
  component: React.FC;
  path: string;
  exact: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const { isAuthorizedRoute } = usePermissions();

  return isAuthorizedRoute() ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/auth" />
  );
};

export default PrivateRoute;
