// Alias for document.querySelector
$ = document.querySelector.bind(document);

// Event bubbling

// Clicking on .card-title will lift the event up to its parent
// and above until it reaches the document root

// Helper function
function handleClick(e) {
  console.log(`e.type: ${e.type}`);
  console.log(`e.target.className: ${e.target.className}`);
}

// Parent listener
$('.card-content').addEventListener('click', handleClick);


// Event delegation

// Clicking on .delete-item will cause the specific item to be
// removed from the collection by checking the event target

function handleDeleteItem(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
  }
}

$('.collection').addEventListener('click', handleDeleteItem);
