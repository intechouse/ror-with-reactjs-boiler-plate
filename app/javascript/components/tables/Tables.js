import React, { useState } from "react";
import {
  CDataTable,
  CBadge,
  CButton,
  CCollapse,
  CCardBody,
} from "@coreui/react";

const usersData = [
  {
    id: 0,
    name: "John Doe",
    registered: "2018/01/01",
    role: "Guest",
    status: "Pending",
  },
  {
    id: 1,
    name: "Samppa Nori",
    registered: "2018/01/01",
    role: "Member",
    status: "Active",
  },
  {
    id: 2,
    name: "Estavan Lykos",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    id: 3,
    name: "Chetan Mohamed",
    registered: "2018/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Derick Maximinus",
    registered: "2018/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 5,
    name: "Friderik Dávid",
    registered: "2018/01/21",
    role: "Staff",
    status: "Active",
  },
];

const Tables = (props) => {
  const [details, setDetails] = useState([]);
  const [items, setItems] = useState(usersData);

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: "name", _style: { width: "40%" } },
    "registered",
    { key: "role", _style: { width: "20%" } },
    { key: "status", _style: { width: "20%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };

  return (
    <CDataTable
      items={usersData}
      fields={fields}
      columnFilter
      tableFilter
      footer
      itemsPerPageSelect
      itemsPerPage={5}
      hover
      sorter
      pagination
      scopedSlots={{
        status: (item) => (
          <td>
            <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
          </td>
        ),
        show_details: (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={() => {
                  toggleDetails(index);
                }}
              >
                {details.includes(index) ? "Hide" : "Show"}
              </CButton>
            </td>
          );
        },
        details: (item, index) => {
          return (
            <CCollapse show={details.includes(index)}>
              <CCardBody>
                <h4>{item.username}</h4>
                <p className="text-muted">User since: {item.registered}</p>
                <CButton size="sm" color="info">
                  User Settings
                </CButton>
                <CButton size="sm" color="danger" className="ml-1">
                  Delete
                </CButton>
              </CCardBody>
            </CCollapse>
          );
        },
      }}
    />
  );
};
export default Tables;
