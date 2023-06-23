import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSubmittedPrograms,
  postNewSubmission,
  unenroll,
  downloadFile,
} from "../../actions/researcherActions";
import { Loader, List, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import classes from "./researcher.module.css";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import MaterialTable from "material-table";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

const columns = [
  { title: "Sr", field: "sr" },
  { title: "Program", field: "programId" },
  { title: "POC", field: "poc" },
  { title: "Is Approved", field: "isApproved" },
];
const SubmittedPrograms = () => {
  const submittedPrograms = useSelector((state) => state.submittedPrograms);
  const userId = useSelector(
    (state) => state.auth.data.data && state.auth.data.data.user._id
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setdata] = useState([]);
  const [selectedFile, setselectedFile] = useState();
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    if (!userId) {
      history.push("/login");
      return;
    }
    if (!submittedPrograms.data.programs) {
      dispatch(getSubmittedPrograms());
    } else {
      const programs =
        submittedPrograms.data.programs &&
        submittedPrograms.data.programs.map((pg, idx) => ({
          sr: idx + 1,
          programId: pg.programId && pg.programId.title,
          poc: (
            <span
              onClick={() => {
                const data = { fileName: pg.poc };
                dispatch(downloadFile(data));
              }}>
              {pg.poc}
            </span>
          ),
          isApproved: pg.isApproved,
          actions: (
            <div style={{ display: "flex" }}>
              <Button loading={isLoading ? true : false} size="mini" primary>
                Upload
              </Button>
              <input
                type="file"
                name="file"
                onChange={(e) => {
                  console.log(e.target.files);
                  setselectedFile(e.target.files[0]);
                }}
              />
              <Button size="mini" secondary>
                unsubmit
              </Button>
            </div>
          ),
        }));
      console.log(programs);
      setdata(programs);
    }
  }, [submittedPrograms]);
  return (
    <>
      {submittedPrograms.isLoading === true ? <Loader active /> : null}
      {submittedPrograms.data.program &&
      submittedPrograms.data.programs.length === 0 ? (
        <h3>You have not posted any submissions yet!</h3>
      ) : null}
      <MaterialTable columns={columns} data={data} title="Submitted Programs" />
    </>
  );
};

export default SubmittedPrograms;
