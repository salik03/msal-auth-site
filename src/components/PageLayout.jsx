import React from 'react';
import { useMsal } from "@azure/msal-react";
import { useIsAuthenticated } from '@azure/msal-react';
import { loginRequest } from "../authConfig";

/**
 * Renders only the child components after handling login
 * @param props
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();
    const { instance } = useMsal();

    // Directly handle login if not authenticated
    if (!isAuthenticated) {
        instance.loginRedirect(loginRequest).catch(e => {
            console.log(e);
        });
        return null; // Return null or some loading indicator while redirecting
    }

    return (
        <>
            {props.children}
        </>
    );
};