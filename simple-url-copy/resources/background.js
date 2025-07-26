// Background script for Manifest V3
// This service worker handles background tasks for the extension

// Installation handler
chrome.runtime.onInstalled.addListener(() => {
  console.log('Custom URL Copy extension installed');
});

// Handle messages from content scripts or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'copyToClipboard') {
    // Handle clipboard operations if needed
    sendResponse({success: true});
  }
});

// Handle extension startup
chrome.runtime.onStartup.addListener(() => {
  console.log('Custom URL Copy extension started');
});
