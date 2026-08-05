*** Settings ***
Documentation    API smoke tests organized around reusable keywords.
Resource         ../resources/api.resource
Suite Setup      Create Demo API Session
Test Tags        api    smoke

*** Test Cases ***
Get A User Returns Required Fields
    ${response}=    Get User    1
    Dictionary Should Contain Key    ${response.json()}    id
    Dictionary Should Contain Key    ${response.json()}    email

Get A User Has Expected Identifier
    ${response}=    Get User    2
    Should Be Equal As Integers    ${response.json()}[id]    2

List Posts For A User
    [Tags]    regression
    ${response}=    List Posts For User    1
    Should Be Equal As Integers    ${response.json()}[0][userId]    1

Create A Post
    [Tags]    write
    ${response}=    Create Post    QA portfolio    Demonstrates API automation
    Dictionary Should Contain Key    ${response.json()}    id
