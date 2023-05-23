import { Client, Account, ID } from 'appwrite';

const client = new Client();

// Set the endpoint and project ID for the client

const account = new Account(client);

export const sdk = {
    register: async (email, password, name) => {
        // Register by creating an account
    },

    login: async (email, password) => {
        // Create a session and get the account
    },

    logout: async () => {
        // Delete the session
    }
};