import './style.css';
import {
    DRM,
    CODECS,
    MEDIA_SOURSES,
    drmType,
    SupportTypes,
    Config,
    ICompatibilityData,
} from './types';

async function frodo() {
    const testVideoElement: HTMLVideoElement = document.createElement('video');
    let isOGGSupported: SupportTypes;
    let isWEBMSupported: SupportTypes;
    let isMPEG4Supported: SupportTypes;
    let isVP8Supported: SupportTypes;
    let isVP9Supported: SupportTypes;
    let isH264Supported: SupportTypes;
    let isH265Supported: SupportTypes;
    let isHLSSupported: SupportTypes;
    const isMediaSourceSupported: Boolean =
        MEDIA_SOURSES.MEDIA in window ||
        MEDIA_SOURSES.WEBKIT in window ||
        MEDIA_SOURSES.MOZILA in window ||
        MEDIA_SOURSES.MICROSOFT in window;
    const isDashSupported: Boolean = isMediaSourceSupported;

    // video codecs & streaming

    if (testVideoElement.canPlayType) {
        isOGGSupported = testVideoElement.canPlayType(CODECS.OGG) || false;
        isWEBMSupported = testVideoElement.canPlayType(CODECS.WEBM) || false;
        isMPEG4Supported = testVideoElement.canPlayType(CODECS.MPEG4) || false;
        isVP8Supported = testVideoElement.canPlayType(CODECS.VP8) || false;
        isVP9Supported = testVideoElement.canPlayType(CODECS.VP9) || false;
        isH265Supported = testVideoElement.canPlayType(CODECS.H265) || false;
        isHLSSupported = testVideoElement.canPlayType(CODECS.HLS) || false;
        isH264Supported =
            testVideoElement.canPlayType(CODECS.H264_1) ||
            testVideoElement.canPlayType(CODECS.H265_2) ||
            false;
    }

    // DRM systems

    const config: Config = [
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

    async function supportChecker(name: drmType) {
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
            isWidevineSupported: () => supportChecker(DRM.WIDEVINE),
            isPlayerReadySupported: () => supportChecker(DRM.PLAYREADY),
            isClearkeySupported: () => supportChecker(DRM.CLEARKEY),
            isFairPlaySupported: () =>
                supportChecker(DRM.FAIRPLAY) ||
                supportChecker(DRM.FPS1) ||
                supportChecker(DRM.FPS2) ||
                supportChecker(DRM.FPS3),
        },
    };
}

type SupportObjectType = {
    [key: string]: SupportTypes | Function;
};

frodo().then((data: ICompatibilityData) => {
    const codecsId: HTMLElement = document.getElementById('codecs');
    const streamingId: HTMLElement = document.getElementById('streaming');
    const emeId: HTMLElement = document.getElementById('eme');

    async function createChildren(
        obj: SupportObjectType,
        attachedTo: HTMLElement
    ) {
        for (const key in obj) {
            const indicator: HTMLElement = document.createElement('p');
            let value: SupportTypes | Function;

            if (typeof obj[key] === 'function') {
                // @ts-ignore
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
        Promise.all([
            createChildren(data.codecs, codecsId),
            createChildren(data.streaming, streamingId),
            createChildren(data.drm, emeId),
        ]);
    } catch (e) {
        console.log(`Cant identify DRM System: ${e}`);
    }
});
