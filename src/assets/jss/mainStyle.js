import { grey } from "@material-ui/core/colors";

const profilePageStyle = {
    profile: {
        "& img": {
            maxWidth: "160px",
            width: "100%",
            margin: "0 auto",
            transform: "translate3d(0, -50%, 0)",
            background: grey[400]
        }
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
    imgFluid: {
        maxWidth: "100%",
        height: "auto"
    },
    imgRounded: {
        borderRadius: "6px !important"
    },
    imgRoundedCircle: {
        borderRadius: "50% !important"
    },
    imgRaised: {
        boxShadow:
            "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
}


export default profilePageStyle;