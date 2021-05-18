import React, { useState } from "react";
import ProjectGantt from "../ProjectGantt/ProjectGantt";
import ActivityStatus from "../ActivityStatus/ActivityStatus";

export default function ProjectDashboard() {
  const [comp, setComp] = useState(0);
  const [tasks, setTasks] = useState([
    {
      id: "Task 1",
      name: "Gather Project Requirements",
      description: "Decide on the features of the project, make SRS document",
      start: "2021-05-11",
      end: "2021-05-15",
      progress: 100,
      dependencies: "",
    },
    {
      id: "Task 2",
      name: "Gather Development and Design Team",
      start: "2021-05-16",
      end: "2021-05-17",
      progress: 50,
      dependencies: "",
    },
    {
      id: "Task 3",
      name: "Determine System Specifications and Requirements",
      start: "2021-05-18",
      end: "2021-05-20",
      progress: 50,
      dependencies: "",
    },
    {
      id: "Task 4",
      name: "Start Phase 1 Development",
      start: "2021-05-21",
      end: "2021-05-28",
      progress: 0,
      dependencies: "",
    },
    {
      id: "Task 5",
      name: "Test Phase 1 Development",
      start: "2021-05-29",
      end: "2021-05-31",
      progress: 0,
      dependencies: "Task 4",
    },
  ]);
  return (
    <div>
      {comp == 0 ? (
        <ProjectGantt tasks={tasks} setTasks={setTasks} setComp={setComp} />
      ) : (
        <ActivityStatus tasks={tasks} setTasks={setTasks} setComp={setComp} />
      )}
    </div>
  );
}
