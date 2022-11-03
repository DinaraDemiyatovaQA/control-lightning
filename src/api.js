const url = 'https://portal.organicresponse.com/public/api/v1';
const authPath = '/authenticate';
const lightingControlPath = '/lightingcontrol';
let jwtToken = '';
const buildingId = 14050761;
const tagId = 47969240;
const sceneAllOn = 0;
const sceneAllOff = 7;

export const apiGetToken = async () => {
    console.log(`${url}${authPath}`);
    const response = await fetch(`${url}${authPath}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "token": "72178957-b2fe3212-d77b-4732-a043-374d2fb4c6ca"
        })
    });
    console.log(response);
    if (response.ok) {
        const result = await response.json();
        console.log(result.token);
        jwtToken = result.token
    }
    else {
        throw new Error(`Error! status: ${response.status}`);
    }
};

export const apiLightingControl = async () => {
    //check dateExpiration
    try {
        await apiGetToken();
    } catch (err) {
        console.log(err);
        return;
    }

    const response = await fetch(`${url}${lightingControlPath}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({
            "buildingId": buildingId,
            "tagIds": [tagId],
            "command": "SCENE",
            "params": [
                sceneAllOff
            ]
        })
    });
    return response;
};