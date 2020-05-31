import React from "react";

export default function TableData(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <button>onClick={() => props.sortBy("id")}> Username</button>
          </th>
          <th>Mobile</th>
          <th>factor_status</th>
          <th>Maker</th>
          <th>Approval_Status</th>
          <th>Comments</th>
          <th>User_Status</th>
          <th>FullName</th>
          <th>createdAt</th>
          <th>modifiedAt</th>
          <th>check_for_comments</th>
          <th>ActionType</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((row) => (
          <tr>
            <td>{row.username}</td>
            <td>{row.mobile}</td>
            <td>{row.twoFactorStatus}</td>
            <td>{row.userId}</td>
            <td>{row.maker}</td>
            <td>{row.approvalStatus}</td>
            <td>{row.comments}</td>
            <td>{row.userStatus}</td>
            <td>{row.fullName}</td>
            <td>{row.dateTimeCreated}</td>
            <td>{row.dateTimeModified}</td>
            <td>{row.check_for_comments}</td>
            <td>{row.actionType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
