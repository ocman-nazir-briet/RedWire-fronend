import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPublicPrograms,
  getEnrolled,
} from "../../actions/researcherActions";
import {
  Card,
  Container,
  Loader,
  Table,
  Dropdown,
  Button,
  Icon,
  List,
} from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import classes from "./researcher.module.css";

const PublicPrograms = () => {
  const publicPrograms = useSelector((state) => state.publicPrograms);
  const userId = useSelector(
    (state) => state.auth.data.data && state.auth.data.data.user._id
  );
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (!userId) {
      history.push("/login");
      return;
    }
    if (!publicPrograms.isSuccess && !publicPrograms.isLoading) {
      dispatch(getPublicPrograms());
    }
  }, [publicPrograms]);
  return (
    <>
      {publicPrograms.isLoading === true ? <Loader active /> : null}
      {publicPrograms.isSuccess > 0
        ? [...publicPrograms.data.program].map((program, idx) => {
            return (
              <div key={idx} className={classes.publicProgramsList}>
                <List verticalAlign="middle">
                  <List.Item>
                    <List.Content>
                      <h2>{program.title}</h2>
                    </List.Content>
                    <br />
                    <List.Description>
                      <h4>{program.detail.substring(0, 50)}...</h4>
                    </List.Description>
                    <List.Description>
                      <div style={{ marginTop: "10px" }}>
                        IN SCOPE LINKS:
                        <div className={classes.linksContainer}>
                          {program.inScope.map((link, idx) => (
                            <span key={idx} className={classes.linksItem}>
                              {link}
                            </span>
                          ))}
                        </div>
                      </div>
                    </List.Description>
                    <List.Description>
                      {program.outScope.length > 0 && "OUT SCOPE LINKS:"}
                      <div className={classes.linksContainer}>
                        {program.outScope.map((link, idx) => (
                          <span key={idx} className={classes.linksItem}>
                            {link}
                          </span>
                        ))}
                      </div>
                    </List.Description>
                    <br />
                    <List.Description>
                      <div>
                        CREATED BY : <strong>{program.customer.name}</strong>
                      </div>
                    </List.Description>
                    <br />
                    {program.enrolled.includes(userId) && (
                      <p className={classes.enrolledSticker}>Enrolled</p>
                    )}

                    <List.Content floated="right">
                      <Button
                        color="blue"
                        onClick={() => {
                          dispatch(getEnrolled(program._id));
                        }}>
                        Get Enrolled
                      </Button>
                    </List.Content>
                  </List.Item>
                </List>
              </div>
            );
          })
        : null}
    </>
  );
};

export default PublicPrograms;
