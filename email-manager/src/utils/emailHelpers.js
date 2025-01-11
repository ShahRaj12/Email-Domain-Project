// Filter recipients by email name or domain
export const filterRecipients = (recipients, searchTerm) => {
  if (!searchTerm) return recipients;

  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  return recipients.filter(({ email }) => {
    const [emailName, domain] = email.split("@");
    // Check if search term matches email name or domain
    return (
      emailName.toLowerCase().includes(lowerCaseSearchTerm) ||
      domain.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });
};
