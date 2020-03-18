export class Utils {
    static handleErrors(response) {
        if (!response.ok) throw new Error(response.error);
        return response;
    }
}
