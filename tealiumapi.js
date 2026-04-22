async function hashString(string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

async function get_vid() {
    try {
        utag_main_param = document.cookie.split("; ").find((row) => row.startsWith("utag"))
        v_id = utag_main_param.split("=")[1].split("$").find((row) => row.startsWith("v_id")).split(":")[1]
        return v_id
    } catch (error) {
        return ""
    }
}

async function sendHashedString(postid, ibkeiyakushabango) {
    const account = "mubk"
    const profile = "main"
    v_id = await get_vid()
    if(!v_id){ return false }

    const url =
        `https://collect.tealiumiq.com/event?tealium_account=${account}&tealium_profile=${profile}&tealium_event=login_view&ibkeiyakushabango=${ibkeiyakushabango}&tealium_visitor_id=${v_id}`;
    const response = await fetch(url, {
        method: "GET"
    });
}

try {
    if (server_data) {
        hashString(server_data.ibkeiyakushabango).then(
            hashib => {sendHashedString(server_data.postid,hashib)}
        )
    }
} catch (e) {}
