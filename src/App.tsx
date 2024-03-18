import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import amplifyconfig from '../amplifyconfiguration.json';
import TodoList from "./components/TodoList";
import './App.css'

function App() {
    return (
        <>
            <h1>Hello, Amplify 👋</h1>
            <TodoList />
        </>
    );
}

export default withAuthenticator(App);

Amplify.configure(amplifyconfig);

const existingConfig = Amplify.getConfig();

console.log('amplifyconfig.custom', amplifyconfig.custom)

Amplify.configure({
    ...existingConfig,
    API: {
        REST: {
            [amplifyconfig.custom.apiName]: {
                endpoint: amplifyconfig.custom.apiEndpoint,
                region: amplifyconfig.custom.apiRegion,
            },
        },
    },
});