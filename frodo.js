async function frodo() {
    const WIDEVINE = 'com.widevine.alpha';
    const PLAYERREADY = 'com.microsoft.playready';
    const CLEARKEY = 'org.w3.clearkey';
    const FAIRPLAY = 'com.apple.fps';
    const FPS1 = 'com.apple.fps.1_0';
    const FPS2 = 'com.apple.fps.2_0';
    const FPS3 = 'com.apple.fps.3_0';

    const testVideoElement = document.createElement('video');
    let isOGGSupported;
    let isWEBMSupported;
    let isMPEG4Supported;
    let isVP8Supported;
    let isVP9Supported;
    let isH264Supported;
    let isH265Supported;
    let isHLSSupported;
    const isMediaSourceSupported =
        'MediaSource' in window ||
        'WebKitMediaSource' in window ||
        'mozMediaSource' in window ||
        'msMediaSource' in window;
    const isDashSupported = isMediaSourceSupported;

    // video codecs & streaming

    if (testVideoElement.canPlayType) {
        isOGGSupported =
            testVideoElement.canPlayType('video/ogg;codecs="theora"') || false;

        isWEBMSupported =
            testVideoElement.canPlayType('video/webm; codecs="vp8, vorbis"') ||
            false;

        isMPEG4Supported =
            testVideoElement.canPlayType('video/mp4; codecs="mp4v.20.8"') ||
            false;

        isVP8Supported =
            testVideoElement.canPlayType('video/webm; codecs="vp8"') || false;

        isVP9Supported =
            testVideoElement.canPlayType('video/webm; codecs="vp9"') || false;

        isH264Supported =
            testVideoElement.canPlayType('video/mp4; codecs="avc1.42E01E"') ||
            testVideoElement.canPlayType(
                'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            ) ||
            false;

        isH265Supported =
            testVideoElement.canPlayType('video/mp4; codecs="hvc1.1.L0.0"') ||
            testVideoElement.canPlayType('video/mp4; codecs="hev1.1.L0.0"') ||
            false;

        isHLSSupported =
            testVideoElement.canPlayType('application/vnd.apple.mpegURL') ||
            false;
    }

    // DRM systems

    const config = [
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

    async function supportChecker(name) {
        try {
            return Boolean(
                await navigator.requestMediaKeySystemAccess(name, config)
            );
        } catch (err) {
            return false;
        }
    }

    return {
        codecs: {
            isH265Supported,
            isOGGSupported,
            isMPEG4Supported,
            isH264Supported,
            isWEBMSupported,
            isVP8Supported,
            isVP9Supported,
        },
        streaming: { isHLSSupported, isDashSupported, isMediaSourceSupported },
        drm: {
            isWidevineSupported: () => supportChecker(WIDEVINE),
            isPlayerReadySupported: () => supportChecker(PLAYERREADY),
            isClearkeySupported: () => supportChecker(CLEARKEY),
            isFairPlaySupported: () =>
                supportChecker(FAIRPLAY) ||
                supportChecker(FPS1) ||
                supportChecker(FPS2) ||
                supportChecker(FPS3),
        },
    };
}

frodo().then((data) => {
    const codecsId = document.getElementById('codecs');
    const streamingId = document.getElementById('streaming');
    const emeId = document.getElementById('eme');

    async function createChildren(obj, attachedTo) {
        for (const key in obj) {
            const indicator = document.createElement('p');
            let value;

            if (typeof obj[key] === 'function') {
                value = await obj[key]();
            } else {
                value = obj[key];
            }

            indicator.innerHTML = `${key
                .slice(2)
                .slice(0, key.indexOf('Supported') - 2)}: <span class=${
                value ? 'enable' : 'disable'
            } id="${key}">${value}</span>`;
            attachedTo.append(indicator);
        }
    }

    try {
        Promise.all(
            createChildren(data.codecs, codecsId),
            createChildren(data.streaming, streamingId),
            createChildren(data.drm, emeId)
        ).then();
    } catch (e) {
        console.log(`Rejected promise:  +${e}`);
    }
});
