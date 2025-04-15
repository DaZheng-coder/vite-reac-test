import { MockMethod } from "vite-plugin-mock"

const mocks: MockMethod[] =  [
  {
      url: "/mock/api/getUsers",
      method: "get",
      timeout: 1000,
      response: () => {
        return {
          'rows|10': [{
            id: '@guid',
            name: '@cname',
            'age|20-30': 23,
            'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师']
          }]
        }
      }
  }
]
export default mocks