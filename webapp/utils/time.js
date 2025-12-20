const splitSecs = (duration) => {
    const mins = Math.floor(duration / 60);
    const secs = Math.round(duration % 60);
    return [mins, secs];
}

export const formatTime = (nSeconds) => splitSecs(nSeconds).map(num => num.toString().padStart(2, '0')).join(':');