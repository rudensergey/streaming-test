async function frodo() {
    const testVideoElement = document.createElement('video');

    let isMPEG4Supported;
    let isH264Supported;
    let isH265Supported;
    let isOGGSupported;
    let isWEBMSupported;
    let isHLSSupported;

    if (testVideoElement.canPlayType) {
        isMPEG4Supported =
            testVideoElement.canPlayType('video/mp4; codecs="mp4v.20.8"') ||
            false;

        isH264Supported =
            testVideoElement.canPlayType('video/mp4; codecs="avc1.42E01E"') ||
            testVideoElement.canPlayType(
                'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            ) ||
            false;

        isH265Supported =
            testVideoElement.canPlayType('video/mp4;codecs="hvc1"') || false;

        isOGGSupported =
            testVideoElement.canPlayType('video/ogg;codecs="theora"') || false;

        isWEBMSupported =
            testVideoElement.canPlayType('video/webm; codecs="vp8, vorbis"') ||
            false;

        isHLSSupported =
            testVideoElement.canPlayType('application/vnd.apple.mpegurl') ||
            false;
    }

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

    const isWidevineSupported = await navigator
        .requestMediaKeySystemAccess('com.widevine.alpha', config)
        .then(
            () => true,
            () => false
        );
    const isPlayreadySupported = await navigator
        .requestMediaKeySystemAccess('com.microsoft.playready', config)
        .then(
            () => true,
            () => false
        );
    const isClearKeySupported = await navigator
        .requestMediaKeySystemAccess('org.w3.clearkey', config)
        .then(
            () => true,
            () => false
        );
    const fpsSupported = await navigator
        .requestMediaKeySystemAccess('com.apple.fps', config)
        .then(
            () => true,
            () => false
        );
    const fps1Supported = await navigator
        .requestMediaKeySystemAccess('com.apple.fps.1_0', config)
        .then(
            () => true,
            () => false
        );
    const fps2Supported = await navigator
        .requestMediaKeySystemAccess('com.apple.fps.2_0', config)
        .then(
            () => true,
            () => false
        );
    const fps3Supported = await navigator
        .requestMediaKeySystemAccess('com.apple.fps.3_0', config)
        .then(
            () => true,
            () => false
        );
    const isFairPlaySupported =
        fpsSupported || fps1Supported || fps2Supported || fps3Supported;

    return {
        isMPEG4Supported,
        isH264Supported,
        isH265Supported,
        isOGGSupported,
        isWEBMSupported,
        isHLSSupported,
        EMESupport: {
            isWidevineSupported,
            isPlayreadySupported,
            isClearKeySupported,
            isFairPlaySupported,
            fairPlayVersions: {
                fpsSupported,
                fps1Supported,
                fps2Supported,
                fps3Supported,
            },
        },
    };
}

frodo().then((data) => {
    const {
        isMPEG4Supported,
        isH264Supported,
        isH265Supported,
        isHLSSupported,
        isOGGSupported,
        isWEBMSupported,
        EMESupport: {
            isWidevineSupported,
            isClearKeySupported,
            isFairPlaySupported,
            isPlayreadySupported,
        },
    } = data;

    document.getElementById('widevine').innerText = isWidevineSupported;
    isWEBMSupported
        ? (document.getElementById('widevine').className = 'enable')
        : (document.getElementById('widevine').className = 'disable');

    document.getElementById('fairplay').innerText = isFairPlaySupported;
    isFairPlaySupported
        ? (document.getElementById('fairplay').className = 'enable')
        : (document.getElementById('fairplay').className = 'disable');

    document.getElementById('clearkey').innerText = isClearKeySupported;
    isClearKeySupported
        ? (document.getElementById('clearkey').className = 'enable')
        : (document.getElementById('clearkey').className = 'disable');

    document.getElementById('playerready').innerText = isPlayreadySupported;
    isPlayreadySupported
        ? (document.getElementById('playerready').className = 'enable')
        : (document.getElementById('playerready').className = 'disable');

    document.getElementById('mpeg4').innerText = isMPEG4Supported;
    document.getElementById('h264').innerText = isH264Supported;
    document.getElementById('h265').innerText = isH265Supported;
    document.getElementById('ogg').innerText = isOGGSupported;
    document.getElementById('webm').innerText = isWEBMSupported;
    document.getElementById('hls').innerText = isHLSSupported;
});
