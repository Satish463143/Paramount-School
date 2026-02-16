import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CheckPermission = ({ allowedBy, children }) => {
  const { loggedInUser, userLoading } = useSelector((root) => root.user);
  const navigate = useNavigate();

  useEffect(() => {
    // Wait for the rehydration/auth check to complete
    if (userLoading) return;

    if (!loggedInUser) {
      // Small timeout for potential toast/feedback, but only if we're sure no user exists
      const timer = setTimeout(() => {
        navigate("/admin");
      }, 500);
      return () => clearTimeout(timer);
    }

    if (loggedInUser.role !== allowedBy) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [loggedInUser, userLoading, allowedBy, navigate]);

  // If we're still loading, show nothing (or a spinner)
  if (userLoading) {
    return <div className="loading_container"><span className="loading_spinner">Verifying access...</span></div>;
  }

  // If user has permission, render children
  if (loggedInUser && loggedInUser.role === allowedBy) {
    return children;
  }

  return null;
};

export default CheckPermission;
