function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    const arrow = dropdown.previousElementSibling.querySelector('.dropdown-arrow');
  
    dropdown.classList.toggle('active');
    if (dropdown.classList.contains('active')) {
      arrow.querySelector('i').classList.remove('fa-chevron-up');
      arrow.querySelector('i').classList.add('fa-chevron-down');
    } else {
      arrow.querySelector('i').classList.remove('fa-chevron-down');
      arrow.querySelector('i').classList.add('fa-chevron-up');
    }
  }
  