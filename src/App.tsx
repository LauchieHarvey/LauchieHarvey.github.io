import React from 'react';

const App = () => {
    const [time, setTime] = React.useState<number>(0);

    React.useEffect(() => {
        const timeout = setTimeout(() => setTime((oldTime) => oldTime + 1), 1_000);

        () => {
            clearTimeout(timeout);
        }
    }, []);

    return (
        <h1>{time}</h1>
    );
}

export default App;