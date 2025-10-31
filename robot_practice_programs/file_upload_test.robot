*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}     https://the-internet.herokuapp.com/upload
${FILE_PATH}    /path/to/your/file.txt
${BROWSER}    Chrome

*** Test Cases ***
File Upload Test
    Open Browser    ${URL}    ${BROWSER}
    Choose File    id=file-upload    ${FILE_PATH}
    Click Button    id=file-submit
    Element Should Contain    id=uploaded-files    file.txt
    Close Browser