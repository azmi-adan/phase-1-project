document.addEventListener('DOMContentLoaded', function() {
  const companyList = document.getElementById('company-list');
  const addCompanyForm = document.getElementById('add-company-form');
  const editCompanyForm = document.getElementById('edit-company-form');
  const editIdField = document.getElementById('edit-id');
  const searchInput = document.getElementById('search-input'); // Reference to search input

  let companiesData = []; // Variable to hold all companies data

  // Fetch companies from JSON Server
  function fetchCompanies() {
    fetch('http://localhost:3000/companies')
      .then(response => response.json())
      .then(data => {
        companiesData = data; // Store fetched data
        displayCompanies(companiesData);
      })
      .catch(error => console.error('Error fetching companies:', error));
  }

  // Display companies on the page
  function displayCompanies(companies) {
    companyList.innerHTML = '';

    companies.forEach(company => {
      const companyDiv = document.createElement('div');
      companyDiv.classList.add('company');
      companyDiv.setAttribute('data-id', company.id);

      // Company Logo
      const logoImg = document.createElement('img');
      logoImg.src = company.logo;
      logoImg.alt = company.name + ' logo';
      companyDiv.appendChild(logoImg);

      // Company Name
      const nameHeading = document.createElement('h2');
      nameHeading.textContent = company.name;
      companyDiv.appendChild(nameHeading);

      // Company Description
      const descriptionPara = document.createElement('p');
      descriptionPara.classList.add('company-description');
      descriptionPara.textContent = company.description;
      companyDiv.appendChild(descriptionPara);

      // Edit Button
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => prepareEdit(company));
      companyDiv.appendChild(editButton);

      // Delete Button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => deleteCompany(company.id));
      companyDiv.appendChild(deleteButton);

      companyList.appendChild(companyDiv);
    });

    if (companies.length === 0) {
      companyList.innerHTML = '<p>No companies found.</p>';
    }
  }

  // Search input event listener
  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredCompanies = companiesData.filter(company => {
      return company.name.toLowerCase().includes(searchTerm) ||
             company.description.toLowerCase().includes(searchTerm);
    });
    displayCompanies(filteredCompanies);
  });

  // Prepare edit form with company data
  function prepareEdit(company) {
    editIdField.value = company.id;
    document.getElementById('edit-name').value = company.name;
    document.getElementById('edit-logo').value = company.logo;
    document.getElementById('edit-description').value = company.description;

    // Hide add form, show edit form
    addCompanyForm.style.display = 'none';
    editCompanyForm.style.display = 'block';
  }

  // Cancel edit and show add form
  window.cancelEdit = function() { // Making cancelEdit function global
    editIdField.value = '';
    editCompanyForm.reset();
    addCompanyForm.style.display = 'block';
    editCompanyForm.style.display = 'none';
  };

  // Add new company
  addCompanyForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(addCompanyForm);
    const newCompany = {
      name: formData.get('name'),
      logo: formData.get('logo'),
      description: formData.get('description')
    };

    fetch('http://localhost:3000/companies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCompany)
    })
    .then(response => response.json())
    .then(() => {
      fetchCompanies();
      addCompanyForm.reset();
    })
    .catch(error => console.error('Error adding company:', error));
  });

  // Update existing company
  editCompanyForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(editCompanyForm);
    const updatedCompany = {
      id: formData.get('id'),
      name: formData.get('name'),
      logo: formData.get('logo'),
      description: formData.get('description')
    };

    fetch(`http://localhost:3000/companies/${updatedCompany.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedCompany)
    })
    .then(response => response.json())
    .then(() => {
      fetchCompanies();
      cancelEdit();
    })
    .catch(error => console.error('Error updating company:', error));
  });

  // Delete company
  function deleteCompany(companyId) {
    fetch(`http://localhost:3000/companies/${companyId}`, {
      method: 'DELETE'
    })
    .then(() => {
      fetchCompanies();
    })
    .catch(error => console.error('Error deleting company:', error));
  }

  // Initial fetch and display of companies
  fetchCompanies();
});


  