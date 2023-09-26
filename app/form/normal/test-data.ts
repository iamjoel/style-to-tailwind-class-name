const data = {
  "content": [
    {
      "type": "Input",
      "props":
        {
          "label":"姓名",
          "id":"Input-1"
        }
    },
    {
      "type": "NumberInput",
      "props":
        {
          "label":"年龄",
          "id":"NumberInput-2"
        }
    },
    {
      "type": "Select",
      "props":
        {
          "label":"渠道",
          "id":"Select-2",
          "options": [
            {
              id: '1',
              name: 'From media'
            },
            {
              id: '2',
              name: 'From friend'
            },
          ]
        }
    },
  ],
  "root":{"title":"问卷调查", }
}
export default data