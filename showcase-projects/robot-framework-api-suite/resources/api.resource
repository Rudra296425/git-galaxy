*** Settings ***
Library    RequestsLibrary
Library    Collections

*** Variables ***
${BASE_URL}    https://jsonplaceholder.typicode.com

*** Keywords ***
Create Demo API Session
    Create Session    demo_api    ${BASE_URL}

Get User
    [Arguments]    ${user_id}
    ${response}=    GET On Session    demo_api    /users/${user_id}
    Should Be Equal As Integers    ${response.status_code}    200
    RETURN    ${response}

List Posts For User
    [Arguments]    ${user_id}
    ${response}=    GET On Session    demo_api    /posts    params=userId=${user_id}
    Should Be Equal As Integers    ${response.status_code}    200
    Should Not Be Empty    ${response.json()}
    RETURN    ${response}

Create Post
    [Arguments]    ${title}    ${body}    ${user_id}=1
    ${payload}=    Create Dictionary    title=${title}    body=${body}    userId=${user_id}
    ${response}=    POST On Session    demo_api    /posts    json=${payload}
    Should Be Equal As Integers    ${response.status_code}    201
    RETURN    ${response}
