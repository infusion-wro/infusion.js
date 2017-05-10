let cards = [
  {
    id: 1,
    title: 'Read the Book',
    color: 'brown',
    description: 'I should read the whole book',
    status: 'in-progress',
    tasks: []
  },
  {
    id: 2,
    title: 'Write some code',
    color: 'green',
    description: 'Code along with the samples in the book',
    status: 'todo',
    tasks: [
      {
        id: '0398b141f978e',
        name: 'ContactList Example',
        done: true
      },
      {
        id: '4d3a751b6d8f8',
        name: 'Kanban Example',
        done: false
      },
      {
        id: '134a332f663af',
        name: 'My own experiments',
        done: false
      }
    ]
  }
]

export default {
  cards
}
