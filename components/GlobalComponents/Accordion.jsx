import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);
  const item = props.item;

  const items = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className={styles.accordion}>
      <button
        className={styles.mainItems}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{item.title}</div>
      </button>
      {isActive && (
        <Box
          sx={{
            width: "8rem",
            height: "0.1rem",
            marginLeft: "-4.75rem",
          }}
        >
          <nav>
            <List className={styles.hamburgerMenuLinks}>
              {items.map((item, index) => {
                return (
                  <Link href={item.link} key={index}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary={item.name} />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </Link>
                );
              })}
            </List>
          </nav>
        </Box>
      )}
    </div>
  );
};

export default Accordion;
