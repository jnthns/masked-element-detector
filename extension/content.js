// Function to add hover effect for elements with the class "amp-mask"
function addHoverEffect() {
    const elements = document.querySelectorAll('.amp-mask');
    elements.forEach(element => {
        // Create a tooltip element
        const tooltip = document.createElement('div');
        tooltip.style.position = 'absolute';
        tooltip.style.padding = '5px';
        tooltip.style.backgroundColor = 'black';
        tooltip.style.color = 'white';
        tooltip.style.borderRadius = '5px';
        tooltip.style.fontSize = '12px';
        tooltip.style.pointerEvents = 'none';
        tooltip.style.zIndex = '1000';
        tooltip.style.visibility = 'hidden';
        tooltip.textContent = 'This element will be masked from replays';
        document.body.appendChild(tooltip);

        // Event listener for mouseover
        element.addEventListener('mouseover', (event) => {
            if (!element.dataset.persistentlyHighlighted) {
                element.style.outline = '2px solid blue';  // Apply blue outline on hover
            }
            tooltip.style.visibility = 'visible';
            positionTooltip(event, tooltip);
        });

        // Event listener for mouseout
        element.addEventListener('mouseout', () => {
            if (!element.dataset.persistentlyHighlighted) {
                element.style.outline = '';  // Remove outline only if not persistently highlighted
            }
            tooltip.style.visibility = 'hidden';
        });

        // Event listener for mousemove to update tooltip position
        element.addEventListener('mousemove', (event) => {
            positionTooltip(event, tooltip);
        });
    });
}

// Function to position the tooltip based on the cursor's position
function positionTooltip(event, tooltip) {
    const offsetX = 10;
    const offsetY = 20;
    tooltip.style.left = `${event.pageX + offsetX}px`;
    tooltip.style.top = `${event.pageY + offsetY}px`;
}

// Execute the hover effect function when the window is fully loaded
window.onload = () => {
    addHoverEffect();
};
