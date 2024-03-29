// Copyright 2021 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package client

import (
	"github.com/stretchr/testify/mock"

	mockUtils "github.com/ZupIT/horusec-devkit/pkg/utils/mock"
)

type Mock struct {
	mock.Mock
}

func (m *Mock) Authenticate(_, _ string) (bool, map[string]string, error) {
	args := m.MethodCalled("Authenticate")
	return args.Bool(0), args.Get(1).(map[string]string), mockUtils.ReturnNilOrError(args, 2)
}

func (m *Mock) GetUserGroups(_ string) ([]string, error) {
	args := m.MethodCalled("GetUserGroups")
	return args.Get(0).([]string), mockUtils.ReturnNilOrError(args, 1)
}

func (m *Mock) Connect() error {
	args := m.MethodCalled("Connect")
	return mockUtils.ReturnNilOrError(args, 0)
}

func (m *Mock) Close() {
	_ = m.MethodCalled("Close")
}

func (m *Mock) IsAvailable() bool {
	args := m.MethodCalled("IsAvailable")
	return args.Get(0).(bool)
}
