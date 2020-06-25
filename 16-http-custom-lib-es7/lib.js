import { handleErrors } from "./utils.js";

export default class HTTP {
    static async get(url) {
        try {
            const response = await fetch(url);
            const validResponse = handleErrors(response);
            const json = await validResponse.json();
            return json;
        } catch (error) {
            return error;
        }
    }
    static async post(url, body) {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            const validResponse = handleErrors(response);
            const json = await validResponse.json();
            return json;
        } catch (error) {
            return error;
        }
    }
    static async put(url, body) {
        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            const validResponse = handleErrors(response);
            const json = await validResponse.json();
            return json;
        } catch (error) {
            return error;
        }
    }
    static async delete(url) {
        try {
            const response = await fetch(url, { method: "DELETE" });
            const validResponse = handleErrors(response);
            const json = await validResponse.json();
            return json;
        } catch (error) {
            return error;
        }
    }
}
