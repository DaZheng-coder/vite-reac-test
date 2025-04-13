export default [
  {
      url: "/mock/api/getUsers",
      method: "get",
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
