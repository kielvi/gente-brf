import Notiflix from "notiflix";


Notiflix.Report.Init({
    width: '500px',
    className: 'notiflix-report',
    fontFamily: "'Roboto', sans-serif",
    svgSize: "80px",
    useGoogleFont: true,
    borderRadius: "10px",
    titleFontSize: "22px",
    titleMaxLength: 200,
    messageFontSize: "16px",
    plainText: false,
    buttonFontSize: '14px',
    backOverlayColor: "rgba(0,0,0,0.9)",
});

Notiflix.Loading.Init({
    fontFamily: "'Roboto', sans-serif",
    svgSize: "80px",
    useGoogleFont: true,
    borderRadius: "10px",
    titleFontSize: "22px",
    messageFontSize: "16px",
    backOverlayColor: "rgba(0,0,0,0.9)"
});

