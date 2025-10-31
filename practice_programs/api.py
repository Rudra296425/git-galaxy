import requests

# Function to send a GET request
def get_request(url, params=None):
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()  # Raise HTTPError for bad responses (4xx and 5xx)
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"GET request failed: {e}")
        return None

# Function to send a POST request
def post_request(url, data=None):
    try:
        response = requests.post(url, json=data)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"POST request failed: {e}")
        return None

# Function to send a PUT request
def put_request(url, data=None):
    try:
        response = requests.put(url, json=data)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"PUT request failed: {e}")
        return None

# Function to send a DELETE request
def delete_request(url):
    try:
        response = requests.delete(url)
        response.raise_for_status()
        return response.status_code
    except requests.exceptions.RequestException as e:
        print(f"DELETE request failed: {e}")
        return None

# Example usage
if __name__ == "__main__":
    base_url = "https://jsonplaceholder.typicode.com"  # Example API

    # GET request
    print("GET Request:")
    get_response = get_request(f"{base_url}/posts", params={"userId": 1})
    print(get_response)

    # POST request
    print("\nPOST Request:")
    post_data = {"title": "foo", "body": "bar", "userId": 1}
    post_response = post_request(f"{base_url}/posts", data=post_data)
    print(post_response)

    # PUT request
    print("\nPUT Request:")
    put_data = {"id": 1, "title": "updated title", "body": "updated body", "userId": 1}
    put_response = put_request(f"{base_url}/posts/1", data=put_data)
    print(put_response)

    # DELETE request
    print("\nDELETE Request:")
    delete_response = delete_request(f"{base_url}/posts/1")
    print(f"Status Code: {delete_response}")