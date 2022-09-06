export const useStyles = theme => ({
  DownloadTokenBtn: {
    padding: "10px 30px",
    display: "block",
    color: "#fff",
    backgroundColor: theme.palette.text.primary,
    "&:hover": {
      backgroundColor: "#005ACB",
    },
  },
  freecallContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  installAndRunContainer: {
    paddingTop: 11,
    marginBottom: 25,
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: theme.palette.text.verticalTabLeftBorder,
    "& h2": {
      padding: "12px 22px",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: theme.palette.text.gray1,
      margin: 0,
      color: theme.palette.text.darkShadedGray,
      fontSize: 20,
      fontWeight: 400,
    },
    "& .ProjectDetails-projectDetailsContainer-415": {
      "& h2": { marginBottom: 20 },
    },
  },
  infoIcon: {
    paddingRight: 12,
    color: theme.palette.text.lightGray,
    fontSize: 20,
    verticalAlign: "sub",
  },
  overViewContainer: {
    "& ul": {
      margin: "20px 0 0",
      padding: "0 22px",
      display: "flex",
      "& div": {
        "&:last-of-type": { marginLeft: "26%" },
      },
      "& li": {
        display: "flex",
        color: theme.palette.text.mediumShadeGray,
        fontSize: 14,
        lineHeight: "24px",
        letterSpacing: "0.25px",
        listStyle: "none",
      },
    },
    "& h5": {
      margin: "40px 45px 0 0",
      display: "inline-block",
      color: theme.palette.text.lightShadedGray,
      fontSize: 16,
      "@media(max-width:800px)": { paddingLeft: 0 },
    },
    "& > div": {
      "&:not(:first-of-type)": { marginTop: 25 },
    },
  },
  integrationSetupContainer: {
    paddingBottom: 25,
    margin: "0 25px 0 0",
    borderRadius: 4,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    backgroundColor: theme.palette.text.white,
    "@media(max-width:960px)": { marginRight: 0 }
  },
  integrationContent: {
    minHeight: 500,
    padding: "0 22px",
    paddingBottom: 10,
  },
  tabsHeader: {
    backgroundColor: "transparent",
    color: theme.palette.text.lightShadedGray,
    boxShadow: "none",
    "& button": {
      minWidth: "auto",
      padding: 0,
      marginRight: 40,
      fontSize: 18,
      textTransform: "none",
      color: theme.palette.text.lightShadedGray,
      fontFamily: "sans-serif",
    },
    "& .Mui-selected": { color: theme.palette.text.primary },
    "& .MuiTabs-indicator": { backgroundColor: theme.palette.text.primary },
  },
  intSetupDesc: {
    paddingRight: 42,
    margin: "16px 0 21px",
    color: theme.palette.text.mediumShadeGray,
    fontFamily: theme.typography.primary.main,
    fontSize: 14,
    lineHeight: "21px",
  },
  textfieldContainer: {
    "& > div": {
      marginBottom: 24,
      display: "flex",
      alignItems: "center",
      "@media(max-width: 600px)": {
        flexDirection: "column",
        alignItems: "flex-start",
      },
    },
    "& .MuiFormControl-root": {
      width: 595,
      margin: 0,
    },
  },
  publicAddDesc: {
    padding: "0 20px 0 40px",
    color: theme.palette.text.lightShadedGray,
    fontSize: 14,
    lineHeight: "20px",
    letterSpacing: 0.25,
    "@media(max-width: 600px)": { margin: "10px 0" },
  },
  setingUpFilesContainer: {
    marginTop: 40,
    "& h3": {
      margin: 0,
      color: theme.palette.text.darkShadedGray,
      fontSize: 18,
      fontWeight: 400,
      lineHeight: "23px",
    },
    "& span": {
      margin: "18px 0 10px",
      display: "inline-block",
      color: theme.palette.text.lightShadedGray,
      fontSize: 14,
      letterSpacing: 0.25,
      lineHeight: "20px",
    },
  },
  descriptionBtnsContainer: {
    "& p": {
      margin: "16px 0 24px",
      color: theme.palette.text.mediumShadeGray,
      fontSize: 14,
      letterSpacing: 0.25,
      lineHeight: "20px",
    },
  },
});
