import React from 'react';

const LoadingError = ({ loading, error, children }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return <>{children}</>;
};

export default LoadingError;
