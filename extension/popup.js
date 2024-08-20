document.getElementById('toggle-btn').addEventListener('click', () => {
    const button = document.getElementById('toggle-btn');
    const isActive = button.classList.toggle('active');

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: togglePersistentHighlighting,
            args: [isActive]
        });
    });

    button.textContent = isActive ? 'Deactivate Highlighting' : 'Highlight amp-mask Elements';
});

function togglePersistentHighlighting(isActive) {
    const elements = document.querySelectorAll('.amp-mask');
    elements.forEach(element => {
        if (isActive) {
            element.style.outline = '2px solid red';  // Apply red outline
        } else {
            element.style.outline = '';  // Remove outline
        }
    });
}
