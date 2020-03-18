export function handleErrors(response) {
    if (!response.ok) throw new Error(response.error);
    return response;
}
