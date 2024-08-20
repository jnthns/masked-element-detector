document.getElementById('toggle-btn').addEventListener('click', () => {
    const button = document.getElementById('toggle-btn');
    const isActive = button.classList.toggle('active');

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: toggleHighlighting,
            args: [isActive]
        });
    });

    button.textContent = isActive ? 'Deactivate Highlighting' : 'Highlight amp-mask Elements';
});

function toggleHighlighting(isActive) {
    const elements = document.querySelectorAll('.amp-mask');
    elements.forEach(element => {
        if (isActive) {
            element.style.border = '2px solid red';  // Apply red border
        } else {
            element.style.border = '';  // Remove border
        }
    });
}
