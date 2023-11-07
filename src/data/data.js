const data = {
  nodes: [
    { id: "Client" },
    { id: "Replica1" },
    { id: "Replica2" },
    { id: "Replica3" },
    { id: "Replica4" },
  ],
  links: [
    { source: "Client", target: "Replica1", phase: "Request" },
    { source: "Client", target: "Replica2", phase: "Request" },
    { source: "Client", target: "Replica3", phase: "Request" },
    { source: "Client", target: "Replica4", phase: "Request" },

    { source: "Replica1", target: "Replica2", phase: "Pre-Prepare" },
    { source: "Replica1", target: "Replica3", phase: "Pre-Prepare" },
    { source: "Replica1", target: "Replica4", phase: "Pre-Prepare" },

    { source: "Replica2", target: "Replica3", phase: "Prepare" },
    { source: "Replica2", target: "Replica4", phase: "Prepare" },
    { source: "Replica3", target: "Replica4", phase: "Prepare" },

    { source: "Replica1", target: "Client", phase: "Reply" },
    { source: "Replica2", target: "Client", phase: "Reply" },
    { source: "Replica3", target: "Client", phase: "Reply" },
    { source: "Replica4", target: "Client", phase: "Reply" },
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
