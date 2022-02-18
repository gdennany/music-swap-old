import React from 'react';

export function Spotify() {
    const AUTHORIZE = "https://accounts.spotify.com/authorize"

    var clientId = 'dc74506b5bb64ca69e02fc0420f5c703';
    var clientSecret = 'd4b4f491e3d7430c9c2d86903d51222c';
    var redirectUri = 'http://localhost:3000/test';

    let url = AUTHORIZE;
    url += "?client_id=" + clientId;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(redirectUri);
    url += "&show_dialog=true";
    url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
    window.location.href = url;
};