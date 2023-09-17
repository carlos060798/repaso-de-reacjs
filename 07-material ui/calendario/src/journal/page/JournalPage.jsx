import { IconButton } from "@mui/material";
import JournalLayout from "../layaut/layaut";
import NothinViuw from "../views/nothing";
import { AddOutlined } from "@mui/icons-material";

function JournalPage() {
  return (
    <>
      <JournalLayout>
        <NothinViuw />
        <IconButton
          size="large"
          sx={{
            color: "white",
            backgroundColor: "error.main",
            ":hover": { backgroundColor: "error.main", opacity: 0.9 },
            position: "fixed",
            right: 50,
            bottom: 50,
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      </JournalLayout>
    </>
  );
}

export default JournalPage;
