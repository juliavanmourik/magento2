export default `
  query countriesList {
    countries {
      id
      two_letter_abbreviation
      full_name_locale
      full_name_english
    }
  }
`;
