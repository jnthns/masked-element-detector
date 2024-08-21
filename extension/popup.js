document.getElementById('toggle-btn').addEventListener('click', () => {
    const button = document.getElementById('toggle-btn');
    const isActive = button.classList.toggle('active');

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: function (isActive) {
                const elements = document.querySelectorAll('.amp-mask');
                elements.forEach(element => {
                    if (isActive) {
                        element.style.outline = '2px solid red';  // Apply red outline for persistent highlighting
                        element.dataset.persistentlyHighlighted = 'true';  // Mark element as persistently highlighted
                    } else {
                        element.style.outline = '';  // Remove outline
                        delete element.dataset.persistentlyHighlighted;  // Remove persistent highlight marker
                    }
                });
            },
            args: [isActive]
        });
    });

    button.textContent = isActive ? 'Deactivate Highlighting' : 'Highlight amp-mask Elements';
});
