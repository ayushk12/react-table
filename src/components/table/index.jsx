import React from "react";

export default function table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
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
            <td>{row.Username}</td>
            <td>{row.Mobile}</td>
            <td>{row.factor_status}</td>
            <td>{row.Comments}</td>
            <td>{row.User_Status}</td>
            <td>{row.FullName}</td>
            <td>{row.createdAt}</td>
            <td>{row.modifiedAt}</td>
            <td>{row.check_for_comments}</td>
            <td>{row.ActionType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
