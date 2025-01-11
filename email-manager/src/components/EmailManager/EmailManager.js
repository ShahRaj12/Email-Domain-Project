import React, { useState } from "react";
import { AvailableRecipients } from "./AvailableRecipients";
import { SelectedRecipients } from "./SelectedReceipients";
import { AutocompleteInput } from "./AutocompleteInput";
import { filterRecipients } from "../../utils/emailHelpers";
import sampleData from '../../sampleData'

const EmailManager = () => {
  const [recipients, setRecipients] = useState(sampleData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredRecipients = filterRecipients(recipients, searchTerm);

  // Handler functions for managing email state
  const toggleSelection = (email) => {
    setRecipients((prevRecipients) =>
      prevRecipients.map((recipient) =>
        recipient.email === email
          ? { ...recipient, isSelected: !recipient.isSelected }
          : recipient
      )
    );
  };

  const addEmail = (newEmail) => {
    if (!recipients.some((r) => r.email === newEmail)) {
      setRecipients([...recipients, { email: newEmail, isSelected: false }]);
    }
  };

  const handleSelectDomain = (domain) => {
    setRecipients((prevRecipients) =>
      prevRecipients.map((recipient) =>
        recipient.email.includes(domain)
          ? { ...recipient, isSelected: true }
          : recipient
      )
    );
  };

  return (
    <div className="email-manager" style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <AutocompleteInput recipients={recipients} onAddEmail={addEmail} onSearch={handleSearch} />
        <AvailableRecipients recipients={filteredRecipients} onToggle={toggleSelection} onSelectDomain={handleSelectDomain} />
      </div>
      <div>
        <SelectedRecipients recipients={recipients} onToggle={toggleSelection} />
      </div>
    </div>
  );
};

export default EmailManager;
