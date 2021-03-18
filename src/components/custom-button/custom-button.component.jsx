import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    // className="custom-button google-sign-in"
    className={`${isGoogleSignIn ? "google-sign-in" : " "} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
