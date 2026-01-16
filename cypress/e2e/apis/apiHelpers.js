import ApiClient from "./apiClient";

class ApiHelpers {

  static get(endpoint, options = {}) {
    return ApiClient.sendRequest({
      method: "GET",
      endpoint,
      ...options
    });
  }

  static post(endpoint, body, options = {}) {
    return ApiClient.sendRequest({
      method: "POST",
      endpoint,
      body,
      ...options
    });
  }

  static put(endpoint, body, options = {}) {
    return ApiClient.sendRequest({
      method: "PUT",
      endpoint,
      body,
      ...options
    });
  }

  static patch(endpoint, body, options = {}) {
    return ApiClient.sendRequest({
      method: "PATCH",
      endpoint,
      body,
      ...options
    });
  }

  static delete(endpoint, options = {}) {
    return ApiClient.sendRequest({
      method: "DELETE",
      endpoint,
      ...options
    });
  }
}

export default ApiHelpers;
