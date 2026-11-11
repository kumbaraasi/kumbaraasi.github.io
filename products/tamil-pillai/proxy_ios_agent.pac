function FindProxyForURL(url, host) {
    // Send all traffic directly to the internet, bypassing any proxy
    return "DIRECT";
}
