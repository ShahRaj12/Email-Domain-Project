import React from "react";
import { Button } from "antd";

export const AvailableRecipients = ({ recipients, onToggle, onSelectDomain }) => {

  const groupedByDomain = recipients.reduce((groups, recipient) => {
    const domain = recipient.email.split("@")[1];
    if (!groups[domain]) {
      groups[domain] = [];
    }
    groups[domain].push(recipient);
    return groups;
  }, {});

  return (
    <div className="available-recipients">
      <h2>Available Recipients</h2>
      {Object.keys(groupedByDomain).map((domain) => (
        <div key={domain} >
          <div style={{ display: 'flex' }}>
            <h3>{domain}</h3>
            <Button style={{ marginTop: '15px' }}
              type="primary"
              onClick={() => onSelectDomain(domain)}
            >
              Select Domain </Button>
          </div>
          <ul>
            {groupedByDomain[domain].map((recipient) => (
              <div style={{ marginBottom: '10px' }}>
                <span>{recipient.email}</span>
                <Button
                color="primary"
                  variant={recipient.isSelected ? "outlined" : "dashed"}
                  onClick={() => onToggle(recipient.email)}
                   >
                  {recipient.isSelected ? "Deselect" : "Select"}
                </Button>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>


  );
};
