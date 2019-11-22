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

  async delete(resource, options = {}) {
    return ApiService.request(
      fetch(`${this.baseUrl}/${resource}`, {
        ...options,
        credentials: "include",
        method: "DELETE"
      })
    );
  }

  async put(resource, data = {}, options = {}) {
    return ApiService.request(
      fetch(`${this.baseUrl}/${resource}`, {
        ...options,
        headers: {
          ...options.headers,
          "Content-Type": "application/json"
        },
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(data)
      })
    );
  }

  async post(resource, data = {}, options = {}) {
    return ApiService.request(
      fetch(`${this.baseUrl}/${resource}`, {
        ...options,
        headers: {
          ...options.headers,
          "Content-Type": "application/json"
        },
        credentials: "include",
        method: "POST",
        body: JSON.stringify(data)
      })
    );
  }

  async get(resource, options = {}, withResponse = true) {
    const requestPromise = fetch(`${this.baseUrl}/${resource}`, {
      ...options,
      headers: {
        ...options.headers,
        "Content-Type": "application/json"
      },
      credentials: "include",
      method: "GET"
    });

    return withResponse ? ApiService.request(requestPromise) : requestPromise;
  }
}
