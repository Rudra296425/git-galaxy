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
