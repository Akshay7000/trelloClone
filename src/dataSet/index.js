const dataset = {
    tasks: {
      "task-1": { id: "task-1", content: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",heading:"Heading of card1",assignTo:"Travis Howard"  },
      "task-2": { id: "task-2", content: "Content for task-2",heading:"Heading of card2", assignTo:"Travis Howard"  },
      "task-3": { id: "task-3", content: "Content for task-3" ,heading:"Heading of card3", assignTo:"Travis Howard" },
      "task-4": { id: "task-4", content: "Content for task-4" ,heading:"Heading of card4",assignTo:"Travis Howard" }
    },
    columns: {
      "column1": { id: "column1", title: "Todo", taskIds: ['task-1']},
      "column2": { id: "column2", title: "In progress", taskIds: ['task-2', 'task-3'] },
      "column3": { id: "column3", title: "Review", taskIds: [] },
      "column4": { id: "column4", title: "Completed", taskIds: ["task-4"] }
  },
  columnOrder: ["column1", "column2", "column3", "column4"]}
  export default dataset