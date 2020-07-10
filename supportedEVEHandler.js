var testVideoElement = document.createElement('video'),
    mpeg4,
    h264,
    ogg,
    webm;

if (testVideoElement.canPlayType) {
    mpeg4 =
        '' !== testVideoElement.canPlayType('video/mp4; codecs="mp4v.20.8"');

    h264 =
        '' !==
        (testVideoElement.canPlayType('video/mp4; codecs="avc1.42E01E"') ||
            testVideoElement.canPlayType(
                'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            ));

    h265 = '' !== testVideoElement.canPlayType('video/mp4;codecs="hvc1"');

    ogg = '' !== testVideoElement.canPlayType('video/ogg;codecs="theora"');

    webm =
        '' !== testVideoElement.canPlayType('video/webm; codecs="vp8, vorbis"');

    hsl = '' !== testVideoElement.canPlayType('application/vnd.apple.mpegurl');
}

console.log('mpeg4: ' + mpeg4);
console.log('h264: ' + h264);
console.log('h265: ' + h265);
console.log('ogg: ' + ogg);
console.log('webm vp8: ' + webm);
console.log('HSL: ' + hsl);

var config = [
    {
        initDataTypes: ['cenc'],
        audioCapabilities: [
            {
                contentType: 'audio/mp4;codecs="mp4a.40.2"',
            },
        ],
        videoCapabilities: [
            {
                contentType: 'video/mp4;codecs="avc1.42E01E"',
            },
        ],
    },
];
try {
    navigator
        .requestMediaKeySystemAccess('com.widevine.alpha', config)
        .then(function (mediaKeySystemAccess) {
            console.log('WIDEVINE SUPPORT - Enabled');
        })
        .catch(function (e) {
            console.log('WIDEVINE SUPPORT - Disabled');
        });
} catch (e) {
    console.log('WIDEVINE SUPPORT - Disabled');
}
try {
    navigator
        .requestMediaKeySystemAccess('com.microsoft.playready', config)
        .then(function (mediaKeySystemAccess) {
            console.log('PLAYREADY SUPPORT - Enabled');
        })
        .catch(function (e) {
            console.log('PLAYREADY SUPPORT - Disabled');
        });
} catch (e) {
    console.log('PLAYREADY SUPPORT - Disabled');
}
try {
    navigator
        .requestMediaKeySystemAccess('org.w3.clearkey', config)
        .then(function (mediaKeySystemAccess) {
            console.log('CLEARKEY SUPPORT - Enabled');
        })
        .catch(function (e) {
            console.log('CLEARKEY SUPPORT - Disabled');
        });
} catch (e) {
    console.log('CLEARKEY SUPPORT - Disabled');
}
try {
    navigator
        .requestMediaKeySystemAccess('com.apple.fps.2_0', config)
        .then(function (mediaKeySystemAccess) {
            console.log('FAIRPLAY SUPPORT 2_0 - Enabled');
        })
        .catch(function (e) {
            console.log('FAIRPLAY SUPPORT 2_0 - Disabled');
        });
} catch (e) {
    console.log('FAIRPLAY SUPPORT 2_0 - Disabled');
}
try {
    navigator
        .requestMediaKeySystemAccess('com.apple.fps.1_0', config)
        .then(function (mediaKeySystemAccess) {
            console.log('FAIRPLAY SUPPORT 1_0 - Enabled');
        })
        .catch(function (e) {
            console.log('FAIRPLAY SUPPORT 1_0 - Disabled');
        });
} catch (e) {
    console.log('FAIRPLAY SUPPORT 1_0 - Disabled');
}
