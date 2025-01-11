import React from "react";
import { Input, Button } from "antd";

export const SelectedRecipients = ({ recipients, onToggle }) => {
  const selectedRecipients = recipients.filter((r) => r.isSelected);

  const groupedByDomain = selectedRecipients.reduce((acc, { email }) => {
    const domain = email.split("@")[1];
    if (!acc[domain]) acc[domain] = [];
    acc[domain].push(email);
    return acc;
  }, {});

  return (
    <div className="selected-recipients" style={{paddingTop:"25%"}}>
      <h2>Selected Recipients</h2>
      {Object.entries(groupedByDomain).map(([domain, emails]) => (
        <div key={domain} className="domain-group">
          <h3>{domain}</h3>
          {emails.map((email) => (
            <div key={email} className="email-item" style={{ marginBottom: '10px' }}>
              <span>{email}</span>
              <Button type="primary" danger onClick={() => onToggle(email)}>Remove</Button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
