// Course Filter and Sort functionality
document.getElementById('category').addEventListener('change', filterCourses);
document.getElementById('sort').addEventListener('change', sortCourses);

function filterCourses() {
    const category = document.getElementById('category').value;
    const courseItems = document.querySelectorAll('.course-item');

    courseItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function sortCourses() {
    const sortOrder = document.getElementById('sort').value;
    const courseItems = Array.from(document.querySelectorAll('.course-item'));

    courseItems.sort((a, b) => {
        const difficultyA = parseInt(a.getAttribute('data-difficulty'));
        const difficultyB = parseInt(b.getAttribute('data-difficulty'));

        if (sortOrder === 'high-to-low') {
            return difficultyB - difficultyA;
        } else if (sortOrder === 'low-to-high') {
            return difficultyA - difficultyB;
        } else {
            return 0; // No sorting
        }
    });

    const courseGrid = document.querySelector('.course-grid');
    courseGrid.innerHTML = ''; // Clear the existing list

    // Append sorted items back to the grid
    courseItems.forEach(item => {
        courseGrid.appendChild(item);
    });
}