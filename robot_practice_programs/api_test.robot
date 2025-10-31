*** Settings ***
Library    RequestsLibrary

*** Variables ***
${BASE_URL}    https://jsonplaceholder.typicode.com

*** Test Cases ***
Get Posts
    Create Session    jsonplaceholder    ${BASE_URL}
    ${response}=    GET    jsonplaceholder    /posts
    Should Be Equal As Strings    ${response.status_code}    200
    Log    ${response.json()}

Filter Posts By UserId
    Create Session    jsonplaceholder    ${BASE_URL}
    ${response}=    GET    jsonplaceholder    /posts?userId=1
    Should Be Equal As Strings    ${response.status_code}    200
    Log    ${response.json()}