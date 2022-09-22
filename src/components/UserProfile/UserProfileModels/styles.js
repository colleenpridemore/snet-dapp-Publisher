export const useStyles = theme => ({
  userProfileModelMainContainer: {
    margin: "29px 0 85px",
    backgroundColor: theme.palette.text.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    "& h3": {
      padding: "11px 22px",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: theme.palette.text.gray1,
      margin: 0,
      color: theme.palette.text.darkShadedGray,
      fontSize: 20,
      fontWeight: 400,
    },
  },
  userProfileModelContainer: { "@media(max-width: 1280px)": { overflow: "auto" } },
  tabsHeader: {
    padding: "7px 26px 0",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: "#e2e2e2",
    backgroundColor: "transparent",
    color: theme.palette.text.lightShadedGray,
    boxShadow: "none",
    "& button": {
      minWidth: "auto",
      padding: 0,
      marginRight: 40,
      fontSize: 20,
      textTransform: "none",
      color: theme.palette.text.lightShadedGray,
      fontFamily: theme.typography.primary.main,
    },
    "& .Mui-selected": { color: theme.palette.text.primary },
    "& .MuiTabs-indicator": { backgroundColor: theme.palette.text.primary },
  },
  requestedModelsHeaders: {
    padding: "20px 22px",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: "#f6f6f7",
    backgroundColor: "#f5f5f5",
    display: "flex",
    "& p": {
      color: theme.palette.text.mediumShadeGray,
      fontFamily: theme.typography.primary.main,
      fontSize: 14,
      lineHeight: "18px",
      textTransform: "uppercase",
    },
		'@media(max-width: 960px)': { display: 'none' }
  },
  requestedModelsDataContainer: {
    padding: "24px 0",
    margin: "0 22px",
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: "#e2e2e2",
    display: "flex",
		'& div': {
			display: 'flex',
			alignItems: 'center'
		},
    "& span": {
			width: '150px',
      display: "none",
      color: theme.palette.text.mediumShadeGray,
      fontFamily: theme.typography.primary.main,
      fontSize: 14,
      lineHeight: "18px",
      textTransform: "uppercase",
			'@media(max-width: 960px)': { display: 'block' }
    },
    "& p": {
      color: theme.palette.text.mediumShadeGray,
      fontFamily: theme.typography.primary.main,
      fontSize: 14,
      lineHeight: "24px",
    },
    "&:last-of-type": { border: "none" },
  },
});