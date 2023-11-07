const data = {
  primaryId: "Replica1",
  replicas: [
    {
      id: "Replica1",
      states: {
        Request: 1000,
        "Pre-Prepare": 2000,
        Prepare: 3000,
        Commit: 4000,
        Reply: 5000,
      },
    },
    {
      id: "Replica2",
      states: {
        Request: 1100,
        "Pre-Prepare": 2100,
        Prepare: 3100,
        Commit: 4100,
        Reply: 5100,
      },
    },
    {
      id: "Replica3",
      states: {
        Request: 1200,
        "Pre-Prepare": 2200,
        Prepare: 3200,
        Commit: 4200,
        Reply: 5200,
      },
    },
    {
      id: "Replica4",
      states: {
        Request: 1300,
        "Pre-Prepare": 2300,
        Prepare: 3300,
        Commit: 4300,
        Reply: 5300,
      },
    },
  ],
  phases: [
    { name: "Request" },
    { name: "Pre-Prepare" },
    { name: "Prepare" },
    { name: "Commit" },
    { name: "Reply" },
  ],
};

export default data;
