import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const AccordionList = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      {[
        { mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
        { mainLink: "Mega Menu", subLinks: ["Link 1", "Link 2", "Link 3"] },
        {
          mainLink: "Full Screen Menu",
          subLinks: ["Link 1", "Link 2", "Link 3"],
        },
        { mainLink: "pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
        {
          mainLink: "User Account",
          subLinks: ["Link 1", "Link 2", "Link 3"],
        },
        {
          mainLink: "Vendor Account",
          subLinks: ["Link 1", "Link 2", "Link 3"],
        },
      ].map((item, index) => {
        return (
          <Accordion
            // @ts-ignore
            expanded={expanded === t(item.mainLink)}
            onChange={handleChange(t(item.mainLink))}
            key={t(item.mainLink)}
            elevation={0}
            sx={{ bgcolor: "initial" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}a-content`}
              id={`panel${index + 1}a-header`}
            >
              <Typography>{t(item.mainLink)}</Typography>
            </AccordionSummary>
            <List sx={{ py: 0, my: 0 }}>
              {item.subLinks.map((link) => {
                return (
                  <ListItem key={link} sx={{ py: 0, my: 0 }}>
                    <ListItemButton>
                      <ListItemText primary={t(link)} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Accordion>
        );
      })}
    </>
  );
};

export default AccordionList;
