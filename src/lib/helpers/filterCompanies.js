export const filterCompanies = (companies, searchTerm) => {
  return companies.filter(company => {
    return company.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
}