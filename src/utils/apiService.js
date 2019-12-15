export class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  static request(requestPromise) {
    return requestPromise
      .then(result => result.json())
      .then(res => {
        if (res.error) {
          throw new Error(res.error);
        }
        return res;
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  async delete(resource, data = {}, options = {}) {
    return ApiService.request(
      fetch(`${this.baseUrl}/${resource}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers
        },
        credentials: "include",
        method: "DELETE",
        body: JSON.stringify(data)
      })
    );
  }

  async put(resource, data = {}, options = {}, isFormData = false) {
    const headers = !isFormData
      ? {
          "Content-Type": "application/json"
        }
      : {};

    return ApiService.request(
      fetch(`${this.baseUrl}/${resource}`, {
        headers: {
          ...headers,
          ...options.headers
        },
        method: "PUT",
        credentials: "include",
        body: isFormData ? data : JSON.stringify(data),
        ...options
      })
    );
  }

  async post(resource, data = {}, options = {}, isFormData = false) {
    const headers = !isFormData
      ? {
          "Content-Type": "application/json"
        }
      : {};

    return ApiService.request(
      fetch(`${this.baseUrl}/${resource}`, {
        headers: {
          ...headers,
          ...options.headers
        },
        method: "POST",
        credentials: "include",
        body: isFormData ? data : JSON.stringify(data),
        ...options
      })
    );
  }

  async get(resource, options = {}, withResponse = true) {
    const requestPromise = fetch(`${this.baseUrl}/${resource}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers
      },
      credentials: "include",
      method: "GET"
    });

    return withResponse ? ApiService.request(requestPromise) : requestPromise;
  }
}
