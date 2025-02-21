import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "../components/AllDrones/Navbar";
import Footer from "../components/Footer";

const FAQS = () => {
  const [expanded, setExpanded] = React.useState(null); // null indicates no accordion is expanded

  const handleExpansion = (panel) => {
    setExpanded(expanded === panel ? null : panel); // If the same panel is clicked, close it, else open the new one
  };

  return (
<>
<div className="relative min-h-screen p-4 bg-[#ddebf6]">
      <Navbar />
      <div className="flex justify-center items-center p-8">
        {/* <h1 className="text-5xl font-bold text-[#1c4684]">FAQ's</h1> */}
        <h1 className="text-5xl font-bold text-[#1c4684]">FREQUENTLY ASKED QUESTIONS</h1>
      </div>
      <div className="px-40 py-4">
        {/* Accordion 1 */}
        <Accordion
          expanded={expanded === "panel1"} // Check if the panel is expanded
          onChange={() => handleExpansion("panel1")} // Set state on change
          sx={{
            backgroundColor: "#FFFFFF66",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            sx={{
              color: "black",
              padding: "12px 20px",
              fontWeight: "bold",
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">
              What is the purpose of this software?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              S.H.A.K.T.I is a drone tracking system that helps organizations
              monitor drone deployments in real-time, manage fleet operations,
              and analyze sensor data like altitude, temperature, and battery
              status. It optimizes drone performance and ensures safety, making
              drone operations more efficient and effective.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion 2 */}
        <Accordion
          expanded={expanded === "panel2"} // Check if the panel is expanded
          onChange={() => handleExpansion("panel2")} // Set state on change
          sx={{
            backgroundColor: "#FFFFFF66",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            sx={{
              color: "black",
              padding: "12px 20px",
              fontWeight: "bold",
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">
              Who can access this application?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              S.H.A.K.T.I is designed for organizations using drones for
              operations. Only authorized users such as fleet managers, drone
              operators, and administrators with the proper permissions can
              access the application.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion 3 */}
        <Accordion
          expanded={expanded === "panel3"} // Check if the panel is expanded
          onChange={() => handleExpansion("panel3")} // Set state on change
          sx={{
            backgroundColor: "#FFFFFF66",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            sx={{
              color: "black",
              padding: "12px 20px",
              fontWeight: "bold",
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography component="span">
              How can I register my organization on S.H.A.K.T.I?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To register, contact the S.H.A.K.T.I support team or use the
              registration portal. After verification, your organization will
              gain access to the platform.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordian 4 */}
        <Accordion
          expanded={expanded === "panel4"} // Check if the panel is expanded
          onChange={() => handleExpansion("panel4")}
          sx={{
            backgroundColor: "#FFFFFF66", // Keeps the background #FFFFFF66
            boxShadow: "none ",
          }}
        >
          <AccordionSummary
            sx={{
              color: "black",
              padding: "12px 20px",
              fontWeight: "bold",
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <Typography component="span">
              What types of drones can be tracked using this system?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              S.H.A.K.T.I can track a variety of drones used for agricultural,
              logistical, surveillance, and other industrial purposes, as long
              as they are compatible with the system.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordian 5 */}
        <Accordion
         expanded={expanded === "panel5"} // Check if the panel is expanded
         onChange={() => handleExpansion("panel5")}
          sx={{
            backgroundColor: "#FFFFFF66", // Keeps the background #FFFFFF66
            boxShadow: "none ",
          }}
        >
          <AccordionSummary
            sx={{
              color: "black",
              padding: "12px 20px",
              fontWeight: "bold",
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5-content"
            id="panel5-header"
          >
            <Typography component="span">
              How does S.H.A.K.T.I monitor real-time drone data?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              S.H.A.K.T.I uses WebSockets to receive real-time sensor data from
              drones, including altitude, temperature, battery status, and more,
              which is displayed on the frontend for immediate monitoring.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordian 6  */}
        <Accordion
         expanded={expanded === "panel6"} // Check if the panel is expanded
         onChange={() => handleExpansion("panel6")}
          sx={{
            backgroundColor: "#FFFFFF66", // Keeps the background #FFFFFF66
            boxShadow: "none ",
          }}
        >
          <AccordionSummary
            sx={{
              color: "black",
              padding: "12px 20px",
              fontWeight: "bold",
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6-content"
            id="panel6-header"
          >
            <Typography component="span">
              What data can I track for each drone?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can track various data points such as Drone ID, coordinates,
              altitude, temperature, pressure, pitch, yaw, roll, battery status,
              and overall status indicators.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordian 7  */}
        <Accordion
         expanded={expanded === "panel7"} // Check if the panel is expanded
         onChange={() => handleExpansion("panel7")}
          sx={{
            backgroundColor: "#FFFFFF66", // Keeps the background #FFFFFF66
            boxShadow: "none ",
          }}
        >
          <AccordionSummary
            sx={{
              color: "black",
              padding: "12px 20px",
              fontWeight: "bold",
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7-content"
            id="panel7-header"
          >
            <Typography component="span">
              Can I view the history of drone deployments?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, S.H.A.K.T.I allows you to view historical data for past drone
              deployments, including deployment times, locations, and
              performance metrics.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordian 8  */}
        <Accordion
         expanded={expanded === "panel8"} // Check if the panel is expanded
         onChange={() => handleExpansion("panel8")}
          sx={{
            backgroundColor: "#FFFFFF66", // Keeps the background #FFFFFF66
            boxShadow: "none ",
          }}
        >
          <AccordionSummary
            sx={{
              color: "black",
              padding: "12px 20px",
              fontWeight: "bold",
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8-content"
            id="panel8-header"
          >
            <Typography component="span">
              Can I set up alerts for specific drone conditions (e.g., low
              battery, altitude)?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, users can set alerts for specific conditions like low
              battery, high altitude, or abnormal drone status to ensure timely
              actions are taken when necessary.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordian 9  */}
        <Accordion
         expanded={expanded === "panel9"} // Check if the panel is expanded
         onChange={() => handleExpansion("panel9")}
          sx={{
            backgroundColor: "#FFFFFF66", // Keeps the background #FFFFFF66
            boxShadow: "none ",
          }}
        >
          <AccordionSummary
            sx={{
              color: "black",
              padding: "12px 20px",
              fontWeight: "bold",
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9-content"
            id="panel9-header"
          >
            <Typography component="span">
              How can I manage and organize my fleet of drones in S.H.A.K.T.I?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The system provides a centralized dashboard for managing your
              fleet. You can track each drone’s status, organize them by type or
              location, and review deployment history.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordian 10  */}
        <Accordion
         expanded={expanded === "panel10"} // Check if the panel is expanded
         onChange={() => handleExpansion("panel10")}
          sx={{
            backgroundColor: "#FFFFFF66", // Keeps the background #FFFFFF66
            boxShadow: "none ",
          }}
        >
          <AccordionSummary
            sx={{
              color: "black",
              padding: "12px 20px",
              fontWeight: "bold",
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel10-content"
            id="panel10-header"
          >
            <Typography component="span">
              How do I contact technical support?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              For technical support, visit the Help section within the
              application or email support@shakti.com. Our team is available to
              assist with any issues or questions you may have.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordian 11  */}
        <Accordion
         expanded={expanded === "panel11"} // Check if the panel is expanded
         onChange={() => handleExpansion("panel11")}
          sx={{
            backgroundColor: "#FFFFFF66", // Keeps the background #FFFFFF66
            boxShadow: "none ",
          }}
        >
          <AccordionSummary
            sx={{
              color: "black",
              padding: "12px 20px",
              fontWeight: "bold",
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel11-content"
            id="panel11-header"
          >
            <Typography component="span">
              What if I forgot my password?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you forget your password, click on the Forgot Password link on
              the login page. Enter your registered email, and a reset link will
              be sent to your inbox. Follow the instructions to reset your
              password.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordian 12  */}
        <Accordion
         expanded={expanded === "panel12"} // Check if the panel is expanded
         onChange={() => handleExpansion("panel12")}
          sx={{
            backgroundColor: "#FFFFFF66", // Keeps the background #FFFFFF66
            boxShadow: "none ",
          }}
        >
          <AccordionSummary
            sx={{
              color: "black",
              padding: "12px 20px",
              fontWeight: "bold",
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel12-content"
            id="panel12-header"
          >
            <Typography component="span">
              Is the data displayed on S.H.A.K.T.I updated in real-time?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, S.H.A.K.T.I updates the data in real-time, ensuring you have
              the most current information about each drone’s performance and
              status at all times.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
    <Footer/>
</>

  );
};

export default FAQS;
