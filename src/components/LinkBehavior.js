import { Link as RouterLink } from "react-router-dom";
import React from "react";
const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} {...props} />
));

export default LinkBehavior;
