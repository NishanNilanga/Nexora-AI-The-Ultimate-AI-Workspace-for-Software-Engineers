export default function ProjectTable() {
  const projects = [
    {
      id: 1,
      name: "Nexora AI Dashboard",
      status: "In Progress",
      progress: "90%",
    },
    {
      id: 2,
      name: "Employee Management",
      status: "Completed",
      progress: "100%",
    },
    {
      id: 3,
      name: "Task Manager",
      status: "Planning",
      progress: "25%",
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-5">
        Recent Projects
      </h2>

      <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl">

        <table className="w-full">

          <thead className="bg-slate-700">

            <tr>

              <th className="text-left p-4">
                Project
              </th>

              <th className="text-left p-4">
                Status
              </th>

              <th className="text-left p-4">
                Progress
              </th>

            </tr>

          </thead>

          <tbody>

            {projects.map((project) => (

              <tr
                key={project.id}
                className="border-t border-slate-700 hover:bg-slate-700 transition"
              >

                <td className="p-4">
                  {project.name}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === "Completed"
                        ? "bg-green-600"
                        : project.status === "In Progress"
                        ? "bg-blue-600"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {project.status}
                  </span>

                </td>

                <td className="p-4">
                  {project.progress}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}