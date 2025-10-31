# --------------Post-------------------

*** Settings ***
Library    RequestsLibrary

*** Variables ***
${BASE_URL}    https://jsonplaceholder.typicode.com

*** Test Cases ***
Send POST Request
    Create Session    jsonplaceholder    ${BASE_URL}
    ${payload}=    Create Dictionary    title=foo    body=bar    userId=1
    ${response}=    POST    jsonplaceholder    /posts    json=${payload}
    Should Be Equal As Strings    ${response.status_code}    201
    ${json_data}=    To Dictionary    ${response.json()}
    Log    Created Post ID: ${json_data["id"]}

# --------------------PUT-------------------------
*** Settings ***
Library    RequestsLibrary

*** Variables ***
${BASE_URL}    https://jsonplaceholder.typicode.com

*** Test Cases ***
Send PUT Request
    Create Session    jsonplaceholder    ${BASE_URL}
    ${payload}=    Create Dictionary    id=1    title=updated title    body=updated body    userId=1
    ${response}=    PUT    jsonplaceholder    /posts/1    json=${payload}
    Should Be Equal As Strings    ${response.status_code}    200
    ${json_data}=    To Dictionary    ${response.json()}
    Should Be Equal As Strings    ${json_data["title"]}    updated title
    Log    Updated Post: ${json_data}

# --------------------Delete---------------------
*** Settings ***
Library    RequestsLibrary

*** Variables ***
${BASE_URL}    https://jsonplaceholder.typicode.com

*** Test Cases ***
Send DELETE Request
    Create Session    jsonplaceholder    ${BASE_URL}
    ${response}=    DELETE    jsonplaceholder    /posts/1
    Should Be Equal As Strings    ${response.status_code}    200
    Log    Resource deleted successfully