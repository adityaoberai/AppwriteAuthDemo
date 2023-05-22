import { Client, Account, ID } from 'appwrite';

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITECLOUD_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITECLOUD_PROJECTID);

const account = new Account(client);

export const sdk = {
    register: async (email, password, name) => {
        return await account.create(ID.unique(), email, password, name);
    },

    login: async (email, password) => {
        await account.createEmailSession(email, password);
        return await account.get()
    },

    logout: async () => {
        await account.deleteSession('current');
    }
};