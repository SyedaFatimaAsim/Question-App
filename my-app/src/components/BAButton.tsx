import { Button } from "@mui/material";

export default function BAButton(props: any) {
  const { label, onClick } = props;
  return (
    <>
      <Button
        color="error"
        variant="contained"
        sx={{ borderRadius: 50, paddingX: 5 }}
        onClick={onClick}
      >
        {label}
      </Button>
    </>
  );
}
