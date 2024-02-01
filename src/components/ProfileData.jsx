import React, { useEffect } from "react";

/**
 * Renders specific information about the user obtained from MS Graph in JSON format
 * @param props 
 */
export const ProfileData = (props) => {
    const { mail, displayName } = props.graphData;

    // Log for debugging purposes
    console.log(JSON.stringify({ mail, displayName }, null, 2));

    // Send data to React Native app when the component mounts
    useEffect(() => {
        const sendDataToReactNative = () => {
            window.postMessage(
                JSON.stringify({
                    mail,
                    displayName
                }),
                "*"
            );
        };

        sendDataToReactNative();
    }, [mail, displayName]);

    return (
        <pre id="profile-div">
            {JSON.stringify({
                mail,
                displayName
            }, null, 2)}
        </pre>
    );
};
