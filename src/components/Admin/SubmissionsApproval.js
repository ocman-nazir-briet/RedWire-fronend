import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  submissionsToApprove,
  approveSubmission,
} from "../../actions/adminActions";
import MaterialTable from "material-table";
import { Button } from "semantic-ui-react";
const columns = [
  { title: "Program Title", field: "title" },
  { title: "Company Name", field: "customer" },
  { title: "Proof of Concept", field: "poc" },
  { title: "Action", field: "action" },
];

const SubmissionsApproval = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setdata] = useState([]);
  const submissionsApproval = useSelector((state) => state.submissionsApproval);

  useEffect(() => {
    console.log("TOKEN", localStorage.getItem("token"));
    if (!localStorage.getItem("token")) {
      history.push("/login");
    }
    if (
      submissionsApproval &&
      (submissionsApproval.isSuccess === null || !submissionsApproval.isSuccess)
    ) {
      dispatch(submissionsToApprove());
    } else {
      console.log(
        "submissions",
        submissionsApproval,
        submissionsApproval.data.submissions
      );
      const submissions =
        submissionsApproval.data.submissions &&
        submissionsApproval.data.submissions.map((sb, idx) => ({
          title: sb.programId.title,
          customer: sb.researcherId.name,
          poc: sb.poc,
          action: (
            <>
              <Button
                color="blue"
                onClick={() => {
                  console.log(sb._id);
                  dispatch(approveSubmission(sb._id));
                }}>
                Approve
              </Button>
              <Button color="purple">Chat</Button>
            </>
          ),
        }));
      console.log(submissions);
      setdata(submissions);
    }
  }, [submissionsApproval]);
  return (
    <MaterialTable
      columns={columns}
      data={data}
      title="Submissions to Approve"
      style={{ widht: "80%" }}
    />
  );
};

export default SubmissionsApproval;
