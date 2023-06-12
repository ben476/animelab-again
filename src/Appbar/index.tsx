import { AppBar as MuiAppBar, Toolbar } from "@mui/material";
import styles from "./styles/appbar.module.css";
import logo from "./assets/logo-full-white.png";

export default function AppBar() {
    return (
        <MuiAppBar
        position="fixed"
        className={styles.appBar}
      >
        <Toolbar className={styles.toolbar}>
            <img src={logo} alt="logo" className={styles.logo} />
        </Toolbar>
        </MuiAppBar>
    )
}