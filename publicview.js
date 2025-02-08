import { useState, useEffect } from "react";

export default function PublicView() {
  const [students, setStudents] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("students")) || []);
    setHistory(JSON.parse(localStorage.getItem("history")) || []);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold">Public Payment Transparency</h1>

      <div className="mb-4">
        <h2 className="font-bold">Students List</h2>
        <table className="border-collapse w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">S.No</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Branch</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id} className="border">
                <td className="border p-2">{student.id}</td>
                <td className="border p-2">{student.name}</td>
                <td className="border p-2">{student.branch}</td>
                <td className="border p-2">₹{student.amount}</td>
                <td className={`border p-2 ${student.paid ? "text-green-500" : "text-red-500"}`}>
                  {student.paid ? "Paid" : "Pending"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <h2 className="font-bold">Transaction History</h2>
        <table className="border-collapse w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Transaction ID</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Purpose</th>
              <th className="border p-2">Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {history.map(entry => (
              <tr key={entry.id} className="border">
                <td className="border p-2">{entry.id}</td>
                <td className={`border p-2 ${entry.type === "Credit" ? "text-green-500" : "text-red-500"}`}>
                  {entry.type}
                </td>
                <td className="border p-2">₹{entry.amount}</td>
                <td className="border p-2">{entry.purpose || "-"}</td>
                <td className="border p-2">{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
