export default function TaskTable() {
  const tasks = [
    {
      id: 1,
      title: "Build Login API",
      priority: "High",
      status: "Completed",
    },
    {
      id: 2,
      title: "Design Dashboard UI",
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Connect MongoDB",
      priority: "High",
      status: "Pending",
    },
    {
      id: 4,
      title: "Create Analytics Chart",
      priority: "Low",
      status: "Planning",
    },
  ];

  return (
    <div className="mt-12">

      <h2 className="text-2xl font-bold mb-5">
        Recent Tasks
      </h2>

      <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl">

        <table className="w-full">

          <thead className="bg-slate-700">

            <tr>

              <th className="text-left p-4">
                Task
              </th>

              <th className="text-left p-4">
                Priority
              </th>

              <th className="text-left p-4">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {tasks.map((task) => (

              <tr
                key={task.id}
                className="border-t border-slate-700 hover:bg-slate-700 transition"
              >

                <td className="p-4">
                  {task.title}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      task.priority === "High"
                        ? "bg-red-600"
                        : task.priority === "Medium"
                        ? "bg-yellow-500 text-black"
                        : "bg-green-600"
                    }`}
                  >
                    {task.priority}
                  </span>

                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      task.status === "Completed"
                        ? "bg-green-600"
                        : task.status === "In Progress"
                        ? "bg-blue-600"
                        : "bg-slate-600"
                    }`}
                  >
                    {task.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}