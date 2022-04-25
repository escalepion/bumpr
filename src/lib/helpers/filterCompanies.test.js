import { filterCompanies } from "./filterCompanies";
const sampleData = [
  {
    name: 'abc',
  },
  {
    name: 'def',
  },
]

it('filters companies', () => {
  const filteredCompanies = filterCompanies(sampleData, 'abc');
  expect(filteredCompanies.length).toBe(1);
});