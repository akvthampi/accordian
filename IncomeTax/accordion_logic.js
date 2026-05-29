// accordion_logic.js

// Function to generate and render the accordion HTML based on a provided list
function renderAccordion(listToRender) {
    const container = document.getElementById('accordion-container');

    // Handle empty state (e.g., when search yields no results)
    if (!listToRender || listToRender.length === 0) {
        container.innerHTML = '<p style="padding: 20px; text-align: center; color: var(--text-light);">No matching content found.</p>';
        return;
    }

    let html = '';
    listToRender.forEach((item) => {
        html += `
            <div class="accordion-item">
                <button class="accordion-btn">
                    <span>${item.question}</span>
                    <i class="fas fa-plus icon"></i>
                </button>
                <div class="accordion-panel">
                    <div class="panel-content">
                        ${item.answer}
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    // Attach click events for opening/closing to the newly rendered items
    const accordions = document.querySelectorAll('.accordion-btn');

    accordions.forEach(acc => {
        acc.addEventListener('click', function () {
            // Toggle the 'active' class on the clicked button
            this.classList.toggle('active');

            // Find the panel associated with this button
            const panel = this.nextElementSibling;

            // Logic to smoothly open or close the panel
            if (panel.style.maxHeight) {
                // If it's open, close it
                panel.style.maxHeight = null;
            } else {
                // Close all other panels first
                document.querySelectorAll('.accordion-panel').forEach(p => p.style.maxHeight = null);
                document.querySelectorAll('.accordion-btn').forEach(b => b.classList.remove('active'));

                // Re-add active to clicked and open it
                this.classList.add('active');
                // Set max-height to the scrollHeight so it expands perfectly
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
}

function initializeAccordion() {
    // 1. Set the Title and Info from the data file
    if (typeof chapterMetadata !== 'undefined') {
        document.getElementById('chapter-title').textContent = chapterMetadata.title;
        document.getElementById('chapter-info').textContent = chapterMetadata.info;
        document.title = chapterMetadata.title;
    }

    // 2. Perform the initial render with the full list
    if (typeof qaList !== 'undefined') {
        renderAccordion(qaList);
    } else {
        renderAccordion([]);
    }

    // 3. Setup the Search Filter Logic
    const searchInput = document.getElementById('search-input');
    if (searchInput && typeof qaList !== 'undefined') {
        searchInput.addEventListener('input', function (e) {
            const searchTerm = e.target.value.toLowerCase();

            // Filter the original qaList based on the search term
            const filteredList = qaList.filter(item => {
                const questionText = item.question.toLowerCase();
                const answerText = item.answer.toLowerCase();
                return questionText.includes(searchTerm) || answerText.includes(searchTerm);
            });

            // Re-render the accordion with only the matching items
            renderAccordion(filteredList);
        });
    }
}

// Run the initialization
initializeAccordion();