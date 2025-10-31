*** Settings ***
Library    RequestsLibrary
Library    Collections

*** Variables ***
${BASE_URL}    https://jsonplaceholder.typicode.com

*** Test Cases ***
Validate JSON Response
    Create Session    jsonplaceholder    ${BASE_URL}
    ${response}=    GET    jsonplaceholder    /posts/1
    Should Be Equal As Strings    ${response.status_code}    200
    ${json_data}=    To Dictionary    ${response.json()}
    Should Be Equal As Strings    ${json_data["userId"]}    1
    Should Be Equal As Strings    ${json_data["id"]}        1
    Log    Title: ${json_data["title"]}