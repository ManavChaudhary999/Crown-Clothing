import React from "react";

import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
    constructor(){
        super();
        
        this.state = {
            hasErrored: false
        };
    }

    static getDerivedStateFromError(error)
    {
        return {hasErrored: true};
    }

    componentDidCatch(error, info)
    {
        console.error(error);
    }

    render()
    {
        if(this.state.hasErrored === true)
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://cdn.pixabay.com/photo/2016/10/06/19/59/sign-1719892_960_720.png" />
                        <ErrorImageText>Something Is Wrong</ErrorImageText>
                </ErrorImageOverlay>
            )
    
        return this.props.children;
    }
}

export default ErrorBoundary;