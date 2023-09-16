import { createVendiaClient } from "@vendia/client";

const client = createVendiaClient({
    apiUrl: `https://vdgxvtk6n6.execute-api.us-west-2.amazonaws.com/graphql/`,
    apiKey: 'AFtX7DQbrx4uoJ2y7U4HZV1D5DS3NfM5FgATnwEQR3s9', // <---- API key
})

export const vendiaClient = () => {
    return {client};
}