const id = setTimeout(function log() {
    console.log('hi');
    let id = setTimeout(log, 500);
}, 500);